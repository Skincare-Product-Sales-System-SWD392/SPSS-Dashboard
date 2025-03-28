import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getAllBrands as getAllBrandsApi,
  createBrand as createBrandApi,
  updateBrand as updateBrandApi,
  deleteBrand as deleteBrandApi,
} from "../../helpers/fakebackend_helper";

export const getAllBrands = createAsyncThunk(
  "brand/getAllBrands",
  async (params: { page: number, pageSize: number }) => {
    try {
      const response = await getAllBrandsApi({ 
        pageNumber: params.page,
        pageSize: params.pageSize 
      });
      
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Lấy danh sách thương hiệu thất bại");
      }
      throw error;
    }
  }
);

export const addBrand = createAsyncThunk(
  "brand/addBrand",
  async (brand: any) => {
    try {
      const response = await createBrandApi(brand);
      toast.success("Thêm thương hiệu thành công");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Thêm thương hiệu thành công");
      }
      throw error;
    }
  }
);

export const updateBrand = createAsyncThunk(
  "brand/updateBrand",
  async (brand: { id: string, data: any }) => {
    try {
      const response = await updateBrandApi(brand.id, brand.data);
      toast.success("Cập nhật thương hiệu thành công");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Cập nhật thương hiệu thất bại");
      }
      throw error;
    }
  }
);

export const deleteBrand = createAsyncThunk(
  "brand/deleteBrand",
  async (id: string) => {
    try {
      const response = await deleteBrandApi(id);
      toast.success("Xóa thương hiệu thành công");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Xóa thương hiệu thất bại");
      }
      throw error;
    }
  }
);
