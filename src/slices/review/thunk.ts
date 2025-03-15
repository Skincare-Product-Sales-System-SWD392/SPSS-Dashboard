import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getAllReviews as getAllReviewsApi,
  createReview as createReviewApi,
  updateReview as updateReviewApi,
  deleteReview as deleteReviewApi,
} from "../../helpers/fakebackend_helper";

export const getAllReviews = createAsyncThunk(
  "review/getAllReviews",
  async (params: { page: number, pageSize: number, search?: string }) => {
    try {
      const response = await getAllReviewsApi({ 
        pageNumber: params.page,
        pageSize: params.pageSize,
        search: params.search 
      });
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to fetch reviews");
      }
      throw error;
    }
  }
);

export const addReview = createAsyncThunk(
  "review/addReview",
  async (review: any) => {
    try {
      const response = await createReviewApi(review);
      toast.success("Review added successfully");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to add review");
      }
      throw error;
    }
  }
);

export const updateReview = createAsyncThunk(
  "review/updateReview",
  async (review: { id: string, data: any }) => {
    try {
      const response = await updateReviewApi(review.id, review.data);
      toast.success("Review updated successfully");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to update review");
      }
      throw error;
    }
  }
);

export const deleteReview = createAsyncThunk(
  "review/deleteReview",
  async (id: string) => {
    try {
      const response = await deleteReviewApi(id);
      toast.success("Review deleted successfully");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to delete review");
      }
      throw error;
    }
  }
);
