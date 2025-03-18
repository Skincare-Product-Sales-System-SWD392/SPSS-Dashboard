import { createAsyncThunk } from "@reduxjs/toolkit";
import { migrateToFireBase } from "../../helpers/fakebackend_helper";

export const uploadFiles = createAsyncThunk(
  "fileUpload/uploadFiles",
  async (files: File[]) => {
    try {
      const response = await migrateToFireBase(files);
      return response;
    } catch (error) {
      throw error;
    }
  }
);