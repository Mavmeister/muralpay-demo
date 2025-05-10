import React from "react";

export const DisabledInputFields: React.FC = () => {
  // Data object
  const data = {
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

  return (
    <div>
      {/* Source Account ID */}
      <label>
        Source Account ID:
        <input type="text" value={data.sourceAccountId} disabled />
      </label>
      <br />
      <br />

      {/* Memo */}
      <label>
        Memo:
        <input type="text" value={data.memo} disabled />
      </label>
      <br />
      <br />

      {/* Payouts */}
      <h2>Payouts</h2>
      {data.payouts.map((payout, index) => (
        <fieldset key={index} style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "10px" }}>
          <legend>Payout {index + 1}</legend>

          {/* Amount */}
          <label>
            Token Amount:
            <input type="text" value={payout.amount.tokenAmount} disabled />
          </label>
          <br />
          <label>
            Token Symbol:
            <input type="text" value={payout.amount.tokenSymbol} disabled />
          </label>
          <br />
          <br />

          {/* Payout Details */}
          <h3>Payout Details</h3>
          <label>
            Bank Routing Number:
            <input type="text" value={payout.payoutDetails.fiatAndRailDetails.bankRoutingNumber} disabled />
          </label>
          <br />
          <label>
            Type:
            <input type="text" value={payout.payoutDetails.fiatAndRailDetails.type} disabled />
          </label>
          <br />
          <label>
            Symbol:
            <input type="text" value={payout.payoutDetails.fiatAndRailDetails.symbol} disabled />
          </label>
          <br />
          <label>
            Bank Account Number:
            <input type="text" value={payout.payoutDetails.fiatAndRailDetails.bankAccountNumber} disabled />
          </label>
          <br />
          <label>
            Account Type:
            <input type="text" value={payout.payoutDetails.fiatAndRailDetails.accountType} disabled />
          </label>
          <br />
          <label>
            Bank Account Owner:
            <input type="text" value={payout.payoutDetails.bankAccountOwner} disabled />
          </label>
          <br />
          <label>
            Bank Type:
            <input type="text" value={payout.payoutDetails.type} disabled />
          </label>
          <br />
          <label>
            Bank Name:
            <input type="text" value={payout.payoutDetails.bankName} disabled />
          </label>
          <br />
          <br />

          {/* Recipient Info */}
          <h3>Recipient Info</h3>
          <label>
            First Name:
            <input type="text" value={payout.recipientInfo.firstName} disabled />
          </label>
          <br />
          <label>
            Last Name:
            <input type="text" value={payout.recipientInfo.lastName} disabled />
          </label>
          <br />
          <label>
            Date of Birth:
            <input type="text" value={payout.recipientInfo.dateOfBirth} disabled />
          </label>
          <br />
          <label>
            Type:
            <input type="text" value={payout.recipientInfo.type} disabled />
          </label>
          <br />
          <label>
            Email:
            <input type="text" value={payout.recipientInfo.email} disabled />
          </label>
          <br />
          <br />

          {/* Physical Address */}
          <h3>Physical Address</h3>
          <label>
            Address 1:
            <input type="text" value={payout.recipientInfo.physicalAddress.address1} disabled />
          </label>
          <br />
          <label>
            Address 2:
            <input type="text" value={payout.recipientInfo.physicalAddress.address2} disabled />
          </label>
          <br />
          <label>
            Country:
            <input type="text" value={payout.recipientInfo.physicalAddress.country} disabled />
          </label>
          <br />
          <label>
            State:
            <input type="text" value={payout.recipientInfo.physicalAddress.state} disabled />
          </label>
          <br />
          <label>
            City:
            <input type="text" value={payout.recipientInfo.physicalAddress.city} disabled />
          </label>
          <br />
          <label>
            ZIP:
            <input type="text" value={payout.recipientInfo.physicalAddress.zip} disabled />
          </label>
        </fieldset>
      ))}
    </div>
  );
};