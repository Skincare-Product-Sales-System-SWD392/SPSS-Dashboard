import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getAllQuizSets as getAllQuizSetsApi,
  createQuizSets as createQuizSetApi,
  updateQuizSets as updateQuizSetApi,
  deleteQuizSets as deleteQuizSetApi,
  setQuizSetAsDefault as setQuizSetAsDefaultApi,
} from "../../helpers/fakebackend_helper";

export const getAllQuizSets = createAsyncThunk(
  "quizset/getAllQuizSets",
  async (params: { page: number, pageSize: number }) => {
    try {
      const response = await getAllQuizSetsApi({ 
        pageNumber: params.page,
        pageSize: params.pageSize 
      });
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Không thể tải bộ câu hỏi");
      }
      throw error;
    }
  }
);

export const createQuizSet = createAsyncThunk(
  "quizset/createQuizSet",
  async (quizSet: any) => {
    try {
      const response = await createQuizSetApi(quizSet);
      toast.success("Thêm bộ câu hỏi thành công");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Không thể thêm bộ câu hỏi");
      }
      throw error;
    }
  }
);

export const updateQuizSet = createAsyncThunk(
  "quizset/updateQuizSet",
  async (quizSet: { id: string, data: any }) => {
    try {
      const response = await updateQuizSetApi(quizSet.id, quizSet.data);
      toast.success("Cập nhật bộ câu hỏi thành công");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Không thể cập nhật bộ câu hỏi");
      }
      throw error;
    }
  }
);

export const deleteQuizSet = createAsyncThunk(
  "quizset/deleteQuizSet",
  async (id: string) => {
    try {
      const response = await deleteQuizSetApi(id);
      toast.success("Xóa bộ câu hỏi thành công");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Không thể xóa bộ câu hỏi");
      }
      throw error;
    }
  }
);

export const setQuizSetAsDefault = createAsyncThunk(
  "quizset/setQuizSetAsDefault",
  async (id: string) => {
    try {
      const response = await setQuizSetAsDefaultApi(id);
      toast.success("Đặt làm bộ câu hỏi mặc định thành công");
      return { id, response };
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Không thể đặt làm bộ câu hỏi mặc định");
      }
      throw error;
    }
  }
);
