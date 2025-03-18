import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getAllBlogs as getAllBlogsApi,
  createBlog as createBlogApi,
  updateBlog as updateBlogApi,
  deleteBlog as deleteBlogApi,
} from "../../helpers/fakebackend_helper";

export const getAllBlogs = createAsyncThunk(
  "blog/getAllBlogs",
  async (params: { pageNumber: number, pageSize: number }) => {
    try {
      const response = await getAllBlogsApi({ 
        pageNumber: params.pageNumber,
        pageSize: params.pageSize 
      });
      return response;
    } catch (error: any) {
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Failed to fetch blogs");
      }
      throw error;
    }
  }
);

export const addBlog = createAsyncThunk(
  "blog/addBlog",
  async (blog: any) => {
    try {
      console.log("Making API call to add blog with data:", blog);
      const response = await createBlogApi(blog);
      console.log("API response for add blog:", response);
      toast.success("Blog added successfully");
      return response;
    } catch (error: any) {
      console.error("Error adding blog:", error);
      if (error.response) {
        console.error("Error response data:", error.response.data);
        if (error.response.data.message) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Failed to add blog");
        }
      } else if (error.request) {
        console.error("No response received:", error.request);
        toast.error("No response from server");
      } else {
        console.error("Error message:", error.message);
        toast.error("Failed to add blog");
      }
      throw error;
    }
  }
);

export const updateBlog = createAsyncThunk(
  "blog/updateBlog",
  async (blog: { id: string, data: any }) => {
    try {
      const response = await updateBlogApi(blog.id, blog.data);
      toast.success("Blog updated successfully");
      return response;
    } catch (error: any) {
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Failed to update blog");
      }
      throw error;
    }
  }
);

export const deleteBlog = createAsyncThunk(
  "blog/deleteBlog",
  async (id: string) => {
    try {
      const response = await deleteBlogApi(id);
      toast.success("Blog deleted successfully");
      return response;
    } catch (error: any) {
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Failed to delete blog");
      }
      throw error;
    }
  }
);