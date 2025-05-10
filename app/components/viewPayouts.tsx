'use client';
import Image from 'next/image';
import React, { useEffect, useState } from "react";
import { executePayout, getAllPayouts } from "../lib/api";

interface Payout {
  id: string;
  createdAt: string;
  updatedAt: string;
  amount: {
    tokenSymbol: string;
    tokenAmount: number;
  };
  details: {
    type: string;
    fiatAndRailCode: string;
    fiatAmount: {
      fiatAmount: number;
      fiatCurrencyCode: string;
    };
    transactionFee: {
      tokenSymbol: string;
      tokenAmount: number;
    };
    exchangeFeePercentage: number;
    exchangeRate: number;
    feeTotal: {
      tokenSymbol: string;
      tokenAmount: number;
    };
    fiatPayoutStatus: {
      type: string;
      completedAt?: string;
    };
  };
}

export interface PayoutData {
  id: string;
  createdAt: string;
  updatedAt: string;
  sourceAccountId: string;
  status: string;
  payouts: Payout[];
}

const PayoutsTable: React.FC = () => {
  const [payouts, setPayouts] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleRefresh();
  }, []);

  const handleRefresh = () => {
    setLoading(true)
    const fetchPayouts = async () => {
      const payouts = await getAllPayouts();
      setPayouts(payouts);
      setLoading(false)
    };
    fetchPayouts();
  };

  const handleExecutePayout = (id: any) => {
    executePayout(id)
    handleRefresh()
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Payouts</h1>
      <button style={styles.refreshButton} className={loading ? "loading" : ""} onClick={handleRefresh} disabled={loading}>
        Refresh Payments
      </button>
      <table style={styles.table}>
        <thead style={styles.tableHeader}>
          <tr>
            <th style={styles.headerCell}>Payout ID</th>
            <th style={styles.headerCell}>Amount</th>
            <th style={styles.headerCell}>Token Symbol</th>
            <th style={styles.headerCell}>Fiat Amount</th>
            <th style={styles.headerCell}>Fiat Currency</th>
            <th style={styles.headerCell}>Status</th>
            <th style={styles.headerCell}>Created At</th>
            <th style={styles.headerCell}>Execute?</th>
          </tr>
        </thead>
        <tbody>
          {payouts &&
            payouts.results.map((result: any) =>
              result.payouts.map((payout: any) => (
                <tr key={payout.id} style={styles.row}>
                  <td style={styles.cell}>{result.id.slice(0, 5)}</td>
                  <td style={styles.cell}>{payout.amount.tokenAmount}</td>
                  <td style={styles.cell}>{payout.amount.tokenSymbol}</td>
                  <td style={styles.cell}>{payout.details.fiatAmount.fiatAmount}</td>
                  <td style={styles.cell}>{payout.details.fiatAmount.fiatCurrencyCode}</td>
                  <td style={styles.cell}>{payout.details.fiatPayoutStatus.type}</td>
                  <td style={styles.cell}>
                    {new Date(payout.createdAt).toLocaleString(undefined, {
                      dateStyle: "short",
                    })}
                  </td>
                  <td style={styles.cell}>
                    {payout.details.fiatPayoutStatus.type == "created" ? <button style={styles.execute} onClick={() => handleExecutePayout(result.id)}>Execute</button> : ""}
                  </td>
                </tr>
              ))
            )}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    padding: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
    backgroundColor: "#1e1e2f", // Dark background
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
    color: "#ffffff", // Light text
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#ffffff", // White title
  },
  refreshButton: {
    padding: "10px 20px",
    backgroundColor: "rgb(85, 85, 85)", // Blue button
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginBottom: "20px",
    fontSize: "1rem",
    transition: "background-color 0.3s",
  },
  refreshButtonHover: {
    backgroundColor: "#0056b3", // Darker blue on hover
  },
  table: {
    width: "100%",
    backgroundColor: "#2a2a3b", // Slightly lighter dark background for table
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
  },
  tableHeader: {
    backgroundColor: "#44475a", // Darker gray for the header
    color: "#ffffff", // White text for header
  },
  headerCell: {
    padding: "10px 15px",
    fontWeight: "bold",
    fontSize: "1rem",
    borderBottom: "1px solid #555", // Subtle border
  },
  row: {
    borderBottom: "1px solid #555", // Subtle row divider
    transition: "background-color 0.3s",
  },
  rowHover: {
    backgroundColor: "#333344", // Highlight on row hover
  },
  cell: {
    padding: "10px 15px",
    fontSize: "0.9rem",
    color: "#dddddd", // Lighter gray text for cells
  },
  execute: {
    fontSize: "0.9rem",
    cursor: "pointer",
    padding: "2px",
    border: "1px solid green",
    borderRadius: "5px",
    color: "green", // Lighter gray text for cells
  },
  loading: {
    border: "1px solid red"
  }
};

export default PayoutsTable;