// import { createAsyncThunk } from "@reduxjs/toolkit";

// import {
//     getAllOrders as getOrdersApi,
//     createOrder as addOrdersApi,
//     updateOrder as updateOrdersApi,
//     deleteOrder as deleteOrdersApi,
//     getSellers as getSellersApi,
//     addSellers as addSellersApi,
//     updateSellers as updateSellersApi,
//     deleteSellers as deleteSellersApi,
//     getReview as getReviewApi,
//     addReview as addReviewApi,
//     updateReview as updateReviewApi,
//     deleteReview as deleteReviewApi,
// } from "../../helpers/fakebackend_helper";
// import { toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

// export const getOrders = createAsyncThunk("ecommerce/getOrders", async () => {
//     try {
//         const response = getOrdersApi();
//         return response;
//     } catch (error) {
//         return error;
//     }
// });
// export const addOrders = createAsyncThunk("ecommerce/addOrders", async (event: any) => {
//     try {
//         const response = addOrdersApi(event);
//         const data = await response;
//         toast.success("Order Added Successfully", { autoClose: 2000 });
//         return data;
//     } catch (error) {
//         toast.error("Order Added Failed", { autoClose: 2000 });
//         return error;
//     }
// });
// export const updateOrders = createAsyncThunk("ecommerce/updateOrders", async (event: any) => {
//     try {
//         const response = updateOrdersApi(event);
//         const data = await response;
//         toast.success("Order updated Successfully", { autoClose: 2000 });
//         return data;
//     } catch (error) {
//         toast.error("Order updated Failed", { autoClose: 2000 });
//         return error;
//     }
// });
// export const deleteOrders = createAsyncThunk("ecommerce/deleteOrders", async (event: any) => {
//     try {
//         const response = deleteOrdersApi(event);
//         toast.success("Order deleted Successfully", { autoClose: 2000 });
//         return response;
//     } catch (error) {
//         toast.error("Order deleted Failed", { autoClose: 2000 });
//         return error;
//     }
// });

// export const getSellers = createAsyncThunk("ecommerce/getSellers", async () => {
//     try {
//         const response = getSellersApi();
//         return response;
//     } catch (error) {
//         return error;
//     }
// });
// export const addSellers = createAsyncThunk("ecommerce/addSellers", async (event: any) => {
//     try {
//         const response = addSellersApi(event);
//         const data = await response;
//         toast.success("Seller Added Successfully", { autoClose: 2000 });
//         return data;
//     } catch (error) {
//         toast.error("Seller Added Failed", { autoClose: 2000 });
//         return error;
//     }
// });
// export const updateSellers = createAsyncThunk("ecommerce/updateSellers", async (event: any) => {
//     try {
//         const response = updateSellersApi(event);
//         const data = await response;
//         toast.success("Seller updated Successfully", { autoClose: 2000 });
//         return data;
//     } catch (error) {
//         toast.error("Seller updated Failed", { autoClose: 2000 });
//         return error;
//     }
// });
// export const deleteSellers = createAsyncThunk("ecommerce/deleteSellers", async (event: any) => {
//     try {
//         const response = deleteSellersApi(event);
//         toast.success("Seller deleted Successfully", { autoClose: 2000 });
//         return response;
//     } catch (error) {
//         toast.error("Seller deleted Failed", { autoClose: 2000 });
//         return error;
//     }
// });

// export const getReview = createAsyncThunk("ecommerce/getReview", async () => {
//     try {
//         const response = getReviewApi();
//         return response;
//     } catch (error) {
//         return error;
//     }
// });
// export const addReview = createAsyncThunk("ecommerce/addReview", async (event: any) => {
//     try {
//         const response = addReviewApi(event);
//         const data = await response;
//         toast.success("Data Added Successfully", { autoClose: 2000 });
//         return data;
//     } catch (error) {
//         toast.error("Data Added Failed", { autoClose: 2000 });
//         return error;
//     }
// });
// export const updateReview = createAsyncThunk("ecommerce/updateReview", async (event: any) => {
//     try {
//         const response = updateReviewApi(event);
//         const data = await response;
//         toast.success("Data updated Successfully", { autoClose: 2000 });
//         return data;
//     } catch (error) {
//         toast.error("Data updated Failed", { autoClose: 2000 });
//         return error;
//     }
// });
// export const deleteReview = createAsyncThunk("ecommerce/deleteReview", async (event: any) => {
//     try {
//         const response = deleteReviewApi(event);
//         toast.success("Data deleted Successfully", { autoClose: 2000 });
//         return response;
//     } catch (error) {
//         toast.error("Data deleted Failed", { autoClose: 2000 });
//         return error;
//     }
// });
