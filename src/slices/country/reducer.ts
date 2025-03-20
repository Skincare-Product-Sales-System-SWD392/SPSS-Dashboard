import { createSlice } from "@reduxjs/toolkit";
import { getCountries } from "./thunk";

// Define interfaces for our types
interface Country {
  id: number;
  countryCode: string;
  countryName: string;
}

interface CountryState {
  countries: {
    data?: Country[];
    success?: boolean;
    message?: string;
  } | null;
  loading: boolean;
  error: string | null;
}

export const initialState: CountryState = {
  countries: null,
  loading: false,
  error: null,
};

const countrySlice = createSlice({
  name: "Country",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCountries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.countries = action.payload;
      })
      .addCase(getCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch countries";
      });
  },
});

export default countrySlice.reducer;
    