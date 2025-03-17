import { createSlice } from "@reduxjs/toolkit";
import { getAllRoles, addRole, updateRole, deleteRole } from "./thunk";

interface RoleState {
  loading: boolean;
  error: string | null;
  roles: {
    data: {
      items: any[];
      totalCount: number;
      pageNumber: number;
      pageSize: number;
      totalPages: number;
    }
  };
}

export const initialState: RoleState = {
  loading: false,
  error: null,
  roles: {
    data: {
      items: [],
      totalCount: 0,
      pageNumber: 1,
      pageSize: 10,
      totalPages: 1
    }
  },
};

const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get Roles
    builder.addCase(getAllRoles.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAllRoles.fulfilled, (state, action) => {
      state.loading = false;
      state.roles = {
        data: action.payload.data
      };
      state.error = null;
    });
    builder.addCase(getAllRoles.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Add Role
    builder.addCase(addRole.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addRole.fulfilled, (state, action) => {
      state.loading = false;
      state.roles.data.items.unshift(action.payload.data);
      state.error = null;
    });
    builder.addCase(addRole.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Update Role
    builder.addCase(updateRole.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateRole.fulfilled, (state, action) => {
      state.loading = false;
      state.roles.data.items = state.roles.data.items.map(role =>
        role.roleId === action.payload.data.roleId ? action.payload.data : role
      );
      state.error = null;
    });
    builder.addCase(updateRole.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Delete Role
    builder.addCase(deleteRole.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteRole.fulfilled, (state, action) => {
      state.loading = false;
      state.roles.data.items = state.roles.data.items.filter(
        role => role.roleId !== action.payload.data
      );
      state.error = null;
    });
    builder.addCase(deleteRole.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });
  },
});

export default roleSlice.reducer;
