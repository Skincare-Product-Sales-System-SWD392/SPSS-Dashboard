import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getAllRoles as getAllRolesApi,
  createRole as createRoleApi,
  updateRole as updateRoleApi,
  deleteRole as deleteRoleApi,
} from "../../helpers/fakebackend_helper";

export const getAllRoles = createAsyncThunk(
  "role/getAllRoles",
  async (params: { page: number, pageSize: number }) => {
    try {
      const response = await getAllRolesApi({ 
        pageNumber: params.page,
        pageSize: params.pageSize 
      });
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to fetch roles");
      }
      throw error;
    }
  }
);

export const addRole = createAsyncThunk(
  "role/addRole",
  async (role: any) => {
    try {
      const response = await createRoleApi(role);
      toast.success("Role added successfully");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to add role");
      }
      throw error;
    }
  }
);

export const updateRole = createAsyncThunk(
  "role/updateRole",
  async (role: { id: string, data: any }) => {
    try {
      const response = await updateRoleApi(role.id, role.data);
      toast.success("Role updated successfully");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to update role");
      }
      throw error;
    }
  }
);

export const deleteRole = createAsyncThunk(
  "role/deleteRole",
  async (id: string) => {
    try {
      const response = await deleteRoleApi(id);
      toast.success("Role deleted successfully");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to delete role");
      }
      throw error;
    }
  }
);
