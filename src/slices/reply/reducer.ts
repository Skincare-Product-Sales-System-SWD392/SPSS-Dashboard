import { createSlice } from "@reduxjs/toolkit";
import { createReply, updateReply, deleteReply } from "./thunk";

interface ReplyState {
  loading: boolean;
  error: string | null;
  success: boolean;
  isEditing: boolean;
}

export const initialState: ReplyState = {
  loading: false,
  error: null,
  success: false,
  isEditing: false
};

const replySlice = createSlice({
  name: "Reply",
  initialState,
  reducers: {
    resetReplyState: (state) => {
      state.success = false;
      state.error = null;
      state.isEditing = false;
    },
    setReplyEditing: (state, action) => {
      state.isEditing = action.payload;
    }
  },
  extraReducers: (builder) => {
    // Create Reply
    builder.addCase(createReply.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    });
    builder.addCase(createReply.fulfilled, (state) => {
      state.loading = false;
      state.success = true;
      state.error = null;
    });
    builder.addCase(createReply.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.error.message || null;
    });

    // Update Reply
    builder.addCase(updateReply.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    });
    builder.addCase(updateReply.fulfilled, (state) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.isEditing = false;
    });
    builder.addCase(updateReply.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.error.message || null;
    });

    // Delete Reply
    builder.addCase(deleteReply.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    });
    builder.addCase(deleteReply.fulfilled, (state) => {
      state.loading = false;
      state.success = true;
      state.error = null;
    });
    builder.addCase(deleteReply.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.error.message || null;
    });
  },
});

export const { resetReplyState, setReplyEditing } = replySlice.actions;
export default replySlice.reducer; 