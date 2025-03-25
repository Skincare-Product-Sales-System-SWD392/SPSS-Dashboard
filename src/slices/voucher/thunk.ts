import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getAllVouchers as getAllVouchersApi,
  createVoucher as createVoucherApi,
  updateVoucher as updateVoucherApi,
  deleteVoucher as deleteVoucherApi,
} from "../../helpers/fakebackend_helper";
import { er } from "@fullcalendar/core/internal-common";

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
      toast.success("Mã giảm giá đã được thêm thành công");
      return { data: response.data.items ? response.data.items[0] : response.data };
    } catch (error: any) {
      // Handle 400 Bad Request with the specific error message
      if (error === "Request failed with status code 400") {
        toast.error("Mã voucher đã tồn tại");
      } else {
        toast.error("Thêm mã giảm giá thất bại");
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
      toast.success("Mã giảm giá đã được cập nhật thành công");
      // Return the updated item
      return { data: response.data.items ? response.data.items[0] : response.data };
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Cập nhật mã giảm giá thất bại");
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
      toast.success("Mã giảm giá đã được xóa thành công");
      // Return the ID of the deleted item
      return { data: id };
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Xóa mã giảm giá thất bại");
      }
      throw error;
    }
  }
);
