'use client'
import React, { useState } from 'react';
import { searchOrganizations } from '../lib/api';

export const SearchComponent: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = {
        query: searchQuery, // Adjust the payload as per the API requirements
      };

      // Call the API
      const response = await searchOrganizations(data);
      setResults(response.organizations || []);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Search Organizations</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Enter search query"
      />
      <button onClick={handleSearch} disabled={loading}>
        {loading ? 'Searching...' : 'Search'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul>
        {results.map((result, index) => (
          <li key={index}>{result.name}</li> // Adjust based on API response structure
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;