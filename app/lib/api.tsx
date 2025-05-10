import axios from 'axios';
import { PayoutData } from "../components/viewPayouts";
// Types
import { AccountInput, AccountOutput, PayoutRequestInput, PayoutRequestOutput } from "../lib/validation";

const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;
const API_URL = 'https://api-staging.muralpay.com/api/';
const CAT_API = 'live_drXBAVfNeVjQ2YWzFHOHDMrneGFT0QLdhkmjKOf19kEQlqDOfq0Reex5mlqfIou7';
const TRANSFER_KEY = process.env.NEXT_PUBLIC_TRANSFER_KEY;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_TOKEN}`,
    'transfer-api-key': TRANSFER_KEY
  },
});

export const createAccount = async (
  account: AccountInput
): Promise<{ output: AccountOutput }> => {
  try {
    const response = await api.post('/accounts', account);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      console.error('API Error:', error.response.data);
      return error
    } else {
      console.error('Network Error:', error.message);
      return error
    }
  };
}
export const requestPayout = async (
  payout: PayoutRequestInput
): Promise<{ output: PayoutRequestOutput }> => {
  try {
    const response = await api.post('/payouts/payout', payout);
    return response.data;
  } catch (error: any) {
    // Handle errors
    if (error.response) {
      console.error('API Error:', error.response.data);
      throw new Error(error.response.data.message || 'API Error');
    } else {
      console.error('Network Error:', error.message);
      throw new Error('Network Error');
    }
  };
}
export const getAllPayouts = async (): Promise<{ payouts: PayoutData }> => {
  try {
    const response = await api.post('/payouts/search');
    return response.data;
  } catch (error: any) {
    // Handle errors
    if (error.response) {
      console.error('API Error:', error.response.data);
      throw new Error(error.response.data.message || 'API Error');
    } else {
      console.error('Network Error:', error.message);
      throw new Error('Network Error');
    }
  };
}
export const executePayout = async (id: any): Promise<{ output: PayoutRequestOutput }> => {
  try {
    const response = await api.post(`/payouts/payout/${id}/execute`);
    return response.data;
  } catch (error: any) {
    // Handle errors
    if (error.response) {
      console.error('API Error:', error.response.data);
      throw new Error(error.response.data.message || 'API Error');
    } else {
      console.error('Network Error:', error.message);
      throw new Error('Network Error');
    }
  };
}

export const searchOrganizations = async (): Promise<{ output: any }> => {
  const id = 'b95beedc-bc42-4ba7-8066-c0dd85cdf762';
  try {
    const response = await api.post('/organizations/search', { filter: { type: 'name', name: 'james' } });
    return response.data;
  } catch (error: any) {
    // Handle errors
    if (error.response) {
      console.error('API Error:', error.response.data);
      throw new Error(error.response.data.message || 'API Error');
    } else {
      console.error('Network Error:', error.message);
      throw new Error('Network Error');
    }
  };
}
export const otherAPI = async () => {
  try {
    // Make the POST request using Axios
    const response = await axios.get('https://uselessfacts.jsph.pl/random.json', {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error: any) {
    if (error.response) {
      console.error('API Error:', error.response.data);
      throw new Error(error.response.data.message || 'API Error');
    } else {
      console.error('Network Error:', error.message);
      throw new Error('Network Error');
    }
  }
};