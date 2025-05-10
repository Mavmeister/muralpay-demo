// 'use client'
// import React, { useEffect, useState } from "react";

// import { executePayout } from "../lib/api";
// interface Payout {
//   id: string;
//   createdAt: string;
//   updatedAt: string;
//   amount: {
//     tokenSymbol: string;
//     tokenAmount: number;
//   };
//   details: {
//     type: string;
//     fiatAndRailCode: string;
//     fiatAmount: {
//       fiatAmount: number;
//       fiatCurrencyCode: string;
//     };
//     transactionFee: {
//       tokenSymbol: string;
//       tokenAmount: number;
//     };
//     exchangeFeePercentage: number;
//     exchangeRate: number;
//     feeTotal: {
//       tokenSymbol: string;
//       tokenAmount: number;
//     };
//     fiatPayoutStatus: {
//       type: string;
//       completedAt?: string;
//     };
//   };
// }

// export interface PayoutData {
//   id: string;
//   createdAt: string;
//   updatedAt: string;
//   sourceAccountId: string;
//   status: string;
//   payouts: Payout[];
// }

// const PayoutsTable: React.FC = () => {
//   const [payouts, setPayouts] = useState<any | null>(null);
//   return (
//     <div>

//     </div>
//   );
// };

// export default PayoutsTable;