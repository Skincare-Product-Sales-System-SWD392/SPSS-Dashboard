import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getAllUsers as getAllUsersApi,
  createUser as createUserApi,
  updateUser as updateUserApi,
  deleteUser as deleteUserApi,
} from "../../helpers/fakebackend_helper";

export const getAllUsers = createAsyncThunk(
  "user/getAllUsers",
  async (params: { page: number, pageSize: number }) => {
    try {
      const response = await getAllUsersApi({ 
        pageNumber: params.page,
        pageSize: params.pageSize 
      });
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Không thể lấy danh sách người dùng");
      }
      throw error;
    }
  }
);

export const addUser = createAsyncThunk(
  "user/addUser",
  async (user: any) => {
    try {
      const response = await createUserApi(user);
      toast.success("Thêm người dùng thành công");
      return response;
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "Email, số điện thoại hoặc tên người dùng này có thể đã được sử dụng. Vui lòng kiểm tra lại thông tin và thử lại.";
      toast.error(errorMessage);
      throw error;
    }
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (user: { id: string, data: any }) => {
    try {
      const response = await updateUserApi(user.id, user.data);
      toast.success("Cập nhật người dùng thành công");
      return response;
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "Email, số điện thoại hoặc tên người dùng này có thể đã được sử dụng. Vui lòng kiểm tra lại thông tin và thử lại.";
      toast.error(errorMessage);
      throw error;
    }
  }
);

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (id: string) => {
    try {
      const response = await deleteUserApi(id);
      toast.success("Xóa người dùng thành công");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Không thể xóa người dùng");
      }
      throw error;
    }
  }
);
