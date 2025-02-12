import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getAllPromotions as getAllPromotionsApi,
  createPromotion as createPromotionApi,
  updatePromotion as updatePromotionApi,
  deletePromotion as deletePromotionApi,
} from "../../helpers/fakebackend_helper";

export const getPromotions = createAsyncThunk(
  "promotion/getPromotions",
  async ({ page, pageSize }: { page: number; pageSize: number }) => {
    try {
      const response = await getAllPromotionsApi({ Page: page, PageSize: pageSize });
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to fetch promotions");
      }
      throw error;
    }
  }
);

// Add similar thunks for create, update, and delete 
export const addPromotion = createAsyncThunk(
  "promotion/addPromotion",
  async (promotion: any) => {
    try {
      console.log('Adding promotion with data:', promotion);
      const response = await createPromotionApi(promotion);
      console.log('Add promotion API response:', response);
      toast.success("Promotion added successfully");
      return response;
    } catch (error: any) {
      console.error('Add promotion error:', error);
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to add promotion");
      }
      throw error;
    }
  }
);

export const updatePromotion = createAsyncThunk(
  "promotion/updatePromotion",
  async (promotion: { id: string, data: any }) => {
    try {
      console.log('Updating promotion with data:', promotion);
      const response = await updatePromotionApi(promotion.id, promotion.data);
      console.log('Update promotion API response:', response);
      toast.success("Promotion updated successfully");
      return response;
    } catch (error: any) {
      console.error('Update promotion error:', error);
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to update promotion");
      }
      throw error;
    }
  }
);

export const deletePromotion = createAsyncThunk(
  "promotion/deletePromotion",
  async (id: string) => {
    try {
      const response = await deletePromotionApi(id);
      toast.success("Promotion deleted successfully");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to delete promotion");
      }
      throw error;
    }
  }
);
