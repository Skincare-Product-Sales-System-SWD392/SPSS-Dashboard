import { APIClient } from "./api_helper";

import * as url from "./url_helper";

const api = new APIClient();
// Gets the logged in user data from local session

// Gets the logged in user data from local session
export const getLoggedUser = () => {
  const user = localStorage.getItem("user");
  if (user) return JSON.parse(user);
  return null;
};

// is user is logged in
export const isUserAuthenticated = () => {
  return getLoggedUser() !== null;
};

// Register Method
export const postFakeRegister = (data: any) => api.create(url.POST_FAKE_REGISTER, data);

// Login Method
export const postFakeLogin = (data: any) => api.create(url.POST_FAKE_LOGIN, data);

// postForgetPwd
export const postFakeForgetPwd = (data: any) => api.create(url.POST_FAKE_PASSWORD_FORGET, data);

// Edit profile
export const postJwtProfile = (data: any) => api.create(url.POST_EDIT_JWT_PROFILE, data);

export const postFakeProfile = (data: any) => api.create(url.POST_EDIT_PROFILE, data);
// export const postFakeProfile = (data: any) => api.update(url.POST_EDIT_PROFILE + '/' + data.idx, data);

// Register Method
export const postJwtRegister = (url: any, data: any) => {
  return api.create(url, data)
    .catch((err: any) => {
      var message;
      if (err.response && err.response.status) {
        switch (err.response.status) {
          case 404:
            message = "Sorry! the page you are looking for could not be found";
            break;
          case 500:
            message = "Sorry! something went wrong, please contact our support team";
            break;
          case 401:
            message = "Invalid credentials";
            break;
          default:
            message = err[1];
            break;
        }
      }
      throw message;
    });
};
// Login Method
export const postJwtLogin = (data: any) => api.create(url.POST_FAKE_JWT_LOGIN, data);

// postForgetPwd
export const postJwtForgetPwd = (data: any) => api.create(url.POST_FAKE_JWT_PASSWORD_FORGET, data);

// postSocialLogin
export const postSocialLogin = (data: any) => api.create(url.SOCIAL_LOGIN, data);

// Chat
export const getChat = (roomId: any) => api.get(`${url.GET_CHAT}/${roomId}`, { params: { roomId } });
export const addChat = (data: any) => api.create(url.ADD_CHAT, data);
export const deleteChat = (data: any) => api.delete(url.DELETE_CHAT, { headers: { data } });
export const bookmarkChat = (data: any) => api.delete(url.BOOKMARK_CHAT, { headers: { data } });

// Mailbox
export const getMail = () => api.get(url.GET_MAIL, null);
export const deleteMail = (data: any) => api.delete(url.DELETE_MAIL, { headers: { data } });
export const unreadMail = (data: any) => api.delete(url.UNREAD_MAIL, { headers: { data } });
export const staredMail = (data: any) => api.delete(url.STARED_MAIL, { headers: { data } });
export const trashMail = (data: any) => api.delete(url.TRASH_MAIL, { headers: { data } });

// Calendar
export const getEvents = () => api.get(url.GET_EVENT, null);
export const addEvents = (data: any) => api.create(url.ADD_EVENT, data);
export const updateEvents = (data: any) => api.update(url.UPDATE_EVENT, data);
export const deleteEvents = (data: any) => api.delete(url.DELETE_EVENT, { headers: { data } });

// Category
export const getCategory = () => api.get(url.GET_CATEGORY, null);
export const deleteCategory = (data: any) => api.delete(url.DELETE_CATEGORY, { headers: { data } });

// Ecommerce
// Orders
export const getOrders = () => api.get(url.GET_ORDERS, null);
export const addOrders = (data: any) => api.create(url.ADD_ORDERS, data);
export const updateOrders = (data: any) => api.update(url.UPDATE_ORDERS, data);
export const deleteOrders = (data: any) => api.delete(url.DELETE_ORDERS, { headers: { data } });

// Sellers
export const getSellers = () => api.get(url.GET_SELLERS, null);
export const addSellers = (data: any) => api.create(url.ADD_SELLERS, data);
export const updateSellers = (data: any) => api.update(url.UPDATE_SELLERS, data);
export const deleteSellers = (data: any) => api.delete(url.DELETE_SELLERS, { headers: { data } });

// Products
// List View
export const getProductList = () => api.get(url.GET_PRODUCT_LIST, null);
export const addProductList = (data: any) => api.create(url.ADD_PRODUCT_LIST, data);
export const updateProductList = (data: any) => api.update(url.UPDATE_PRODUCT_LIST, data);
export const deleteProductList = (data: any) => api.delete(url.DELETE_PRODUCT_LIST, { headers: { data } });

// Grid View
export const getProductGrid = () => api.get(url.GET_PRODUCT_GRID, null);
export const addProductGrid = (data: any) => api.create(url.ADD_PRODUCT_GRID, data);
export const updateProductGrid = (data: any) => api.update(url.UPDATE_PRODUCT_GRID, data);
export const deleteProductGrid = (data: any) => api.delete(url.DELETE_PRODUCT_GRID, { headers: { data } });

// Overview
export const getReview = () => api.get(url.GET_REVIEW, null);
export const addReview = (data: any) => api.create(url.ADD_REVIEW, data);
export const updateReview = (data: any) => api.update(url.UPDATE_REVIEW, data);
export const deleteReview = (data: any) => api.delete(url.DELETE_REVIEW, { headers: { data } });

