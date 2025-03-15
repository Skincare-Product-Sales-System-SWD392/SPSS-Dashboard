import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getAllVariations as getAllVariationsApi,
  createVariation as createVariationApi,
  updateVariation as updateVariationApi,
  deleteVariation as deleteVariationApi,
} from "../../helpers/fakebackend_helper";

export const getAllVariations = createAsyncThunk(
  "variation/getAllVariations",
  async (params: { page: number, pageSize: number }) => {
    try {
      const response = await getAllVariationsApi({ 
        pageNumber: params.page,
        pageSize: params.pageSize 
      });
      
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to fetch variations");
      }
      throw error;
    }
  }
);

export const addVariation = createAsyncThunk(
  "variation/addVariation",
  async (variation: any) => {
    try {
      const response = await createVariationApi(variation);
      toast.success("Variation added successfully");
      // Return the item from the response
      return { data: response.data.items ? response.data.items[0] : response.data };
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to add variation");
      }
      throw error;
    }
  }
);

export const updateVariation = createAsyncThunk(
  "variation/updateVariation",
  async (variation: { id: string, data: any }) => {
    try {
      const response = await updateVariationApi(variation.id, variation.data);
      toast.success("Variation updated successfully");
      // Return the updated item
      return { data: response.data.items ? response.data.items[0] : response.data };
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to update variation");
      }
      throw error;
    }
  }
);

export const deleteVariation = createAsyncThunk(
  "variation/deleteVariation",
  async (id: string) => {
    try {
      const response = await deleteVariationApi(id);
      toast.success("Variation deleted successfully");
      // Return the ID of the deleted item
      return { data: id };
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to delete variation");
      }
      throw error;
    }
  }
);
