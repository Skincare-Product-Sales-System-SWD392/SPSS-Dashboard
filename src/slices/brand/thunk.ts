import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getAllBrands as getAllBrandsApi,
  createBrand as createBrandApi,
  updateBrand as updateBrandApi,
  deleteBrand as deleteBrandApi,
} from "../../helpers/fakebackend_helper";

export const getAllBrands = createAsyncThunk(
  "brand/getAllBrands",
  async (params: { page: number, pageSize: number }) => {
    try {
      const response = await getAllBrandsApi({ 
        pageNumber: params.page,
        pageSize: params.pageSize 
      });
      
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to fetch brands");
      }
      throw error;
    }
  }
);

export const addBrand = createAsyncThunk(
  "brand/addBrand",
  async (brand: any) => {
    try {
      const response = await createBrandApi(brand);
      toast.success("Brand added successfully");
      return response;
    } catch (error: any) {
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
      const response = await updateBrandApi(brand.id, brand.data);
      toast.success("Brand updated successfully");
      return response;
    } catch (error: any) {
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
