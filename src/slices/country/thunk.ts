import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getAllCountries } from "../../helpers/fakebackend_helper";

export const getCountries = createAsyncThunk(
  "country/getCountries",
  async () => {
    try {
      const response = await getAllCountries();
      return response;
    } catch (error: any) {
      if (error.response?.data?.data) {
        toast.error(error.response.data.data);
      } else {
        toast.error("Failed to fetch countries");
      }
      throw error;
    }
  }
); 