// HR Management
// Employee List
export const getEmployee = () => api.get(url.GET_EMPLOYEE, null);
export const addEmployee = (data: any) => api.create(url.ADD_EMPLOYEE, data);
export const updateEmployee = (data: any) => api.update(url.UPDATE_EMPLOYEE, data);
export const deleteEmployee = (data: any) => api.delete(url.DELETE_EMPLOYEE, { headers: { data } });

// Holidays
export const getHolidays = () => api.get(url.GET_HOLIDAYS, null);
export const addHolidays = (data: any) => api.create(url.ADD_HOLIDAYS, data);
export const updateHolidays = (data: any) => api.update(url.UPDATE_HOLIDAYS, data);
export const deleteHolidays = (data: any) => api.delete(url.DELETE_HOLIDAYS, { headers: { data } });

// Leaves Manage

// Leave Manage (Employee)
export const getLeaveManageEmployee = () => api.get(url.GET_LEAVE_MANAGE_EMPLOYEE, null);

// Leave Manage (HR)
export const getLeaveManageHR = () => api.get(url.GET_LEAVE_MANAGE_HR, null);
export const addLeaveManageHR = (data: any) => api.create(url.ADD_LEAVE_MANAGE_HR, data);
export const updateLeaveManageHR = (data: any) => api.update(url.UPDATE_LEAVE_MANAGE_HR, data);
export const deleteLeaveManageHR = (data: any) => api.delete(url.DELETE_LEAVE_MANAGE_HR, { headers: { data } });

// Attendance
// Attendance (HR)
export const getAttendance = () => api.get(url.GET_ATTENDANCE, null);

// Main Attendance
export const getMainAttendance = () => api.get(url.GET_MAIN_ATTENDANCE, null);

// Departments
export const getDepartments = () => api.get(url.GET_DEPARTMENTS, null);
export const addDepartments = (data: any) => api.create(url.ADD_DEPARTMENTS, data);
export const updateDepartments = (data: any) => api.update(url.UPDATE_DEPARTMENTS, data);
export const deleteDepartments = (data: any) => api.delete(url.DELETE_DEPARTMENTS, { headers: { data } });

// Sales
// Estimates
export const getEstimates = () => api.get(url.GET_ESTIMATES, null);
export const addEstimates = (data: any) => api.create(url.ADD_ESTIMATES, data);
export const updateEstimates = (data: any) => api.update(url.UPDATE_ESTIMATES, data);
export const deleteEstimates = (data: any) => api.delete(url.DELETE_ESTIMATES, { headers: { data } });

// Payments
export const getPayments = () => api.get(url.GET_PAYMENTS, null);

// Expenses
export const getExpenses = () => api.get(url.GET_EXPENSES, null);
export const addExpenses = (data: any) => api.create(url.ADD_EXPENSES, data);
export const updateExpenses = (data: any) => api.update(url.UPDATE_EXPENSES, data);
export const deleteExpenses = (data: any) => api.delete(url.DELETE_EXPENSES, { headers: { data } });

// Payroll
// Employee Salary
export const getEmployeeSalary = () => api.get(url.GET_EMPLOYEE_SALARY, null);
export const addEmployeeSalary = (data: any) => api.create(url.ADD_EMPLOYEE_SALARY, data);
export const updateEmployeeSalary = (data: any) => api.update(url.UPDATE_EMPLOYEE_SALARY, data);
export const deleteEmployeeSalary = (data: any) => api.delete(url.DELETE_EMPLOYEE_SALARY, { headers: { data } });

// Notes
export const getNotes = () => api.get(url.GET_NOTES, null);
export const addNotes = (data: any) => api.create(url.ADD_NOTES, data);
export const updateNotes = (data: any) => api.update(url.UPDATE_NOTES, data);
export const deleteNotes = (data: any) => api.delete(url.DELETE_NOTES, { headers: { data } });

// Social
// Friends
export const getSocialFriends = () => api.get(url.GET_SOCIAL_FRIENDS, null);

// Events
export const getSocialEvent = () => api.get(url.GET_SOCIAL_EVENTS, null);
export const addSocialEvent = (data: any) => api.create(url.ADD_SOCIAL_EVENTS, data);
export const updateSocialEvent = (data: any) => api.update(url.UPDATE_SOCIAL_EVENTS, data);
export const deleteSocialEvent = (data: any) => api.delete(url.DELETE_SOCIAL_EVENTS, { headers: { data } });

// Invoices
export const getInvoiceList = () => api.get(url.GET_INVOICE_LIST, null);

// Users
// List View
export const getUserList = () => api.get(url.GET_USER_LIST, null);
export const addUserList = (data: any) => api.create(url.ADD_USER_LIST, data);
export const updateUserList = (data: any) => api.update(url.UPDATE_USER_LIST, data);
export const deleteUserList = (user: any) => api.delete(url.DELETE_USER_LIST, { headers: { user } });

// Grid View
export const getUserGrid = () => api.get(url.GET_USER_GRID, null);
export const addUserGrid = (data: any) => api.create(url.ADD_USER_GRID, data);
export const updateUserGrid = (data: any) => api.update(url.UPDATE_USER_GRID, data);
export const deleteUserGrid = (user: any) => api.delete(url.DELETE_USER_GRID, { headers: { user } });