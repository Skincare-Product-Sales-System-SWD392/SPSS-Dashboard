import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getAllPaymentMethods as getAllPaymentMethodsApi,
  createPaymentMethod as createPaymentMethodApi,
  updatePaymentMethod as updatePaymentMethodApi,
  deletePaymentMethod as deletePaymentMethodApi,
} from "../../helpers/fakebackend_helper";

export const getAllPaymentMethods = createAsyncThunk(
  "paymentMethod/getAllPaymentMethods",
  async ({ page, pageSize }: { page: number; pageSize: number }) => {
    try {
      const response = await getAllPaymentMethodsApi({ Page: page, PageSize: pageSize });
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to fetch payment methods");
      }
      throw error;
    }
  }
);

// Add similar thunks for create, update, and delete payment methods
export const addPaymentMethod = createAsyncThunk(
  "paymentMethod/addPaymentMethod",
  async (paymentMethod: any) => {
    try {
      const response = await createPaymentMethodApi(paymentMethod);
      toast.success("Payment method added successfully");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to add payment method");
      }
      throw error;
    }
  }
);

export const updatePaymentMethod = createAsyncThunk(
  "paymentMethod/updatePaymentMethod",
  async (paymentMethod: { id: string, data: any }) => {
    try {
      const response = await updatePaymentMethodApi(paymentMethod.id, paymentMethod.data);
      toast.success("Payment method updated successfully");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to update payment method");
      }
      throw error;
    }
  }
);

export const deletePaymentMethod = createAsyncThunk(
  "paymentMethod/deletePaymentMethod",
  async (id: string) => {
    try {
      const response = await deletePaymentMethodApi(id);
      toast.success("Payment method deleted successfully");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to delete payment method");
      }
      throw error;
    }
  }
);
