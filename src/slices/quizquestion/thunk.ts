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
        toast.error("Failed to fetch quiz questions");
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
        toast.error("Failed to fetch quiz questions for this set");
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
      toast.success("Quiz question added successfully");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to add quiz question");
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
      toast.success("Quiz question updated successfully");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to update quiz question");
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
      toast.success("Quiz question deleted successfully");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to delete quiz question");
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
      toast.success("Quiz question added successfully");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to add quiz question");
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
      toast.success("Quiz question updated successfully");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to update quiz question");
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
      toast.success("Quiz question deleted successfully");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to delete quiz question");
      }
      throw error;
    }
  }
);
