import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getAllQuizOptions as getAllQuizOptionsApi,
  createQuizOption as createQuizOptionApi,
  updateQuizOption as updateQuizOptionApi,
  deleteQuizOption as deleteQuizOptionApi,
  getQuizOptionByQuizQuestionId as getQuizOptionByQuizQuestionIdApi,
  createQuizOptionByQuestionId as createQuizOptionByQuestionIdApi,
  updateQuizOptionByQuestionId as updateQuizOptionByQuestionIdApi,
  deleteQuizOptionByQuestionId as deleteQuizOptionByQuestionIdApi
} from "../../helpers/fakebackend_helper";

// Get all quiz options
export const getAllQuizOptions = createAsyncThunk(
  "quizoption/getAllQuizOptions",
  async (params: { pageNumber: number; pageSize: number }) => {
    try {
      const response = await getAllQuizOptionsApi(params);
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Không thể tải danh sách lựa chọn");
      }
      throw error;
    }
  }
);

// Create a new quiz option
export const createQuizOption = createAsyncThunk(
  "quizoption/createQuizOption",
  async (data: any) => {
    try {
      const response = await createQuizOptionApi(data);
      toast.success("Thêm lựa chọn thành công");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Không thể thêm lựa chọn");
      }
      throw error;
    }
  }
);

// Update a quiz option
export const updateQuizOption = createAsyncThunk(
  "quizoption/updateQuizOption",
  async ({ id, data }: { id: string; data: any }) => {
    try {
      const response = await updateQuizOptionApi(id, data);
      toast.success("Cập nhật lựa chọn thành công");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Không thể cập nhật lựa chọn");
      }
      throw error;
    }
  }
);

// Delete a quiz option
export const deleteQuizOption = createAsyncThunk(
  "quizoption/deleteQuizOption",
  async (id: string) => {
    try {
      const response = await deleteQuizOptionApi(id);
      toast.success("Xóa lựa chọn thành công");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Không thể xóa lựa chọn");
      }
      throw error;
    }
  }
);

// Get quiz options by question ID
export const getQuizOptionsByQuestionId = createAsyncThunk(
  "quizoption/getQuizOptionsByQuestionId",
  async (id: string) => {
    try {
      const response = await getQuizOptionByQuizQuestionIdApi(id);
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Không thể tải lựa chọn cho câu hỏi này");
      }
      throw error;
    }
  }
);

// New thunks for question-specific operations

// Create a quiz option for a specific question
export const createQuizOptionByQuestionId = createAsyncThunk(
  "quizoption/createQuizOptionByQuestionId",
  async ({ questionId, data }: { questionId: string; data: any }) => {
    try {
      const response = await createQuizOptionByQuestionIdApi(questionId, data);
      toast.success("Thêm lựa chọn thành công");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Không thể thêm lựa chọn");
      }
      throw error;
    }
  }
);

// Update a quiz option for a specific question
export const updateQuizOptionByQuestionId = createAsyncThunk(
  "quizoption/updateQuizOptionByQuestionId",
  async ({ questionId, optionId, data }: { questionId: string; optionId: string; data: any }) => {
    try {
      const response = await updateQuizOptionByQuestionIdApi(questionId, optionId, data);
      toast.success("Cập nhật lựa chọn thành công");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Không thể cập nhật lựa chọn");
      }
      throw error;
    }
  }
);

// Delete a quiz option for a specific question
export const deleteQuizOptionByQuestionId = createAsyncThunk(
  "quizoption/deleteQuizOptionByQuestionId",
  async ({ questionId, optionId }: { questionId: string; optionId: string }) => {
    try {
      const response = await deleteQuizOptionByQuestionIdApi(questionId, optionId);
      toast.success("Xóa lựa chọn thành công");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Không thể xóa lựa chọn");
      }
      throw error;
    }
  }
);