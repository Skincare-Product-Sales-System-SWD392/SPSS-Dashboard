import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  createReply as createReplyApi,
  updateReply as updateReplyApi,
  deleteReply as deleteReplyApi
} from "../../helpers/fakebackend_helper";

export const createReply = createAsyncThunk(
  "reply/createReply",
  async (replyData: { reviewId: string, replyContent: string }) => {
    try {
      const response = await createReplyApi(replyData);
      toast.success("Reply added successfully");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to add reply");
      }
      throw error;
    }
  }
);

export const updateReply = createAsyncThunk(
  "reply/updateReply",
  async ({ id, data }: { id: string, data: any }) => {
    try {
      const response = await updateReplyApi(id, data);
      toast.success("Reply updated successfully");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to update reply");
      }
      throw error;
    }
  }
);

export const deleteReply = createAsyncThunk(
  "reply/deleteReply",
  async (id: string) => {
    try {
      const response = await deleteReplyApi(id);
      toast.success("Reply deleted successfully");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to delete reply");
      }
      throw error;
    }
  }
);
