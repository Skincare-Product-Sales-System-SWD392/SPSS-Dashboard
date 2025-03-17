import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getAllVariationOptions as getAllVariationOptionsApi,
  createVariationOption as createVariationOptionApi,
  updateVariationOption as updateVariationOptionApi,
  deleteVariationOption as deleteVariationOptionApi,
} from "../../helpers/fakebackend_helper";

export const getAllVariationOptions = createAsyncThunk(
  "variationOption/getAllVariationOptions",
  async (params: { pageNumber: number, pageSize: number }) => {
    try {
      const response = await getAllVariationOptionsApi(params);
      
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to fetch variation options");
      }
      throw error;
    }
  }
);

export const addVariationOption = createAsyncThunk(
  "variationOption/addVariationOption",
  async (variationOption: any) => {
    try {
      const response = await createVariationOptionApi(variationOption);
      toast.success("Variation option added successfully");
      // Return the item from the response
      return { data: response.data.items ? response.data.items[0] : response.data };
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to add variation option");
      }
      throw error;
    }
  }
);

export const updateVariationOption = createAsyncThunk(
    "variationOption/updateVariationOption",
    async (variation: { id: string, data: any }) => {
      try {
        const response = await updateVariationOptionApi(variation.id, variation.data);
        toast.success("Variation option updated successfully");
        // Return the updated item
        return { data: response.data.items ? response.data.items[0] : response.data };
      } catch (error: any) {
        if (error.response?.data?.data) {
          toast.error(error.response.data.data);
        } else {
          toast.error("Failed to update variation option");
        }
        throw error;
      }
    }
  );

export const deleteVariationOption = createAsyncThunk(
  "variationOption/deleteVariationOption",
  async (id: string) => {
    try {
      const response = await deleteVariationOptionApi(id);
      toast.success("Variation option deleted successfully");
      // Return the ID of the deleted item
      return { data: id };
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to delete variation option");
      }
      throw error;
    }
  }
);
