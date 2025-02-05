import { createAsyncThunk } from "@reduxjs/toolkit";

import {
    getEmployee as getEmployeeApi,
    addEmployee as addEmployeeApi,
    updateEmployee as updateEmployeeApi,
    deleteEmployee as deleteEmployeeApi,
    getHolidays as getHolidaysApi,
    addHolidays as addHolidaysApi,
    updateHolidays as updateHolidaysApi,
    deleteHolidays as deleteHolidaysApi,
    getDepartments as getDepartmentsApi,
    addDepartments as addDepartmentsApi,
    updateDepartments as updateDepartmentsApi,
    deleteDepartments as deleteDepartmentsApi,
    getEstimates as getEstimatesApi,
    addEstimates as addEstimatesApi,
    updateEstimates as updateEstimatesApi,
    deleteEstimates as deleteEstimatesApi,
    getExpenses as getExpensesApi,
    addExpenses as addExpensesApi,
    updateExpenses as updateExpensesApi,
    deleteExpenses as deleteExpensesApi,
    getLeaveManageHR as getLeaveManageHRApi,
    addLeaveManageHR as addLeaveManageHRApi,
    updateLeaveManageHR as updateLeaveManageHRApi,
    deleteLeaveManageHR as deleteLeaveManageHRApi,
    getEmployeeSalary as getEmployeeSalaryApi,
    addEmployeeSalary as addEmployeeSalaryApi,
    updateEmployeeSalary as updateEmployeeSalaryApi,
    deleteEmployeeSalary as deleteEmployeeSalaryApi,
    getAttendance as getAttendanceApi,
    getMainAttendance as getMainAttendanceApi,
    getLeaveManageEmployee as getLeaveManageEmployeeApi,
    getPayments as getPaymentsApi
} from "../../helpers/fakebackend_helper";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const getEmployee = createAsyncThunk("hrManagement/getEmployee", async () => {
    try {
        const response = getEmployeeApi();
        return response;
    } catch (error) {
        return error;
    }
});
export const addEmployee = createAsyncThunk("hrManagement/addEmployee", async (event: any) => {
    try {
        const response = addEmployeeApi(event);
        const data = await response;
        toast.success("Employee Added Successfully", { autoClose: 2000 });
        return data;
    } catch (error) {
        toast.error("Employee Added Failed", { autoClose: 2000 });
        return error;
    }
});
export const updateEmployee = createAsyncThunk("hrManagement/updateEmployee", async (event: any) => {
    try {
        const response = updateEmployeeApi(event);
        const data = await response;
        toast.success("Employee updated Successfully", { autoClose: 2000 });
        return data;
    } catch (error) {
        toast.error("Employee updated Failed", { autoClose: 2000 });
        return error;
    }
});
export const deleteEmployee = createAsyncThunk("hrManagement/deleteEmployee", async (event: any) => {
    try {
        const response = deleteEmployeeApi(event);
        toast.success("Employee deleted Successfully", { autoClose: 2000 });
        return response;
    } catch (error) {
        toast.error("Employee deleted Failed", { autoClose: 2000 });
        return error;
    }
});

export const getHolidays = createAsyncThunk("hrManagement/getHolidays", async () => {
    try {
        const response = getHolidaysApi();
        return response;
    } catch (error) {
        return error;
    }
});
export const addHolidays = createAsyncThunk("hrManagement/addHolidays", async (event: any) => {
    try {
        const response = addHolidaysApi(event);
        const data = await response;
        toast.success("Holidays Added Successfully", { autoClose: 2000 });
        return data;
    } catch (error) {
        toast.error("Holidays Added Failed", { autoClose: 2000 });
        return error;
    }
});
export const updateHolidays = createAsyncThunk("hrManagement/updateHolidays", async (event: any) => {
    try {
        const response = updateHolidaysApi(event);
        const data = await response;
        toast.success("Holidays updated Successfully", { autoClose: 2000 });
        return data;
    } catch (error) {
        toast.error("Holidays updated Failed", { autoClose: 2000 });
        return error;
    }
});
export const deleteHolidays = createAsyncThunk("hrManagement/deleteHolidays", async (event: any) => {
    try {
        const response = deleteHolidaysApi(event);
        toast.success("Holidays deleted Successfully", { autoClose: 2000 });
        return response;
    } catch (error) {
        toast.error("Holidays deleted Failed", { autoClose: 2000 });
        return error;
    }
});

