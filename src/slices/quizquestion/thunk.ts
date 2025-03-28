import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  createQuizQuestion as createQuizQuestionApi,
  updateQuizQuestion as updateQuizQuestionApi,
  deleteQuizQuestion as deleteQuizQuestionApi,
  getAllQuizQuestions as getAllQuizQuestionsApi,
  getQuizQuestionByQuizSetId as getQuizQuestionByQuizSetIdApi,
  createQuizQuestionByQuizSetId as createQuizQuestionByQuizSetIdApi,
  updateQuizQuestionByQuizSetId as updateQuizQuestionByQuizSetIdApi,
  deleteQuizQuestionByQuizSetId as deleteQuizQuestionByQuizSetIdApi
} from "../../helpers/fakebackend_helper";

export const getAllQuizQuestions = createAsyncThunk(
  "quizquestion/getAllQuizQuestions",
  async (params: { pageNumber: number, pageSize: number }) => {
    try {
      const response = await getAllQuizQuestionsApi(params);
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Không thể tải danh sách câu hỏi");
      }
      throw error;
    }
  }
);

export const getQuizQuestionsBySetId = createAsyncThunk(
  "quizquestion/getQuizQuestionsBySetId",
  async (setId: string) => {
    try {
      const response = await getQuizQuestionByQuizSetIdApi(setId);
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Không thể tải câu hỏi cho bộ đề này");
      }
      throw error;
    }
  }
);

export const createQuizQuestion = createAsyncThunk(
  "quizquestion/createQuizQuestion",
  async (question: any) => {
    try {
      const response = await createQuizQuestionApi(question);
      toast.success("Thêm câu hỏi thành công");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Không thể thêm câu hỏi");
      }
      throw error;
    }
  }
);

export const updateQuizQuestion = createAsyncThunk(
  "quizquestion/updateQuizQuestion",
  async (question: { id: string, data: any }) => {
    try {
      const response = await updateQuizQuestionApi(question.id, question.data);
      toast.success("Cập nhật câu hỏi thành công");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Không thể cập nhật câu hỏi");
      }
      throw error;
    }
  }
);

export const deleteQuizQuestion = createAsyncThunk(
  "quizquestion/deleteQuizQuestion",
  async (id: string) => {
    try {
      const response = await deleteQuizQuestionApi(id);
      toast.success("Xóa câu hỏi thành công");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Không thể xóa câu hỏi");
      }
      throw error;
    }
  }
);

export const createQuizQuestionForSet = createAsyncThunk(
  "quizquestion/createQuizQuestionForSet",
  async ({ setId, data }: { setId: string, data: any }) => {
    try {
      const response = await createQuizQuestionByQuizSetIdApi(setId, data);
      toast.success("Thêm câu hỏi thành công");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Không thể thêm câu hỏi");
      }
      throw error;
    }
  }
);

export const updateQuizQuestionForSet = createAsyncThunk(
  "quizquestion/updateQuizQuestionForSet",
  async ({ setId, questionId, data }: { setId: string, questionId: string, data: any }) => {
    try {
      const response = await updateQuizQuestionByQuizSetIdApi(setId, questionId, data);
      toast.success("Cập nhật câu hỏi thành công");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Không thể cập nhật câu hỏi");
      }
      throw error;
    }
  }
);

export const deleteQuizQuestionForSet = createAsyncThunk(
  "quizquestion/deleteQuizQuestionForSet",
  async ({ setId, questionId }: { setId: string, questionId: string }) => {
    try {
      const response = await deleteQuizQuestionByQuizSetIdApi(setId, questionId);
      toast.success("Xóa câu hỏi thành công");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Không thể xóa câu hỏi");
      }
      throw error;
    }
  }
);
