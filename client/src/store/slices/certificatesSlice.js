import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { createFormData, fetchRequest } from "../tools/fetchTools";
import { ADMIN_CERTIFICATES_PAGE_SIZE } from "../../constants/pagination";

const initialState = {
  data: null,
  getLoading: false,
  getError: null,
  resultCount: 0,
};

const getCertificatesUrl = "/certificates";

export const getCertificatesList = createAsyncThunk(
  "certificates/getCertificatesList",
  async (page, { rejectWithValue }) => {
    try {
      const resData = await fetchRequest(
        `${getCertificatesUrl}?page=${
          page || 1
        }&pageSize=${ADMIN_CERTIFICATES_PAGE_SIZE}`
      );

      return {
        data: resData.data,
        resultCount: resData.resultCount,
      };
    } catch (error) {
      console.error(error);

      return rejectWithValue("Error");
    }
  }
);

const createCertificatesUrl = "/certificates/create";
export const addCertificate = createAsyncThunk(
  "certificates/addCertificate",
  async (image, { rejectWithValue }) => {
    try {
      const resData = await fetchRequest(
        createCertificatesUrl,
        "POST",
        createFormData({
          image,
        })
      );

      return resData.data;
    } catch (error) {
      console.error(error);

      return rejectWithValue(error);
    }
  }
);

const deleteCertificatesUrl = "/certificates/";
export const deleteCertificates = async (id) => {
  try {
    const resData = await fetchRequest(deleteCertificatesUrl + id, "DELETE");
    return resData.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const certificatesSlice = createSlice({
  name: "certificatesSlice",
  initialState,
  reducers: {
    setCreateError(state, { payload }) {
      state.createError = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCertificatesList.pending, (state) => {
        state.getLoading = true;
        state.getError = null;
      })
      .addCase(getCertificatesList.fulfilled, (state, { payload }) => {
        state.data = payload.data;
        state.resultCount = payload.resultCount;
        state.getLoading = false;
      })
      .addCase(getCertificatesList.rejected, (state, { payload }) => {
        state.getLoading = false;
        if (payload) state.getError = payload;
      });
  },
});

export const { setCreateError } = certificatesSlice.actions;

export default certificatesSlice.reducer;
