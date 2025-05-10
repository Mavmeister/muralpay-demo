export interface Customer {
  name: string;
  email: string;
}

export interface AccountInput {
  name: string;
  description: string;
}

export interface AccountOutput {
  id: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  isApiEnabled: boolean;
}

export interface PayoutRequestInput {
  sourceAccountId: string;
  memo: string;
  payouts: any;
}

export interface PayoutRequestOutput {
  sourceAccountId: string;
  memo: number;
  payouts: any;
}

export interface PayoutResponse {
  id: string;
  status: 'pending' | 'completed' | 'failed';
  amount: number;
  currency: string;
  createdAt: string;
}