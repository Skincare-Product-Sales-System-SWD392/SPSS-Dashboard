import { createSlice } from "@reduxjs/toolkit";
import { 
  getAllQuizOptions, 
  createQuizOption, 
  updateQuizOption, 
  deleteQuizOption,
  getQuizOptionsByQuestionId,
  createQuizOptionByQuestionId,
  updateQuizOptionByQuestionId,
  deleteQuizOptionByQuestionId
} from "./thunk";

interface QuizOptionState {
  loading: boolean;
  error: string | null;
  quizOptions: any[];
}

export const initialState: QuizOptionState = {
  loading: false,
  error: null,
  quizOptions: []
};

const quizOptionSlice = createSlice({
  name: "quizoption",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get All Quiz Options
    builder.addCase(getAllQuizOptions.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAllQuizOptions.fulfilled, (state, action) => {
      state.loading = false;
      state.quizOptions = action.payload.data;
      state.error = null;
    });
    builder.addCase(getAllQuizOptions.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Get Quiz Options By Question ID
    builder.addCase(getQuizOptionsByQuestionId.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getQuizOptionsByQuestionId.fulfilled, (state, action) => {
      state.loading = false;
      state.quizOptions = action.payload.data;
      state.error = null;
    });
    builder.addCase(getQuizOptionsByQuestionId.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Create Quiz Option
    builder.addCase(createQuizOption.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createQuizOption.fulfilled, (state, action) => {
      state.loading = false;
      state.quizOptions.push(action.payload.data);
      state.error = null;
    });
    builder.addCase(createQuizOption.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Update Quiz Option
    builder.addCase(updateQuizOption.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateQuizOption.fulfilled, (state, action) => {
      state.loading = false;
      state.quizOptions = state.quizOptions.map(option =>
        option.id === action.payload.data.id ? action.payload.data : option
      );
      state.error = null;
    });
    builder.addCase(updateQuizOption.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Delete Quiz Option
    builder.addCase(deleteQuizOption.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteQuizOption.fulfilled, (state, action) => {
      state.loading = false;
      state.quizOptions = state.quizOptions.filter(
        option => option.id !== action.payload.data
      );
      state.error = null;
    });
    builder.addCase(deleteQuizOption.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Create Quiz Option By Question ID
    builder.addCase(createQuizOptionByQuestionId.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createQuizOptionByQuestionId.fulfilled, (state, action) => {
      state.loading = false;
      state.quizOptions.push(action.payload.data);
      state.error = null;
    });
    builder.addCase(createQuizOptionByQuestionId.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Update Quiz Option By Question ID
    builder.addCase(updateQuizOptionByQuestionId.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateQuizOptionByQuestionId.fulfilled, (state, action) => {
      state.loading = false;
      state.quizOptions = state.quizOptions.map(option =>
        option.id === action.payload.data.id ? action.payload.data : option
      );
      state.error = null;
    });
    builder.addCase(updateQuizOptionByQuestionId.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Delete Quiz Option By Question ID
    builder.addCase(deleteQuizOptionByQuestionId.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteQuizOptionByQuestionId.fulfilled, (state, action) => {
      state.loading = false;
      state.quizOptions = state.quizOptions.filter(
        option => option.id !== action.payload.data
      );
      state.error = null;
    });
    builder.addCase(deleteQuizOptionByQuestionId.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });
  },
});

export default quizOptionSlice.reducer; 