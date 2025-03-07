import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getAllCategories as getAllCategoriesApi,
  createCategory as createCategoryApi,
  updateCategory as updateCategoryApi,
  deleteCategory as deleteCategoryApi,
} from "../../helpers/fakebackend_helper";

export const getAllCategories = createAsyncThunk(
  "category/getAllCategories",
  async ({ page, pageSize }: { page: number; pageSize: number }) => {
    try {
      const response = await getAllCategoriesApi({ Page: page, PageSize: pageSize });
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to fetch categories");
      }
      throw error;
    }
  }
);

export const addCategory = createAsyncThunk(
  "category/addCategory",
  async (category: any) => {
    try {
      const response = await createCategoryApi(category);
      toast.success("Category added successfully");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to add category");
      }
      throw error;
    }
  }
);

export const updateCategory = createAsyncThunk(
  "category/updateCategory",
  async (category: { id: string, data: any }) => {
    try {
      const response = await updateCategoryApi(category.id, category.data);
      toast.success("Category updated successfully");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to update category");
      }
      throw error;
    }
  }
);

export const deleteCategory = createAsyncThunk(
  "category/deleteCategory",
  async (id: string) => {
    try {
      const response = await deleteCategoryApi(id);
      toast.success("Category deleted successfully");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to delete category");
      }
      throw error;
    }
  }
);
