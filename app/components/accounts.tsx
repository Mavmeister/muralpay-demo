'use client';
import React, { useState } from 'react';
import { createAccount, otherAPI } from '../lib/api';

export const AccountComponent: React.FC = () => {
  const [accountName, setAccountName] = useState('');
  const [accountDescription, setAccountDescription] = useState('');
  const [results, setResults] = useState<any>({});
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [fact, setFact] = useState("");

  const handleAccountCreation = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = {
        name: accountName,
        description: accountDescription,
        user: {
          "organizationId": "9397001a-5acc-4c2d-88d2-edb24650adb1",
          "name": "test test",
          "email": "jpmaveety@gmail.com",
          "address": "",
          "taxId": "",
          "phoneNumber": "+1 253 318 8265",
          "businessActivity": null,
          "relationshipToCounterparty": null,
          "physicalAddressInput": {
            "address1": "1545 Greenwich Street",
            "address2": "Apt 4",
            "city": "San Francisco",
            "country": "AF",
            "state": "Balkh",
            "zip": "94123",
            "organizationId": "9397001a-5acc-4c2d-88d2-edb24650adb1"
          },
          "contactType": "INDIVIDUAL",
          "dateOfBirth": null,
          "supportedBlockchains": []
        }
      };

      // Call the API
      const response = await createAccount(data);
      const randomFact = await otherAPI();
      setResults(response);
      setFact(randomFact.text)
    } catch (e: any) {
      console.log(e)
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Create Account</h1>
      <div style={styles.formContainer}>
        <input
          style={styles.input}
          type="text"
          value={accountName}
          onChange={(e) => setAccountName(e.target.value)}
          placeholder="Enter Account Name"
        />
        <input
          style={styles.input}
          type="text"
          value={accountDescription}
          onChange={(e) => setAccountDescription(e.target.value)}
          placeholder="Enter Account Description"
        />
        <button
          style={loading ? styles.disabledButton : styles.primaryButton}
          onClick={handleAccountCreation}
          disabled={!(accountName.length > 2 && accountDescription.length > 2)}
        >
          {loading ? 'Creating Account...' : 'Create Account'}
        </button>
      </div>

      {error && <p style={styles.errorMessage}>{error.message}</p>}
      <ul style={styles.resultsList}>
        {results.name && <li style={styles.resultItem}>Name: {results.name}</li>}
        {results.status && <li style={styles.resultItem}>Status: {results.status}</li>}
        {results.description && (
          <li style={styles.resultItem}>Description: {results.description}</li>
        )}
      </ul>
      <p>Random Fact: {fact}</p>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    padding: "20px",
    maxWidth: "600px",
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
    display: "flex",
    // flexDirection: "column",
    gap: "15px",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    fontSize: "1rem",
    border: "1px solid #44475a", // Subtle border
    borderRadius: "5px",
    backgroundColor: "#2a2a3b", // Dark input background
    color: "#ffffff", // Light text
    outline: "none",
  },
  primaryButton: {
    padding: "10px 15px",
    backgroundColor: "#007BFF", // Blue button
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.3s",
    textAlign: "center",
  },
  disabledButton: {
    padding: "10px 15px",
    backgroundColor: "#555", // Gray for disabled state
    color: "#aaa",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "not-allowed",
    // textAlign: "center",
  },
  errorMessage: {
    color: "#FF5252", // Red for error
    fontWeight: "bold",
    marginTop: "10px",
  },
  resultsList: {
    listStyleType: "none",
    padding: 0,
    marginTop: "20px",
  },
  resultItem: {
    marginBottom: "10px",
    fontSize: "1rem",
    color: "#dddddd", // Lighter gray text for results
  },
};

export default AccountComponent;