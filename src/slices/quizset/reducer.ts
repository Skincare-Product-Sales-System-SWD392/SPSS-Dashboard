import { createSlice } from "@reduxjs/toolkit";
import { getAllQuizSets, createQuizSet, updateQuizSet, deleteQuizSet, setQuizSetAsDefault } from "./thunk";

interface QuizSetState {
  loading: boolean;
  error: string | null;
  quizSets: {
    data: {
      items: any[];
      totalCount: number;
      pageNumber: number;
      pageSize: number;
      totalPages: number;
    }
  };
}

export const initialState: QuizSetState = {
  loading: false,
  error: null,
  quizSets: {
    data: {
      items: [],
      totalCount: 0,
      pageNumber: 1,
      pageSize: 5,
      totalPages: 1
    }
  },
};

const quizSetSlice = createSlice({
  name: "quizset",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get Quiz Sets
    builder.addCase(getAllQuizSets.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAllQuizSets.fulfilled, (state, action) => {
      state.loading = false;
      state.quizSets = {
        data: action.payload.data
      };
      state.error = null;
    });
    builder.addCase(getAllQuizSets.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Add Quiz Set
    builder.addCase(createQuizSet.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createQuizSet.fulfilled, (state, action) => {
      state.loading = false;
      state.quizSets.data.items.unshift(action.payload.data);
      state.error = null;
    });
    builder.addCase(createQuizSet.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Update Quiz Set
    builder.addCase(updateQuizSet.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateQuizSet.fulfilled, (state, action) => {
      state.loading = false;
      state.quizSets.data.items = state.quizSets.data.items.map(quizSet =>
        quizSet.id === action.payload.data.id ? action.payload.data : quizSet
      );
      state.error = null;
    });
    builder.addCase(updateQuizSet.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Delete Quiz Set
    builder.addCase(deleteQuizSet.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteQuizSet.fulfilled, (state, action) => {
      state.loading = false;
      state.quizSets.data.items = state.quizSets.data.items.filter(
        quizSet => quizSet.id !== action.payload.data
      );
      state.error = null;
    });
    builder.addCase(deleteQuizSet.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Set Quiz Set as Default
    builder.addCase(setQuizSetAsDefault.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(setQuizSetAsDefault.fulfilled, (state, action) => {
      state.loading = false;
      // Update all quiz sets to not be default
      state.quizSets.data.items = state.quizSets.data.items.map(quizSet => ({
        ...quizSet,
        isDefault: quizSet.id === action.payload.id
      }));
      state.error = null;
    });
    builder.addCase(setQuizSetAsDefault.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });
  },
});

export default quizSetSlice.reducer; 