export const getDepartments = createAsyncThunk("hrManagement/getDepartments", async () => {
    try {
        const response = getDepartmentsApi();
        return response;
    } catch (error) {
        return error;
    }
});
export const addDepartments = createAsyncThunk("hrManagement/addDepartments", async (event: any) => {
    try {
        const response = addDepartmentsApi(event);
        const data = await response;
        toast.success("Departments Added Successfully", { autoClose: 2000 });
        return data;
    } catch (error) {
        toast.error("Departments Added Failed", { autoClose: 2000 });
        return error;
    }
});
export const updateDepartments = createAsyncThunk("hrManagement/updateDepartments", async (event: any) => {
    try {
        const response = updateDepartmentsApi(event);
        const data = await response;
        toast.success("Departments updated Successfully", { autoClose: 2000 });
        return data;
    } catch (error) {
        toast.error("Departments updated Failed", { autoClose: 2000 });
        return error;
    }
});
export const deleteDepartments = createAsyncThunk("hrManagement/deleteDepartments", async (event: any) => {
    try {
        const response = deleteDepartmentsApi(event);
        toast.success("Departments deleted Successfully", { autoClose: 2000 });
        return response;
    } catch (error) {
        toast.error("Departments deleted Failed", { autoClose: 2000 });
        return error;
    }
});

export const getEstimates = createAsyncThunk("hrManagement/getEstimates", async () => {
    try {
        const response = getEstimatesApi();
        return response;
    } catch (error) {
        return error;
    }
});
export const addEstimates = createAsyncThunk("hrManagement/addEstimates", async (event: any) => {
    try {
        const response = addEstimatesApi(event);
        const data = await response;
        toast.success("Estimates Added Successfully", { autoClose: 2000 });
        return data;
    } catch (error) {
        toast.error("Estimates Added Failed", { autoClose: 2000 });
        return error;
    }
});
export const updateEstimates = createAsyncThunk("hrManagement/updateEstimates", async (event: any) => {
    try {
        const response = updateEstimatesApi(event);
        const data = await response;
        toast.success("Estimates updated Successfully", { autoClose: 2000 });
        return data;
    } catch (error) {
        toast.error("Estimates updated Failed", { autoClose: 2000 });
        return error;
    }
});
export const deleteEstimates = createAsyncThunk("hrManagement/deleteEstimates", async (event: any) => {
    try {
        const response = deleteEstimatesApi(event);
        toast.success("Estimates deleted Successfully", { autoClose: 2000 });
        return response;
    } catch (error) {
        toast.error("Estimates deleted Failed", { autoClose: 2000 });
        return error;
    }
});

export const getExpenses = createAsyncThunk("hrManagement/getExpenses", async () => {
    try {
        const response = getExpensesApi();
        return response;
    } catch (error) {
        return error;
    }
});
export const addExpenses = createAsyncThunk("hrManagement/addExpenses", async (event: any) => {
    try {
        const response = addExpensesApi(event);
        const data = await response;
        toast.success("Expenses Added Successfully", { autoClose: 2000 });
        return data;
    } catch (error) {
        toast.error("Expenses Added Failed", { autoClose: 2000 });
        return error;
    }
});
export const updateExpenses = createAsyncThunk("hrManagement/updateExpenses", async (event: any) => {
    try {
        const response = updateExpensesApi(event);
        const data = await response;
        toast.success("Expenses updated Successfully", { autoClose: 2000 });
        return data;
    } catch (error) {
        toast.error("Expenses updated Failed", { autoClose: 2000 });
        return error;
    }
});
export const deleteExpenses = createAsyncThunk("hrManagement/deleteExpenses", async (event: any) => {
    try {
        const response = deleteExpensesApi(event);
        toast.success("Expenses deleted Successfully", { autoClose: 2000 });
        return response;
    } catch (error) {
        toast.error("Expenses deleted Failed", { autoClose: 2000 });
        return error;
    }
});

