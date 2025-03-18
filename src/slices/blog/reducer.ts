import { createSlice } from "@reduxjs/toolkit";
import { getAllBlogs, addBlog, updateBlog, deleteBlog } from "./thunk";

interface BlogState {
  loading: boolean;
  error: string | null;
  blogs: {
    results: any[];
    totalCount: number;
    pageNumber: number;
    pageSize: number;
    totalPages: number;
  } | null;
}

export const initialState: BlogState = {
  loading: false,
  error: null,
  blogs: {
    results: [],
    totalCount: 0,
    pageNumber: 1,
    pageSize: 10,
    totalPages: 1
  },
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get Blogs
    builder.addCase(getAllBlogs.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAllBlogs.fulfilled, (state, action) => {
      state.loading = false;
      state.blogs = {
        results: action.payload.data.items || [],
        totalCount: action.payload.data.totalCount || 0,
        pageNumber: action.payload.data.pageNumber || 1,
        pageSize: action.payload.data.pageSize || 10,
        totalPages: action.payload.data.totalPages || 1
      };
      state.error = null;
    });
    builder.addCase(getAllBlogs.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Add Blog
    builder.addCase(addBlog.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addBlog.fulfilled, (state, action) => {
      state.loading = false;
      if (state.blogs && state.blogs.results) {
        state.blogs.results.unshift(action.payload.data);
        state.blogs.totalCount = (state.blogs.totalCount || 0) + 1;
      }
      state.error = null;
    });
    builder.addCase(addBlog.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Update Blog
    builder.addCase(updateBlog.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateBlog.fulfilled, (state, action) => {
      state.loading = false;
      if (state.blogs && state.blogs.results) {
        state.blogs.results = state.blogs.results.map(blog =>
          blog.id === action.payload.data.id ? action.payload.data : blog
        );
      }
      state.error = null;
    });
    builder.addCase(updateBlog.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Delete Blog
    builder.addCase(deleteBlog.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteBlog.fulfilled, (state, action) => {
      state.loading = false;
      if (state.blogs && state.blogs.results) {
        state.blogs.results = state.blogs.results.filter(
          blog => blog.id !== action.payload.data
        );
        state.blogs.totalCount = Math.max(0, (state.blogs.totalCount || 0) - 1);
      }
      state.error = null;
    });
    builder.addCase(deleteBlog.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });
  },
});

export default blogSlice.reducer; 