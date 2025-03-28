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

interface NewProductsResponse {
  success: boolean;
  data: {
    items: BestSeller[];
    totalCount: number;
    pageNumber: number;
    pageSize: number;
    totalPages: number;
  };
  message: string;
  errors: null | string[];
}

// Add this new interface for pending orders
interface OrderDetail {
  productId: string;
  productItemId: string;
  productImage: string;
  productName: string;
  variationOptionValues: string[];
  quantity: number;
  price: number;
  isReviewable: boolean;
}

interface PendingOrder {
  id: string;
  status: string;
  orderTotal: number;
  cancelReasonId: string | null;
  createdTime: string;
  paymentMethodId: string;
  orderDetails: OrderDetail[];
}

// Add this new interface for canceled orders
interface CanceledOrder {
  orderId: string;
  userId: string;
  username: string;
  fullname: string;
  total: number;
  refundTime: string;
  refundReason: string;
  refundRate: number;
  refundAmount: number;
}

interface CanceledOrdersResponse {
  items: CanceledOrder[];
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  totalPages: number;
}

interface DashboardState {
  totalRevenue: number;
  bestSellers: BestSellersResponse | null;  
  newProducts: BestSeller[] | null;
  pendingOrders: PendingOrder[];
  canceledOrders: CanceledOrder[]; // Add this new property
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
  newProducts: null,
  pendingOrders: [],
  canceledOrders: [], // Initialize the new property
  loading: false,
  error: null
};
const baseUrl = "https://spssapi-hxfzbchrcafgd2hg.southeastasia-01.azurewebsites.net/api";
// Thunk actions
export const fetchTotalRevenue = createAsyncThunk(
  'dashboard/fetchTotalRevenue',
  async ({ pageNumber = 1, pageSize = 10 }: { pageNumber?: number; pageSize?: number }) => {
    try {
      const { data } = await axios.get<RevenueResponse>(
        `${baseUrl}/dashboards/total-revenue`,
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
      const response = await axios.get(
        `${baseUrl}/dashboards/best-sellers`,
        {
          params: { pageNumber, pageSize }
        }
      );
      
      console.log('Best sellers API response:', response.data);
      
      // Check if response has the expected structure
      if (response.data && Array.isArray(response.data)) {
        // Direct array response
        return {
          items: response.data,
          totalCount: response.data.length,
          pageNumber,
          pageSize,
          totalPages: Math.ceil(response.data.length / pageSize)
        };
      } else if (response.data && response.data.items) {
        // Response with items property
        return response.data;
      } else if (response.data && response.data.data && response.data.data.items) {
        // Response with data.items structure
        return response.data.data;
      }
      
      // If we get here, the response format is unexpected
      console.error('Unexpected response format:', response.data);
      return {
        items: [],
        totalCount: 0,
        pageNumber,
        pageSize,
        totalPages: 0
      };
    } catch (error) {
      console.error('Error in fetchBestSellers:', error);
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || error.message);
      }
      throw error;
    }
  }
);

export const fetchNewProducts = createAsyncThunk(
  'dashboard/fetchNewProducts',
  async ({ pageNumber = 1, pageSize = 10 }: { pageNumber?: number; pageSize?: number }) => {
    try {
      const response = await axios.get(
        `${baseUrl}/products`,
        {
          params: { pageNumber, pageSize, sortBy: 'news' }
        }
      );
      
      console.log('New products API response:', response.data);
      
      // Handle different response formats
      if (response.data && response.data.success && response.data.data && response.data.data.items) {
        // Standard success response with data.items
        return response.data.data.items;
      } else if (response.data && Array.isArray(response.data)) {
        // Direct array response
        return response.data;
      } else if (response.data && response.data.items && Array.isArray(response.data.items)) {
        // Response with items property
        return response.data.items;
      }
      
      // If we reach here, log the unexpected format but return an empty array instead of throwing
      console.error('Unexpected response format for new products:', response.data);
      return [];
    } catch (error) {
      console.error('Error in fetchNewProducts:', error);
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || error.message);
      }
      throw error;
    }
  }
);

// Update the fetchPendingOrders thunk with the correct API endpoint
export const fetchPendingOrders = createAsyncThunk(
  'dashboard/fetchPendingOrders',
  async ({ topCount }: { topCount: number }, { rejectWithValue }) => {
    try {
      console.log('Fetching pending orders with URL:', `${baseUrl}/dashboards/top-pending?topCount=${topCount}`);
      
      const response = await axios.get(`${baseUrl}/dashboards/top-pending?topCount=${topCount}`);
      
      console.log('Pending orders raw response:', response);
      console.log('Pending orders API response data:', response.data);
      
      // Check if we have a valid response
      if (!response.data) {
        console.error('API returned undefined or null data');
        return [];
      }
      
      // The API returns the data directly, not nested under a data property
      if (response.data && response.data.items) {
        console.log('Found items in response data:', response.data.items);
        return response.data.items;
      } else if (Array.isArray(response.data)) {
        console.log('Response data is an array:', response.data);
        return response.data;
      }
      
      console.error('Unexpected response format for pending orders:', response.data);
      return [];
    } catch (error : any) {
      console.error('Error fetching pending orders:', error);
      console.error('Error details:', error.response || error.message || error);
      return rejectWithValue(error.response?.data || 'Error fetching pending orders');
    }
  }
);

// Update the fetchCanceledOrders thunk to remove pagination parameters
export const fetchCanceledOrders = createAsyncThunk(
  'dashboard/fetchCanceledOrders',
  async (_, { rejectWithValue }) => {
    try {
      console.log('Fetching canceled orders with URL:', `${baseUrl}/orders/canceled-orders`);
      
      const response = await axios.get(`${baseUrl}/orders/canceled-orders`);
      
      console.log('Canceled orders API response:', response.data);
      
      // Check if we have a valid response
      if (!response.data) {
        console.error('API returned undefined or null data');
        return rejectWithValue('API returned no data');
      }
      
      // Handle the response format based on the new API structure
      if (response.data.success && Array.isArray(response.data.data)) {
        console.log('Found items in response data:', response.data.data);
        return response.data.data;
      } else {
        console.error('Unexpected response format:', response.data);
        return rejectWithValue('Unexpected response format');
      }
    } catch (error: any) {
      console.error('Error fetching canceled orders:', error);
      return rejectWithValue(error.message || 'Error fetching canceled orders');
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
      })
      // New Products
      .addCase(fetchNewProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNewProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.newProducts = action.payload;
        state.error = null;
        console.log('New products stored in state:', action.payload); // Debug log
      })
      .addCase(fetchNewProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch new products';
        state.newProducts = null;
      })
      // Pending Orders
      .addCase(fetchPendingOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPendingOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.pendingOrders = action.payload || [];
        console.log('Pending orders stored in state:', action.payload);
      })
      .addCase(fetchPendingOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = typeof action.payload === 'string' 
          ? action.payload 
          : action.error.message || 'Failed to fetch pending orders';
      })
      // Canceled Orders
      .addCase(fetchCanceledOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log('fetchCanceledOrders.pending');
      })
      .addCase(fetchCanceledOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.canceledOrders = action.payload || [];
        state.error = null;
        console.log('Canceled orders stored in state:', state.canceledOrders?.length || 0);
      })
      .addCase(fetchCanceledOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || 'Failed to fetch canceled orders';
        console.error('Error fetching canceled orders:', action.payload);
      });
  }
});

export default dashboardSlice.reducer;
