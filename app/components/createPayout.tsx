'use client';
import React, { useState } from 'react';
import { DisabledInputFields } from '../components/disabledCreatePayout';
import { requestPayout } from '../lib/api';

const payoutSample = {
  sourceAccountId: "ff62e99a-fea7-417e-873e-39133c0ae4fa",
  memo: "Sample test",
  payouts: [
    {
      amount: {
        tokenAmount: 1.5,
        tokenSymbol: "USDC",
      },
      payoutDetails: {
        fiatAndRailDetails: {
          bankRoutingNumber: "054000030",
          type: "usd",
          symbol: "USD",
          bankAccountNumber: "12345678",
          accountType: "SAVINGS",
        },
        bankAccountOwner: "San Francisco",
        type: "fiat",
        bankName: "Bank of Money",
      },
      recipientInfo: {
        firstName: "John Test",
        lastName: "Mavy",
        dateOfBirth: "1992-03-03",
        type: "individual",
        email: "test@test.com",
        physicalAddress: {
          address1: "1145 B Street",
          address2: "Apt 1",
          country: "US",
          state: "CA",
          city: "San Francisco",
          zip: "94123",
        },
      },
    },
  ],
};

export const PayoutRequestComponent: React.FC = () => {
  const [results, setResults] = useState<any>({});
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleRequestPayout = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await requestPayout(payoutSample);
      setResults(response);
    } catch (e: any) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Create Payout</h1>
      <div style={styles.formContainer}>
        <DisabledInputFields />
        <button
          style={loading ? styles.disabledButton : styles.primaryButton}
          onClick={handleRequestPayout}
          disabled={loading}
        >
          {loading ? 'Creating Payout...' : 'Create Payout'}
        </button>
      </div>
      {results && results.status && (
        <p style={styles.successMessage}>Success: {results.status}</p>
      )}
      {error && <p style={styles.errorMessage}>Error: {error.message}</p>}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    padding: "20px",
    maxWidth: "800px",
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
  formContainer: {
    marginBottom: "20px",
  },
  primaryButton: {
    width: "100%",
    padding: "10px 15px",
    backgroundColor: "#007BFF", // Blue button
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.3s",
  },
  disabledButton: {
    width: "100%",
    padding: "10px 15px",
    backgroundColor: "#555", // Gray for disabled state
    color: "#aaa",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "not-allowed",
  },
  successMessage: {
    color: "#4CAF50", // Green for success
    fontWeight: "bold",
    marginTop: "10px",
  },
  errorMessage: {
    color: "#FF5252", // Red for error
    fontWeight: "bold",
    marginTop: "10px",
  },
};

export default PayoutRequestComponent;