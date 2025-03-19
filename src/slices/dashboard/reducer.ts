import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Types
interface BestSeller {
  id: string;
  thumbnail: string;
  name: string;
  description: string;
  price: number;
  marketPrice: number;
}

interface BestSellersResponse {
  items: BestSeller[];
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  totalPages: number;
}

interface RevenueItem {
  totalRevenue: number;
}

interface RevenueResponse {
  success: boolean;
  data: {
    items: RevenueItem[];
    totalCount: number;
    pageNumber: number;
    pageSize: number;
    totalPages: number;
  };
  message: string;
  errors: null | string[];
}

interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
  errors: null | string[];
}

interface DashboardState {
  totalRevenue: number;
  bestSellers: BestSellersResponse | null;
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: DashboardState = {
  totalRevenue: 0,
  bestSellers: {
    items: [],
    totalCount: 0,
    pageNumber: 1,
    pageSize: 10,
    totalPages: 0
  },
  loading: false,
  error: null
};

// Thunk actions
export const fetchTotalRevenue = createAsyncThunk(
  'dashboard/fetchTotalRevenue',
  async ({ pageNumber = 1, pageSize = 10 }: { pageNumber?: number; pageSize?: number }) => {
    try {
      const { data } = await axios.get<RevenueResponse>(
        'http://localhost:5041/api/dashboards/total-revenue',
        { params: { pageNumber, pageSize } }
      );
      return data.data.items[0]?.totalRevenue ?? 0;
    } catch (error) {
      console.error('Error fetching revenue:', error);
      throw error;
    }
  }
);

export const fetchBestSellers = createAsyncThunk(
  'dashboard/fetchBestSellers',
  async ({ pageNumber = 1, pageSize = 10 }: { pageNumber?: number; pageSize?: number }) => {
    try {
      const response = await axios.get<BestSellersResponse>(
        `http://localhost:5041/api/dashboards/best-sellers`,
        {
          params: { pageNumber, pageSize }
        }
      );
      
      console.log('Best sellers API response:', response.data);
      
      if (!response.data || !response.data.items) {
        throw new Error('Invalid response format');
      }
      
      return response.data;
    } catch (error) {
      console.error('Error in fetchBestSellers:', error);
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || error.message);
      }
      throw error;
    }
  }
);

// Slice
const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Total Revenue
      .addCase(fetchTotalRevenue.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log('fetchTotalRevenue.pending'); // Debug log
      })
      .addCase(fetchTotalRevenue.fulfilled, (state, action) => {
        state.loading = false;
        state.totalRevenue = action.payload;
        console.log('fetchTotalRevenue.fulfilled with payload:', action.payload); // Debug log
      })
      .addCase(fetchTotalRevenue.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch total revenue';
        console.log('fetchTotalRevenue.rejected with error:', action.error); // Debug log
      })
      // Best Sellers
      .addCase(fetchBestSellers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBestSellers.fulfilled, (state, action) => {
        state.loading = false;
        state.bestSellers = action.payload;
        state.error = null;
      })
      .addCase(fetchBestSellers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch best sellers';
        state.bestSellers = state.bestSellers || initialState.bestSellers;
      });
  }
});

export default dashboardSlice.reducer;
