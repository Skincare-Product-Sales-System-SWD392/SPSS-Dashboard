import { createSlice } from "@reduxjs/toolkit";
import { getAllBlogs, addBlog, updateBlog, deleteBlog } from "./thunk";

interface BlogState {
    loading: boolean;
    error: string | null;
    blogs: {
      results: any[];
      currentPage: number;
      pageCount: number;
      pageSize: number;
      rowCount: number;
      firstRowOnPage: number;
      lastRowOnPage: number;
    };
  }

  export const initialState: BlogState = {
    loading: false,
    error: null,
    blogs: {
      results: [],
      currentPage: 1,
      pageCount: 1,
      pageSize: 10,
      rowCount: 0,
      firstRowOnPage: 0,
      lastRowOnPage: 0,
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
        state.blogs = action.payload.data;
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
        const newBlog = action.payload.data;
        if (newBlog) {
          state.blogs.results = [newBlog, ...state.blogs.results];
          state.blogs.rowCount += 1;
          state.blogs.lastRowOnPage = Math.min(
            state.blogs.firstRowOnPage + state.blogs.pageSize - 1,
            state.blogs.rowCount
          );
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
        state.blogs.results = state.blogs.results.map(blog =>
          blog.id === action.payload.data.id ? action.payload.data : blog
        );
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
        state.blogs.results = state.blogs.results.filter(
          blog => blog.id !== action.payload.data
        );
        state.error = null;
      });
      builder.addCase(deleteBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      });
    },
  });

  export default blogSlice.reducer; 


  
  