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
      const response = await getAllVouchersApi({ 
        pageNumber: params.page,
        pageSize: params.pageSize 
      });
      
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to fetch vouchers");
      }
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
      // Return the item from the response
      return { data: response.data.items ? response.data.items[0] : response.data };
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
      // Return the updated item
      return { data: response.data.items ? response.data.items[0] : response.data };
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
      // Return the ID of the deleted item
      return { data: id };
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
