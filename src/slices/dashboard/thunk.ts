// In your component
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'slices/store';
import { fetchBestSellers, fetchNewProducts, fetchPendingOrders } from './reducer';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface RevenueResponse {
  success: boolean;
  data: {
    items: Array<{ totalRevenue: number }>;
    totalCount: number;
    pageNumber: number;
    pageSize: number;
    totalPages: number;
  };
  message: string;
  errors: null | string[];
}

const baseUrl = "https://spssapi-hxfzbchrcafgd2hg.southeastasia-01.azurewebsites.net/api";
export const fetchTotalRevenue = createAsyncThunk(
  'dashboard/fetchTotalRevenue',
  async () => {
    try {
      const response = await axios.get<RevenueResponse>(
        `${baseUrl}/dashboards/total-revenue`,
        {
          params: { pageNumber: 1, pageSize: 10 }
        }
      );
      
      if (response.data.success && response.data.data.items.length > 0) {
        return response.data.data.items[0].totalRevenue;
      }
      return 0;
    } catch (error) {
      console.error('Error fetching revenue:', error);
      throw error;
    }
  }
);

const Dashboard = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchTotalRevenue());
    dispatch(fetchBestSellers({ pageNumber: 1, pageSize: 10 }));
    dispatch(fetchNewProducts({ pageNumber: 1, pageSize: 10 }));
    dispatch(fetchPendingOrders({ topCount: 10 }));
  }, [dispatch]);
};