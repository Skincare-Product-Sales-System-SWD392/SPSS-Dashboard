import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getAllProductStatus as getAllProductStatusesApi,
  createProductStatus as createProductStatusApi,
  updateProductStatus as updateProductStatusApi,
  deleteProductStatus as deleteProductStatusApi,
} from "../../helpers/fakebackend_helper";

export const getAllProductStatuses = createAsyncThunk(
  "productStatus/getAllProductStatuses",
  async (params: { page: number, pageSize: number }) => {
    try {
      const response = await getAllProductStatusesApi({ 
        pageNumber: params.page,
        pageSize: params.pageSize 
      });
      
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to fetch product statuses");
      }
      throw error;
    }
  }
);

export const addProductStatus = createAsyncThunk(
  "productStatus/addProductStatus",
  async (productStatus: any) => {
    try {
      const response = await createProductStatusApi(productStatus);
      toast.success("Product status added successfully");
      // Return the item from the response
      return { data: response.data.items ? response.data.items[0] : response.data };
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to add product status");
      }
      throw error;
    }
  }
);

export const updateProductStatus = createAsyncThunk(
  "productStatus/updateProductStatus",
  async (productStatus: { id: string, data: any }) => {
    try {
      const response = await updateProductStatusApi(productStatus.id, productStatus.data);
      toast.success("Product status updated successfully");
      // Return the updated item
      return { data: response.data.items ? response.data.items[0] : response.data };
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to update product status");
      }
      throw error;
    }
  }
);

export const deleteProductStatus = createAsyncThunk(
  "productStatus/deleteProductStatus",
  async (id: string) => {
    try {
      const response = await deleteProductStatusApi(id);
      toast.success("Product status deleted successfully");
      // Return the ID of the deleted item
      return { data: id };
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to delete product status");
      }
      throw error;
    }
  }
); 