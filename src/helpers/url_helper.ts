import { ex } from "@fullcalendar/core/internal-common";

// REGISTER
export const POST_FAKE_REGISTER = "/auth/signup";

// LOGIN
export const POST_FAKE_LOGIN = "/auth/signin";
export const POST_FAKE_JWT_LOGIN = "/post-jwt-login";
export const POST_FAKE_PASSWORD_FORGET = "/auth/forgot-password";
export const POST_FAKE_JWT_PASSWORD_FORGET = "/jwt-forget-pwd";
export const SOCIAL_LOGIN = "/social-login";

// PROFILE
export const POST_EDIT_JWT_PROFILE = "/post-jwt-profile";
export const POST_EDIT_PROFILE = "/user";

// Chat
export const GET_CHAT = "/get-chat";
export const ADD_CHAT = "/add-chat";
export const DELETE_CHAT = "/delete-chat";
export const BOOKMARK_CHAT = "/delete-chat";

// MailBox
export const GET_MAIL = "/get-mail";
export const DELETE_MAIL = "/delete-mail";
export const UNREAD_MAIL = "/unread-mail";
export const STARED_MAIL = "/stared-mail";
export const TRASH_MAIL = "/trash-mail";

// Calendar
export const GET_EVENT = "/get-event";
export const ADD_EVENT = "/add-event";
export const UPDATE_EVENT = "/edit-event";
export const DELETE_EVENT = "/delete-event";

// Category
export const GET_ALL_CATEGORIES = "/api/categories";
export const CREATE_CATEGORY = "/api/categories";
export const UPDATE_CATEGORY = "/api/categories";
export const DELETE_CATEGORY = "/api/categories";

// Ecommerce

// Promotion 
export const GET_ALL_PROMOTIONS = "/api/promotions";
export const CREATE_PROMOTION = "/api/promotions";
export const UPDATE_PROMOTION = "/api/promotions";
export const DELETE_PROMOTION = "/api/promotions";

// Variation
export const GET_ALL_VARIATIONS = "api/variations";
export const CREATE_VARIATION = "api/variations";
export const UPDATE_VARIATION = "api/variations";
export const DELETE_VARIATION = "api/variations";

// Product Category
export const GET_ALL_PRODUCT_CATEGORIES = "api/product-categories";
export const CREATE_PRODUCT_CATEGORIES = "api/product-categories";
export const UPDATE_PRODUCT_CATEGORIES= "api/product-categories";
export const DELETE_PRODUCT_CATEGORIES = "api/product-categories";


// Blog
export const GET_ALL_BLOGS = "/api/v1/Blog/all";
export const CREATE_BLOG = "/api/v1/Blog";
export const UPDATE_BLOG = "/api/v1/Blog";
export const DELETE_BLOG = "/api/v1/Blog";

// Payment Method
export const GET_ALL_PAYMENT_METHODS = "/api/payment-methods";
export const CREATE_PAYMENT_METHOD = "/api/payment-methods";
export const UPDATE_PAYMENT_METHOD = "/api/payment-methods";
export const DELETE_PAYMENT_METHOD = "/api/payment-methods";

// Skin Type
export const GET_ALL_SKIN_TYPES = "/api/skin-types";
export const CREATE_SKIN_TYPE = "/api/skin-types";
export const UPDATE_SKIN_TYPE = "/api/skin-types";
export const DELETE_SKIN_TYPE = "/api/skin-types";

// Cancel Reason
export const GET_ALL_CANCEL_REASONS = "/api/cancel-reasons";
export const CREATE_CANCEL_REASON = "/api/cancel-reasons";
export const UPDATE_CANCEL_REASON = "/api/cancel-reasons";
export const DELETE_CANCEL_REASON = "/api/cancel-reasons";

// Products
// List View
export const GET_ALL_PRODUCTS = "/api/products";
export const GET_PRODUCT_BY_ID = "/api/products";
export const CREATE_PRODUCT = "/api/products";
export const UPDATE_PRODUCT = "/api/products";
export const DELETE_PRODUCT = "/api/products";

// Country
export const GET_ALL_COUNTRIES = "/api/countries";

// Brand
export const GET_ALL_BRANDS = "/api/brands";
export const CREATE_BRAND = "/api/brands";
export const UPDATE_BRAND = "/api/brands";
export const DELETE_BRAND = "/api/brands";

// Voucher
export const GET_ALL_VOUCHERS = "/api/voucher";
export const CREATE_VOUCHER = "/api/voucher";
export const UPDATE_VOUCHER = "/api/voucher";
export const DELETE_VOUCHER = "/api/voucher";