export const getLeaveManageHR = createAsyncThunk("hrManagement/getLeaveManageHR", async () => {
    try {
        const response = getLeaveManageHRApi();
        return response;
    } catch (error) {
        return error;
    }
});
export const addLeaveManageHR = createAsyncThunk("hrManagement/addLeaveManageHR", async (event: any) => {
    try {
        const response = addLeaveManageHRApi(event);
        const data = await response;
        toast.success("Leave Added Successfully", { autoClose: 2000 });
        return data;
    } catch (error) {
        toast.error("Leave Added Failed", { autoClose: 2000 });
        return error;
    }
});
export const updateLeaveManageHR = createAsyncThunk("hrManagement/updateLeaveManageHR", async (event: any) => {
    try {
        const response = updateLeaveManageHRApi(event);
        const data = await response;
        toast.success("Leave updated Successfully", { autoClose: 2000 });
        return data;
    } catch (error) {
        toast.error("Leave updated Failed", { autoClose: 2000 });
        return error;
    }
});
export const deleteLeaveManageHR = createAsyncThunk("hrManagement/deleteLeaveManageHR", async (event: any) => {
    try {
        const response = deleteLeaveManageHRApi(event);
        toast.success("Leave deleted Successfully", { autoClose: 2000 });
        return response;
    } catch (error) {
        toast.error("Leave deleted Failed", { autoClose: 2000 });
        return error;
    }
});

export const getEmployeeSalary = createAsyncThunk("hrManagement/getEmployeeSalary", async () => {
    try {
        const response = getEmployeeSalaryApi();
        return response;
    } catch (error) {
        return error;
    }
});
export const addEmployeeSalary = createAsyncThunk("hrManagement/addEmployeeSalary", async (event: any) => {
    try {
        const response = addEmployeeSalaryApi(event);
        const data = await response;
        toast.success("data Added Successfully", { autoClose: 2000 });
        return data;
    } catch (error) {
        toast.error("data Added Failed", { autoClose: 2000 });
        return error;
    }
});
export const updateEmployeeSalary = createAsyncThunk("hrManagement/updateEmployeeSalary", async (event: any) => {
    try {
        const response = updateEmployeeSalaryApi(event);
        const data = await response;
        toast.success("data updated Successfully", { autoClose: 2000 });
        return data;
    } catch (error) {
        toast.error("data updated Failed", { autoClose: 2000 });
        return error;
    }
});
export const deleteEmployeeSalary = createAsyncThunk("hrManagement/deleteEmployeeSalary", async (event: any) => {
    try {
        const response = deleteEmployeeSalaryApi(event);
        toast.success("data deleted Successfully", { autoClose: 2000 });
        return response;
    } catch (error) {
        toast.error("data deleted Failed", { autoClose: 2000 });
        return error;
    }
});

export const getAttendance = createAsyncThunk("hrManagement/getAttendance", async () => {
    try {
        const response = getAttendanceApi();
        return response;
    } catch (error) {
        return error;
    }
});

export const getMainAttendance = createAsyncThunk("hrManagement/getMainAttendance", async () => {
    try {
        const response = getMainAttendanceApi();
        return response;
    } catch (error) {
        return error;
    }
});

export const getLeaveManageEmployee = createAsyncThunk("hrManagement/getLeaveManageEmployee", async () => {
    try {
        const response = getLeaveManageEmployeeApi();
        return response;
    } catch (error) {
        return error;
    }
});

export const getPayments = createAsyncThunk("hrManagement/getPayments", async () => {
    try {
        const response = getPaymentsApi();
        return response;
    } catch (error) {
        return error;
    }
});