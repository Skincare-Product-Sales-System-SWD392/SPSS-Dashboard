import { createSlice } from "@reduxjs/toolkit";
import { getCountries } from "./thunk";

// Define interfaces for our types
interface Country {
  id: number;
  countryCode: string;
  countryName: string;
  brands: any | null;
}

interface CountryState {
  countries: {
    results?: Country[];
    currentPage?: number;
    pageCount?: number;
    pageSize?: number;
    rowCount?: number;
    firstRowOnPage?: number;
    lastRowOnPage?: number;
  };
  allCountries: Country[];
  loading: boolean;
  error: string | null;
}

const initialState: CountryState = {
  countries: {},
  allCountries: [],
  loading: false,
  error: null,
};

const countrySlice = createSlice({
  name: "country",
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
        state.countries = action.payload.data;
        // Append new countries to allCountries if they don't exist
        const newCountries = action.payload.data.results.filter(
          (country: Country) => !state.allCountries.some((c) => c.id === country.id)
        );
        state.allCountries = [...state.allCountries, ...newCountries];
        state.error = null;
      })
      .addCase(getCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export default countrySlice.reducer;
    