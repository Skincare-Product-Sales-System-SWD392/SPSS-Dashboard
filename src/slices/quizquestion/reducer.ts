import { createSlice } from "@reduxjs/toolkit";
import { 
  getAllQuizQuestions, 
  createQuizQuestion, 
  updateQuizQuestion, 
  deleteQuizQuestion,
  getQuizQuestionsBySetId
} from "./thunk";

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

interface QuizQuestionState {
  loading: boolean;
  error: string | null;
  quizQuestions: any[];
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

export const initialStateQuizQuestion: QuizQuestionState = {
  loading: false,
  error: null,
  quizQuestions: []
};

const quizQuestionSlice = createSlice({
  name: "quizquestion",
  initialState: initialStateQuizQuestion,
  reducers: {},
  extraReducers: (builder) => {
    // Get All Quiz Questions
    builder.addCase(getAllQuizQuestions.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAllQuizQuestions.fulfilled, (state, action) => {
      state.loading = false;
      state.quizQuestions = action.payload.data;
      state.error = null;
    });
    builder.addCase(getAllQuizQuestions.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Get Quiz Questions By Set ID
    builder.addCase(getQuizQuestionsBySetId.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getQuizQuestionsBySetId.fulfilled, (state, action) => {
      state.loading = false;
      state.quizQuestions = action.payload.data;
      state.error = null;
    });
    builder.addCase(getQuizQuestionsBySetId.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Create Quiz Question
    builder.addCase(createQuizQuestion.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createQuizQuestion.fulfilled, (state, action) => {
      state.loading = false;
      state.quizQuestions.push(action.payload.data);
      state.error = null;
    });
    builder.addCase(createQuizQuestion.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Update Quiz Question
    builder.addCase(updateQuizQuestion.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateQuizQuestion.fulfilled, (state, action) => {
      state.loading = false;
      state.quizQuestions = state.quizQuestions.map(question =>
        question.id === action.payload.data.id ? action.payload.data : question
      );
      state.error = null;
    });
    builder.addCase(updateQuizQuestion.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Delete Quiz Question
    builder.addCase(deleteQuizQuestion.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteQuizQuestion.fulfilled, (state, action) => {
      state.loading = false;
      state.quizQuestions = state.quizQuestions.filter(
        question => question.id !== action.payload.data
      );
      state.error = null;
    });
    builder.addCase(deleteQuizQuestion.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });
  },
});

export default quizQuestionSlice.reducer; 