import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getAllProducts as getAllProductsApi,
  createProduct as createProductApi,
  updateProduct as updateProductApi,
  deleteProduct as deleteProductApi,
} from "../../helpers/fakebackend_helper";

export const getAllProducts = createAsyncThunk(
  "product/getAllProducts",
  async ({ page, pageSize }: { page: number; pageSize: number }) => {
    try {
      const response = await getAllProductsApi({ Page: page, PageSize: pageSize });
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to fetch products");
      }
      throw error;
    }
  }
);

// Add similar thunks for create, update, and delete 
export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (product: any) => {
    try {
      console.log('Adding product with data:', product);
      const response = await createProductApi(product);
      console.log('Add product API response:', response);
      toast.success("Product added successfully");
      return response;
    } catch (error: any) {
      console.error('Add product error:', error);
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to add product");
      }
      throw error;
    }
  }
);

export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (product: { id: string, data: any }) => {
    try {
      console.log('Updating product with data:', product);
      const response = await updateProductApi(product.id, product.data);
      console.log('Update product API response:', response);
      toast.success("Product updated successfully");
      return response;
    } catch (error: any) {
      console.error('Update product error:', error);
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to update product");
      }
      throw error;
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id: string) => {
    try {
      const response = await deleteProductApi(id);
      toast.success("Product deleted successfully");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to delete product");
      }
      throw error;
    }
  }
);
