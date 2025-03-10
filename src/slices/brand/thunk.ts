import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getAllBrands as getAllBrandsApi,
  createBrand as createBrandApi,
  updateBrand as updateBrandApi,
  deleteBrand as deleteBrandApi,
} from "../../helpers/fakebackend_helper";

export const getBrands = createAsyncThunk(
  "brand/getBrands",
  async ({ page, pageSize }: { page: number; pageSize: number }) => {
    try {
      const response = await getAllBrandsApi({ Page: page, PageSize: pageSize });
      console.log('API Response:', response);
      console.log('API Response data structure:', {
        results: response.data.results,
        currentPage: response.data.currentPage,
        pageCount: response.data.pageCount
      });
      return response;
    } catch (error: any) {
      console.error('API Error:', error);
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to fetch brands");
      }
      throw error;
    }
  }
);

// Add similar thunks for create, update, and delete 
export const addBrand = createAsyncThunk(
  "brand/addBrand",
  async (brand: any) => {
    try {
      console.log('Adding brand with data:', brand);
      const response = await createBrandApi(brand);
      console.log('Add brand API response:', response);
      
      // Make sure we're returning the correct data structure
      if (!response.data) {
        throw new Error('Invalid response format');
      }
      
      toast.success("Brand added successfully");
      return response;
    } catch (error: any) {
      console.error('Add brand error:', error);
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to add brand");
      }
      throw error;
    }
  }
);


export const updateBrand = createAsyncThunk(
  "brand/updateBrand",
  async (brand: { id: string, data: any }) => {
    try {
      console.log('Updating brand with data:', brand);
      const response = await updateBrandApi(brand.id, brand.data);
      console.log('Update brand API response:', response);
      toast.success("Brand updated successfully");
      return response;
    } catch (error: any) {
      console.error('Update brand error:', error);
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to update brand");
      }
      throw error;
    }
  }
);

export const deleteBrand = createAsyncThunk(
  "brand/deleteBrand",
  async (id: string) => {
    try {
      const response = await deleteBrandApi(id);
      toast.success("Brand deleted successfully");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to delete brand");
      }
      throw error;
    }
  }
);
