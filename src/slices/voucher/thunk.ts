import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getAllVouchers as getAllVouchersApi,
  createVoucher as createVoucherApi,
  updateVoucher as updateVoucherApi,
  deleteVoucher as deleteVoucherApi,
} from "../../helpers/fakebackend_helper";

export const getAllVouchers = createAsyncThunk(
  "voucher/getAllVouchers",
  async (params: { page: number, pageSize: number }) => {
    try {
      console.log("Calling API with params:", params);
      const response = await getAllVouchersApi({ Page: params.page, PageSize: params.pageSize });
      console.log("API response:", response);
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to fetch skin types");
      }
      console.error("API error:", error);
      throw error;
    }
  }
);

// Add similar thunks for create, update, and delete 
export const addVoucher = createAsyncThunk(
  "voucher/addVoucher",
  async (voucher: any) => {
    try {
      const response = await createVoucherApi(voucher);
      toast.success("Voucher added successfully");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to add voucher");
      }
      throw error;
    }
  }
);

export const updateVoucher = createAsyncThunk(
  "voucher/updateVoucher",
  async (voucher: { id: string, data: any }) => {
    try {
      const response = await updateVoucherApi(voucher.id, voucher.data);
      toast.success("Voucher updated successfully");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to update voucher");
      }
      throw error;
    }
  }
);

export const deleteVoucher = createAsyncThunk(
  "voucher/deleteVoucher",
  async (id: string) => {
    try {
      const response = await deleteVoucherApi(id);
      toast.success("Voucher deleted successfully");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to delete voucher");
      }
      throw error;
    }
  }
);