// Orders
export const GET_ALL_ORDERS = "/api/orders";
export const CREATE_ORDERS = "/api/orders";
export const UPDATE_ORDERS = "/api/orders";
export const DELETE_ORDERS = "/api/orders";
export const GET_ORDER_BY_ID = "/api/orders";

// Sellers
export const GET_SELLERS = "/get-sellers";
export const ADD_SELLERS = "/add-sellers";
export const UPDATE_SELLERS = "/edit-sellers";
export const DELETE_SELLERS = "/delete-sellers";



// Grid View
export const GET_PRODUCT_GRID = "/get-product-grid";
export const ADD_PRODUCT_GRID = "/add-product-grid";
export const UPDATE_PRODUCT_GRID = "/edit-product-grid";
export const DELETE_PRODUCT_GRID = "/delete-product-grid";

// Overview
export const GET_ALL_REVIEWS = "/api/reviews";
export const ADD_REVIEW = "/api/review";
export const UPDATE_REVIEW = "/api/review";
export const DELETE_REVIEW = "/api/review";

// HR Management
// Employee List
export const GET_EMPLOYEE = "/get-employee";
export const ADD_EMPLOYEE = "/add-employee";
export const UPDATE_EMPLOYEE = "/edit-employee";
export const DELETE_EMPLOYEE = "/delete-employee";

// Holidays
export const GET_HOLIDAYS = "/get-holidays";
export const ADD_HOLIDAYS = "/add-holidays";
export const UPDATE_HOLIDAYS = "/edit-holidays";
export const DELETE_HOLIDAYS = "/delete-holidays";

// Leaves Manage Employee
export const GET_LEAVE_MANAGE_EMPLOYEE = "/get-leave-manage-employee";

// Leave Manage (HR)
export const GET_LEAVE_MANAGE_HR = "/get-leave-manage-hr";
export const ADD_LEAVE_MANAGE_HR = "/add-leave-manage-hr";
export const UPDATE_LEAVE_MANAGE_HR = "/edit-leave-manage-hr";
export const DELETE_LEAVE_MANAGE_HR = "/delete-leave-manage-hr";

// Attendance
// Attendance (HR)
export const GET_ATTENDANCE = "/get-attendance";

// Main Attendance
export const GET_MAIN_ATTENDANCE = "/get-main-attendance";

// Departments
export const GET_DEPARTMENTS = "/get-departments";
export const ADD_DEPARTMENTS = "/add-departments";
export const UPDATE_DEPARTMENTS = "/edit-departments";
export const DELETE_DEPARTMENTS = "/delete-departments";

// Sales
// Estimates
export const GET_ESTIMATES = "/get-estimates";
export const ADD_ESTIMATES = "/add-estimates";
export const UPDATE_ESTIMATES = "/edit-estimates";
export const DELETE_ESTIMATES = "/delete-estimates";

// Payments
export const GET_PAYMENTS = "/get-payments";

// Expenses
export const GET_EXPENSES = "/get-expenses";
export const ADD_EXPENSES = "/add-expenses";
export const UPDATE_EXPENSES = "/edit-expenses";
export const DELETE_EXPENSES = "/delete-expenses";

// Payroll
// Employee Salary
export const GET_EMPLOYEE_SALARY = "/get-employee-salary";
export const ADD_EMPLOYEE_SALARY = "/add-employee-salary";
export const UPDATE_EMPLOYEE_SALARY = "/edit-employee-salary";
export const DELETE_EMPLOYEE_SALARY = "/delete-employee-salary";

// Notes
export const GET_NOTES = "/get-notes";
export const ADD_NOTES = "/add-notes";
export const UPDATE_NOTES = "/edit-notes";
export const DELETE_NOTES = "/delete-notes";

// Social
// Friends
export const GET_SOCIAL_FRIENDS = "/get-social-friends";

// Events
export const GET_SOCIAL_EVENTS = "/get-social-event";
export const ADD_SOCIAL_EVENTS = "/add-social-event";
export const UPDATE_SOCIAL_EVENTS = "/edit-social-event";
export const DELETE_SOCIAL_EVENTS = "/delete-social-event";

// invoice
export const GET_INVOICE_LIST = "/get-invoice-list"

// Users
// List View
export const GET_USER_LIST = "/get-userlist";
export const ADD_USER_LIST = "/add-userlist";
export const UPDATE_USER_LIST = "/edit-userlist";
export const DELETE_USER_LIST = "/delete-userlist";

// Grid View
export const GET_USER_GRID = "/get-usergrid";
export const ADD_USER_GRID = "/add-usergrid";
export const UPDATE_USER_GRID = "/edit-usergrid";
export const DELETE_USER_GRID = "/delete-usergrid";









