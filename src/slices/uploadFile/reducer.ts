import { createSlice } from "@reduxjs/toolkit";
import { uploadFiles } from "./thunk";

export const initialState = {
  loading: false,
  error: null as string | null,
  uploadedUrls: [],
};

const fileUploadSlice = createSlice({
  name: "fileUpload",
  initialState,
  reducers: {
    clearUploadedUrls(state) {
      state.uploadedUrls = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadFiles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadFiles.fulfilled, (state, action) => {
        state.loading = false;
        state.uploadedUrls = action.payload.data || [];
      })
      .addCase(uploadFiles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to upload files";
      });
  },
});

export const { clearUploadedUrls } = fileUploadSlice.actions;

export default fileUploadSlice.reducer;