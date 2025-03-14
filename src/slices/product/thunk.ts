import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getAllProducts as getAllProductsApi,
  getProductById as getProductByIdApi,
  createProduct as createProductApi,
  updateProduct as updateProductApi,
  deleteProduct as deleteProductApi,
} from "../../helpers/fakebackend_helper";

export const getAllProducts = createAsyncThunk(
  "product/getAllProducts",
  async (params: { page: number, pageSize: number }) => {
    try {
      const response = await getAllProductsApi({ 
        pageNumber: params.page,
        pageSize: params.pageSize 
      });
      
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

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (product: any) => {
    try {
      const response = await createProductApi(product);
      toast.success("Product added successfully");
      // Return the item from the response
      return { data: response.data.items ? response.data.items[0] : response.data };
    } catch (error: any) {
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
      const response = await updateProductApi(product.id, product.data);
      toast.success("Product updated successfully");
      // Return the updated item
      return { data: response.data.items ? response.data.items[0] : response.data };
    } catch (error: any) {
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
      // Return the ID of the deleted item
      return { data: id };
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

export const getProductById = createAsyncThunk(
  "product/getProductById",
  async (id: string) => {
    try {
      const response = await getProductByIdApi(id);
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to fetch product details");
      }
      throw error;
    }
  }
);
