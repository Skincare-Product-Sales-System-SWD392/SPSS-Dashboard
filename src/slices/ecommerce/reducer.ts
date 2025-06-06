// import { createSlice } from "@reduxjs/toolkit";
// import {
//     getOrders,
//     addOrders,
//     updateOrders,
//     deleteOrders,
//     getSellers,
//     addSellers,
//     updateSellers,
//     deleteSellers,
//     getReview,
//     addReview,
//     updateReview,
//     deleteReview
// } from './thunk';

// export const initialState = {
//     orders: [],
//     sellers: [],
//     productList: [],
//     productGrid: [],
//     reviews: [],
//     errors: {}
// };

// const EcommerceSlice = createSlice({
//     name: 'Ecommerce',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         // Orders
//         builder.addCase(getOrders.fulfilled, (state: any, action: any) => {
//             state.orders = action.payload;
//         });
//         builder.addCase(getOrders.rejected, (state: any, action: any) => {
//             state.error = action.payload.error || null;
//         });
//         builder.addCase(addOrders.fulfilled, (state: any, action: any) => {
//             state.orders.unshift(action.payload);
//         });
//         builder.addCase(addOrders.rejected, (state: any, action: any) => {
//             state.error = action.payload.error || null;
//         });
//         builder.addCase(updateOrders.fulfilled, (state: any, action: any) => {
//             state.orders = state.orders.map((orders: any) =>
//                 orders.id === action.payload.id
//                     ? { ...orders, ...action.payload }
//                     : orders
//             );
//         });
//         builder.addCase(updateOrders.rejected, (state: any, action: any) => {
//             state.error = action.payload.error || null;
//         });
//         builder.addCase(deleteOrders.fulfilled, (state: any, action: any) => {
//             state.orders = state.orders.filter(
//                 (orders: any) => orders.id.toString() !== action.payload.toString()
//             );
//         });
//         builder.addCase(deleteOrders.rejected, (state: any, action: any) => {
//             state.error = action.payload.error || null;
//         });

//         // Sellers
//         builder.addCase(getSellers.fulfilled, (state: any, action: any) => {
//             state.sellers = action.payload;
//         });
//         builder.addCase(getSellers.rejected, (state: any, action: any) => {
//             state.error = action.payload.error || null;
//         });
//         builder.addCase(addSellers.fulfilled, (state: any, action: any) => {
//             state.sellers.unshift(action.payload);
//         });
//         builder.addCase(addSellers.rejected, (state: any, action: any) => {
//             state.error = action.payload.error || null;
//         });
//         builder.addCase(updateSellers.fulfilled, (state: any, action: any) => {
//             state.sellers = state.sellers.map((sellers: any) =>
//                 sellers.id === action.payload.id
//                     ? { ...sellers, ...action.payload }
//                     : sellers
//             );
//         });
//         builder.addCase(updateSellers.rejected, (state: any, action: any) => {
//             state.error = action.payload.error || null;
//         });
//         builder.addCase(deleteSellers.fulfilled, (state: any, action: any) => {
//             state.sellers = state.sellers.filter(
//                 (sellers: any) => sellers.id.toString() !== action.payload.toString()
//             );
//         });
//         builder.addCase(deleteSellers.rejected, (state: any, action: any) => {
//             state.error = action.payload.error || null;
//         });

//         // Overview
//         builder.addCase(getReview.fulfilled, (state: any, action: any) => {
//             state.reviews = action.payload;
//         });
//         builder.addCase(getReview.rejected, (state: any, action: any) => {
//             state.error = action.payload.error || null;
//         });
//         builder.addCase(addReview.fulfilled, (state: any, action: any) => {
//             state.reviews.unshift(action.payload);
//         });
//         builder.addCase(addReview.rejected, (state: any, action: any) => {
//             state.error = action.payload.error || null;
//         });
//         builder.addCase(updateReview.fulfilled, (state: any, action: any) => {
//             state.reviews = state.reviews.map((reviews: any) =>
//                 reviews.id === action.payload.id
//                     ? { ...reviews, ...action.payload }
//                     : reviews
//             );
//         });
//         builder.addCase(updateReview.rejected, (state: any, action: any) => {
//             state.error = action.payload.error || null;
//         });
//         builder.addCase(deleteReview.fulfilled, (state: any, action: any) => {
//             state.reviews = state.reviews.filter(
//                 (reviews: any) => reviews.id.toString() !== action.payload.toString()
//             );
//         });
//         builder.addCase(deleteReview.rejected, (state: any, action: any) => {
//             state.error = action.payload.error || null;
//         });
//     }
// });

// export default EcommerceSlice.reducer;