import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getAllSkinTypes as getAllSkinTypesApi,
  createSkinType as createSkinTypeApi,
  updateSkinType as updateSkinTypeApi,
  deleteSkinType as deleteSkinTypeApi,
} from "../../helpers/fakebackend_helper";

export const getAllSkinTypes = createAsyncThunk(
  "skinType/getAllSkinTypes",
  async ({ page, pageSize }: { page: number; pageSize: number }) => {
    try {
      const response = await getAllSkinTypesApi({ Page: page, PageSize: pageSize });
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to fetch skin types");
      }
      throw error;
    }
  }
);

// Add similar thunks for create, update, and delete 
export const addSkinType = createAsyncThunk(
  "skinType/addSkinType",
  async (skinType: any) => {
    try {
      const response = await createSkinTypeApi(skinType);
      toast.success("Skin type added successfully");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to add skin type");
      }
      throw error;
    }
  }
);

export const updateSkinType = createAsyncThunk(
  "skinType/updateSkinType",
  async (skinType: { id: string, data: any }) => {
    try {
      const response = await updateSkinTypeApi(skinType.id, skinType.data);
      toast.success("Skin type updated successfully");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to update skin type");
      }
      throw error;
    }
  }
);

export const deleteSkinType = createAsyncThunk(
  "skinType/deleteSkinType",
  async (id: string) => {
    try {
      const response = await deleteSkinTypeApi(id);
      toast.success("Skin type deleted successfully");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to delete skin type");
      }
      throw error;
    }
  }
);
