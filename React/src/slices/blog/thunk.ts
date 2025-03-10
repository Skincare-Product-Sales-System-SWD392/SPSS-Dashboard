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
  async ({ page, pageSize }: { page: number; pageSize: number }) => {
    try {
      const response = await getAllBlogsApi({ Page: page, PageSize: pageSize });
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
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
      const response = await createBlogApi(blog);
      toast.success("Blog added successfully");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
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
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
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
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to delete blog");
      }
      throw error;
    }
  }
);
