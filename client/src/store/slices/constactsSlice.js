import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchRequest, setFormError } from "../tools/fetchTools";

const initialState = {
  contactError: null,
  bookError: null,
};

const sendContactMailUrl = "/contact";
export const sendContactMail = createAsyncThunk(
  "constacts/sendContactMail",
  async (
    { fullName, contactNumber, needAssistanceAs, email, telegramLink, message },
    { rejectWithValue }
  ) => {
    try {
      const resData = await fetchRequest(sendContactMailUrl, "POST", {
        fullName,
        contactNumber,
        needAssistanceAs,
        email,
        telegramLink,
        message,
      });

      return resData.data;
    } catch (error) {
      console.error(error);

      return rejectWithValue(setFormError(error));
    }
  }
);

const sendBookUrl = "/contact/book";
export const sendBook = createAsyncThunk(
  "constacts/sendBook",
  async ({ fullName, contactNumber, services, email }, { rejectWithValue }) => {
    try {
      const resData = await fetchRequest(sendBookUrl, "POST", {
        fullName,
        contactNumber,
        services,
        email,
      });

      return resData.data;
    } catch (error) {
      console.error(error);

      return rejectWithValue(setFormError(error));
    }
  }
);

export const constactsSlice = createSlice({
  name: "constactsSlice",
  initialState,
  reducers: {
    setContactError(state, { payload }) {
      state.contactError = payload;
    },
    setBookError(state, { payload }) {
      state.contactError = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sendContactMail.rejected, (state, { payload }) => {
      if (payload) state.contactError = payload;
    });
    builder.addCase(sendBook.rejected, (state, { payload }) => {
      if (payload) state.bookError = payload;
    });
  },
});

export const { setContactError, setBookError } = constactsSlice.actions;

export default constactsSlice.reducer;
