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
        toast.error("Failed to fetch quiz sets");
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
      toast.success("Quiz set added successfully");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to add quiz set");
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
      toast.success("Quiz set updated successfully");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to update quiz set");
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
      toast.success("Quiz set deleted successfully");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to delete quiz set");
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
      toast.success("Quiz set set as default successfully");
      return { id, response };
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to set quiz set as default");
      }
      throw error;
    }
  }
);
