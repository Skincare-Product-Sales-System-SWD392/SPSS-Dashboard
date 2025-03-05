import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getAllVouchers as getAllVouchersApi,
  createVoucher as createVoucherApi,
  updateVoucher as updateVoucherApi,
  deleteVoucher as deleteVoucherApi,
} from "../../helpers/fakebackend_helper";

export const getVouchers = createAsyncThunk(
  "voucher/getVouchers",
  async ({ page, pageSize }: { page: number; pageSize: number }) => {
    try {
      const response = await getAllVouchersApi({ Page: page, PageSize: pageSize });
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
      console.log('Adding voucher with data:', voucher);
      const response = await createVoucherApi(voucher);
      console.log('Add voucher API response:', response);
      toast.success("Voucher added successfully");
      return response;
    } catch (error: any) {
      console.error('Add voucher error:', error);
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
      console.log('Updating voucher with data:', voucher);
      const response = await updateVoucherApi(voucher.id, voucher.data);
      console.log('Update voucher API response:', response);
      toast.success("Voucher updated successfully");
      return response;
    } catch (error: any) {
      console.error('Update voucher error:', error);
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
