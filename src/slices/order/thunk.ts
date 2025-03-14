import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getAllOrders as getAllOrdersApi,
  createOrder as createOrderApi,
  updateOrder as updateOrderApi,
  deleteOrder as deleteOrderApi,
} from "../../helpers/fakebackend_helper";

export const getAllOrders = createAsyncThunk(
  "order/getAllOrders",
  async (params: { page: number, pageSize: number }) => {
    try {
      const response = await getAllOrdersApi({ 
        pageNumber: params.page,
        pageSize: params.pageSize 
      });
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to fetch orders");
      }
      throw error;
    }
  }
);

export const addOrder = createAsyncThunk(
  "order/addOrder",
  async (order: any) => {
    try {
      const response = await createOrderApi(order);
      toast.success("Order added successfully");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to add order");
      }
      throw error;
    }
  }
);

export const updateOrder = createAsyncThunk(
  "order/updateOrder",
  async (order: { id: string, data: any }) => {
    try {
      const response = await updateOrderApi(order.id, order.data);
      toast.success("Order updated successfully");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to update order");
      }
      throw error;
    }
  }
);

export const deleteOrder = createAsyncThunk(
  "order/deleteOrder",
  async (id: string) => {
    try {
      const response = await deleteOrderApi(id);
      toast.success("Order deleted successfully");
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to delete order");
      }
      throw error;
    }
  }
);
