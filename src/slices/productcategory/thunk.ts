import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getAllProductCategories as getAllProductCategoriesApi,
  createProductCategory as createProductCategoryApi,
  updateProductCategory as updateProductCategoryApi,
  deleteProductCategory as deleteProductCategoryApi,
} from "../../helpers/fakebackend_helper";

export const getAllProductCategories = createAsyncThunk(
  "productCategory/getAllProductCategories",
  async (params: { page: number, pageSize: number }) => {
    try {
      const response = await getAllProductCategoriesApi({ 
        pageNumber: params.page,
        pageSize: params.pageSize 
      });
      
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to fetch product categories");
      }
      throw error;
    }
  }
);

export const addProductCategory = createAsyncThunk(
  "productCategory/addProductCategory",
  async (category: any) => {
    try {
      const response = await createProductCategoryApi(category);
      toast.success("Product category added successfully");
      // Return the item from the response
      return { data: response.data.items ? response.data.items[0] : response.data };
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to add product category");
      }
      throw error;
    }
  }
);

export const updateProductCategory = createAsyncThunk(
  "productCategory/updateProductCategory",
  async (category: { id: string, data: any }) => {
    try {
      const response = await updateProductCategoryApi(category.id, category.data);
      toast.success("Product category updated successfully");
      // Return the updated item
      return { data: response.data.items ? response.data.items[0] : response.data };
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to update product category");
      }
      throw error;
    }
  }
);

export const deleteProductCategory = createAsyncThunk(
  "productCategory/deleteProductCategory",
  async (id: string) => {
    try {
      const response = await deleteProductCategoryApi(id);
      toast.success("Product category deleted successfully");
      // Return the ID of the deleted item
      return { data: id };
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to delete product category");
      }
      throw error;
    }
  }
);
