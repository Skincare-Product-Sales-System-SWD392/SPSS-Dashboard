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
        toast.error("Failed to fetch quiz options");
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
      toast.success("Quiz option added successfully");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to add quiz option");
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
      toast.success("Quiz option updated successfully");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to update quiz option");
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
      toast.success("Quiz option deleted successfully");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to delete quiz option");
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
        toast.error("Failed to fetch quiz options for this question");
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
      toast.success("Quiz option added successfully");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to add quiz option");
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
      toast.success("Quiz option updated successfully");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to update quiz option");
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
      toast.success("Quiz option deleted successfully");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to delete quiz option");
      }
      throw error;
    }
  }
);