import { createSlice } from "@reduxjs/toolkit";
import {
    getEmployee,
    addEmployee,
    updateEmployee,
    deleteEmployee,
    getHolidays,
    addHolidays,
    updateHolidays,
    deleteHolidays,
    getDepartments,
    addDepartments,
    updateDepartments,
    deleteDepartments,
    getEstimates,
    addEstimates,
    updateEstimates,
    deleteEstimates,
    getExpenses,
    addExpenses,
    updateExpenses,
    deleteExpenses,
    getLeaveManageHR,
    addLeaveManageHR,
    updateLeaveManageHR,
    deleteLeaveManageHR,
    getEmployeeSalary,
    addEmployeeSalary,
    updateEmployeeSalary,
    deleteEmployeeSalary,
    getAttendance,
    getMainAttendance,
    getLeaveManageEmployee,
    getPayments
} from './thunk';

export const initialState = {
    employeelist: [],
    holidayslist: [],
    departmentslist: [],
    estimateslist: [],
    expenseslist: [],
    leaveManageHRlist: [],
    employeeSalarylist: [],
    attendancelist: [],
    mainAttendancelist: [],
    leaveManageEmployeelist: [],
    paymentslist: [],
    errors: {}
};

const HRManagementSlice = createSlice({
    name: 'HRManagement',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Employee
        builder.addCase(getEmployee.fulfilled, (state: any, action: any) => {
            state.employeelist = action.payload;
        });
        builder.addCase(getEmployee.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(addEmployee.fulfilled, (state: any, action: any) => {
            state.employeelist.unshift(action.payload);
        });
        builder.addCase(addEmployee.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(updateEmployee.fulfilled, (state: any, action: any) => {
            state.employeelist = state.employeelist.map((employeelist: any) =>
                employeelist.id === action.payload.id
                    ? { ...employeelist, ...action.payload }
                    : employeelist
            );
        });
        builder.addCase(updateEmployee.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(deleteEmployee.fulfilled, (state: any, action: any) => {
            state.employeelist = state.employeelist.filter(
                (employeelist: any) => employeelist.id.toString() !== action.payload.toString()
            );
        });
        builder.addCase(deleteEmployee.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });

        // Holidays
        builder.addCase(getHolidays.fulfilled, (state: any, action: any) => {
            state.holidayslist = action.payload;
        });
        builder.addCase(getHolidays.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(addHolidays.fulfilled, (state: any, action: any) => {
            state.holidayslist.unshift(action.payload);
        });
        builder.addCase(addHolidays.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(updateHolidays.fulfilled, (state: any, action: any) => {
            state.holidayslist = state.holidayslist.map((holidayslist: any) =>
                holidayslist.id === action.payload.id
                    ? { ...holidayslist, ...action.payload }
                    : holidayslist
            );
        });
        builder.addCase(updateHolidays.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(deleteHolidays.fulfilled, (state: any, action: any) => {
            state.holidayslist = state.holidayslist.filter(
                (holidayslist: any) => holidayslist.id.toString() !== action.payload.toString()
            );
        });
        builder.addCase(deleteHolidays.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });

        // Departments
        builder.addCase(getDepartments.fulfilled, (state: any, action: any) => {
            state.departmentslist = action.payload;
        });
        builder.addCase(getDepartments.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(addDepartments.fulfilled, (state: any, action: any) => {
            state.departmentslist.unshift(action.payload);
        });
        builder.addCase(addDepartments.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(updateDepartments.fulfilled, (state: any, action: any) => {
            state.departmentslist = state.departmentslist.map((departmentslist: any) =>
                departmentslist.id === action.payload.id
                    ? { ...departmentslist, ...action.payload }
                    : departmentslist
            );
        });
        builder.addCase(updateDepartments.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(deleteDepartments.fulfilled, (state: any, action: any) => {
            state.departmentslist = state.departmentslist.filter(
                (departmentslist: any) => departmentslist.id.toString() !== action.payload.toString()
            );
        });
        builder.addCase(deleteDepartments.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });

        // Estimates
        builder.addCase(getEstimates.fulfilled, (state: any, action: any) => {
            state.estimateslist = action.payload;
        });
        builder.addCase(getEstimates.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(addEstimates.fulfilled, (state: any, action: any) => {
            state.estimateslist.unshift(action.payload);
        });
        builder.addCase(addEstimates.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(updateEstimates.fulfilled, (state: any, action: any) => {
            state.estimateslist = state.estimateslist.map((estimateslist: any) =>
                estimateslist.id === action.payload.id
                    ? { ...estimateslist, ...action.payload }
                    : estimateslist
            );
        });
        builder.addCase(updateEstimates.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(deleteEstimates.fulfilled, (state: any, action: any) => {
            state.estimateslist = state.estimateslist.filter(
                (estimateslist: any) => estimateslist.id.toString() !== action.payload.toString()
            );
        });
        builder.addCase(deleteEstimates.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });

        // Expenses
        builder.addCase(getExpenses.fulfilled, (state: any, action: any) => {
            state.expenseslist = action.payload;
        });
        builder.addCase(getExpenses.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(addExpenses.fulfilled, (state: any, action: any) => {
            state.expenseslist.unshift(action.payload);
        });
        builder.addCase(addExpenses.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(updateExpenses.fulfilled, (state: any, action: any) => {
            state.expenseslist = state.expenseslist.map((expenseslist: any) =>
                expenseslist.id === action.payload.id
                    ? { ...expenseslist, ...action.payload }
                    : expenseslist
            );
        });
        builder.addCase(updateExpenses.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(deleteExpenses.fulfilled, (state: any, action: any) => {
            state.expenseslist = state.expenseslist.filter(
                (expenseslist: any) => expenseslist.id.toString() !== action.payload.toString()
            );
        });
        builder.addCase(deleteExpenses.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });

        // Leave Manage HR
        builder.addCase(getLeaveManageHR.fulfilled, (state: any, action: any) => {
            state.leaveManageHRlist = action.payload;
        });
        builder.addCase(getLeaveManageHR.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(addLeaveManageHR.fulfilled, (state: any, action: any) => {
            state.leaveManageHRlist.unshift(action.payload);
        });
        builder.addCase(addLeaveManageHR.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(updateLeaveManageHR.fulfilled, (state: any, action: any) => {
            state.leaveManageHRlist = state.leaveManageHRlist.map((leaveManageHRlist: any) =>
                leaveManageHRlist.id === action.payload.id
                    ? { ...leaveManageHRlist, ...action.payload }
                    : leaveManageHRlist
            );
        });
        builder.addCase(updateLeaveManageHR.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(deleteLeaveManageHR.fulfilled, (state: any, action: any) => {
            state.leaveManageHRlist = state.leaveManageHRlist.filter(
                (leaveManageHRlist: any) => leaveManageHRlist.id.toString() !== action.payload.toString()
            );
        });
        builder.addCase(deleteLeaveManageHR.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });

        // Employee Salary
        builder.addCase(getEmployeeSalary.fulfilled, (state: any, action: any) => {
            state.employeeSalarylist = action.payload;
        });
        builder.addCase(getEmployeeSalary.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(addEmployeeSalary.fulfilled, (state: any, action: any) => {
            state.employeeSalarylist.unshift(action.payload);
        });
        builder.addCase(addEmployeeSalary.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(updateEmployeeSalary.fulfilled, (state: any, action: any) => {
            state.employeeSalarylist = state.employeeSalarylist.map((employeeSalarylist: any) =>
                employeeSalarylist.id === action.payload.id
                    ? { ...employeeSalarylist, ...action.payload }
                    : employeeSalarylist
            );
        });
        builder.addCase(updateEmployeeSalary.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(deleteEmployeeSalary.fulfilled, (state: any, action: any) => {
            state.employeeSalarylist = state.employeeSalarylist.filter(
                (employeeSalarylist: any) => employeeSalarylist.id.toString() !== action.payload.toString()
            );
        });
        builder.addCase(deleteEmployeeSalary.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });

        // Attendance
        // Attendance (HR)
        builder.addCase(getAttendance.fulfilled, (state: any, action: any) => {
            state.attendancelist = action.payload;
        });
        builder.addCase(getAttendance.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });

        // Main Attendance
        builder.addCase(getMainAttendance.fulfilled, (state: any, action: any) => {
            state.mainAttendancelist = action.payload;
        });
        builder.addCase(getMainAttendance.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });

        // Leave Manage (Employee)
        builder.addCase(getLeaveManageEmployee.fulfilled, (state: any, action: any) => {
            state.leaveManageEmployeelist = action.payload;
        });
        builder.addCase(getLeaveManageEmployee.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });

        // Payments
        builder.addCase(getPayments.fulfilled, (state: any, action: any) => {
            state.paymentslist = action.payload;
        });
        builder.addCase(getPayments.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
    }
});

export default HRManagementSlice.reducer;