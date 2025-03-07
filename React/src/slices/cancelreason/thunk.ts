import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getAllCancelReasons as getAllCancelReasonsApi,
  createCancelReason as createCancelReasonApi,
  updateCancelReason as updateCancelReasonApi,
  deleteCancelReason as deleteCancelReasonApi,
} from "../../helpers/fakebackend_helper";

export const getAllCancelReasons = createAsyncThunk(
  "cancelReason/getAllCancelReasons",
  async ({ page, pageSize }: { page: number; pageSize: number }) => {
    try {
      const response = await getAllCancelReasonsApi({ Page: page, PageSize: pageSize });
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to fetch cancel reasons");
      }
      throw error;
    }
  }
);

// Add similar thunks for create, update, and delete 
export const addCancelReason = createAsyncThunk(
  "cancelReason/addCancelReason",
  async (cancelReason: any) => {
    try {
      const response = await createCancelReasonApi(cancelReason);
      toast.success("Cancel reason added successfully");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to add cancel reason");
      }
      throw error;
    }
  }
);

export const updateCancelReason = createAsyncThunk(
  "cancelReason/updateCancelReason",
  async (cancelReason: { id: string, data: any }) => {
    try {
      const response = await updateCancelReasonApi(cancelReason.id, cancelReason.data);
      toast.success("Cancel reason updated successfully");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to update cancel reason");
      }
      throw error;
    }
  }
);

export const deleteCancelReason = createAsyncThunk(
  "cancelReason/deleteCancelReason",
  async (id: string) => {
    try {
      const response = await deleteCancelReasonApi(id);
      toast.success("Cancel reason deleted successfully");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to delete cancel reason");
      }
      throw error;
    }
  }
);
