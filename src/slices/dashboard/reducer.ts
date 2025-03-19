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

interface DashboardState {
  totalRevenue: number;
  bestSellers: BestSellersResponse | null;
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: DashboardState = {
  totalRevenue: 0,
  bestSellers: null,
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
      console.log('Fetching best sellers with params:', { pageNumber, pageSize });
      const response = await axios.get(`http://localhost:5041/api/dashboards/best-sellers`, {
        params: { pageNumber, pageSize }
      });
      console.log('Best sellers API response:', response.data);
      
      // Check if response.data has a data property
      if (response.data && response.data.data) {
        return response.data.data;
      }
      
      // If not, return the response.data directly if it has the expected structure
      if (response.data && Array.isArray(response.data.items)) {
        return response.data;
      }
      
      // If neither structure matches, create a default structure
      return {
        items: [],
        totalCount: 0,
        pageNumber,
        pageSize,
        totalPages: 0
      };
    } catch (error) {
      console.error('Error fetching best sellers:', error);
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
        console.log('Setting bestSellers state with:', action.payload);
        state.bestSellers = action.payload;
      })
      .addCase(fetchBestSellers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch best sellers';
        console.error('Best sellers fetch failed:', action.error);
      });
  }
});

export default dashboardSlice.reducer;
