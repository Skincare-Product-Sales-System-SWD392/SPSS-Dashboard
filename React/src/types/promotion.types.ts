import { ApiResponse } from './api.types';

export interface Promotion {
  id?: number;
  name: string;
  description: string;
  discountAmount: number;
  startDate: string;
  endDate: string;
}

export type PromotionResponse = ApiResponse<Promotion[]>;
export type SinglePromotionResponse = ApiResponse<Promotion>;
