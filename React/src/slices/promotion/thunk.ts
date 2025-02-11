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
      }
      throw error;
    }
  }
);

// Add similar thunks for create, update, and delete 