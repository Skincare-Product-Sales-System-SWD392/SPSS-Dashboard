import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getAllProducts as getAllProductsApi,
  getProductById as getProductByIdApi,
  createProduct as createProductApi,
  updateProduct as updateProductApi,
  deleteProduct as deleteProductApi,
} from "../../helpers/fakebackend_helper";

export const getAllProducts = createAsyncThunk(
  "product/getAllProducts",
  async (params: { pageNumber: number, pageSize: number }) => {
    try {
      const response = await getAllProductsApi({ 
        pageNumber: params.pageNumber,
        pageSize: params.pageSize 
      });
      
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to fetch products");
      }
      throw error;
    }
  }
);

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (product: any) => {
    try {
      const response = await createProductApi(product);
      toast.success("Tạo sản phẩm thành công");
      // Return the item from the response
      return { data: response.data.items ? response.data.items[0] : response.data };
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Thêm sản phẩm thất bại");
      }
      throw error;
    }
  }
);

export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (product: { id: string, data: any }) => {
    try {
      const response = await updateProductApi(product.id, product.data);
      toast.success("Cập nhật sản phẩm thành công");
      // Return the updated item
      return { data: response.data.items ? response.data.items[0] : response.data };
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Cập nhật sản phẩm thất bại");
      }
      throw error;
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id: string) => {
    try {
      const response = await deleteProductApi(id);
      toast.success("Xóa sản phẩm thành công");
      // Return the ID of the deleted item
      return { data: id };
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Xóa sản phẩm thất bại");
      }
      throw error;
    }
  }
);

export const getProductById = createAsyncThunk(
  "product/getProductById",
  async (id: string) => {
    try {
      const response = await getProductByIdApi(id);
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Lấy chi tiết sản phẩm thất bại");
      }
      throw error;
    }
  }
);
