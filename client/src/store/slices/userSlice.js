import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getLSItem, removeLSItem, setLSItem } from "../../utils/localStorage";
import { lsProps } from "../../utils/lsProps";
import { fetchRequest, setFormError } from "../tools/fetchTools";

const initialState = {
  token: "",
  loginLoading: false,
  loginError: null,
  changePassLoading: false,
  changePassError: null,
  forgotPassLoading: false,
  forgotPassError: null,
  resetPassLoading: false,
  resetPassError: null,
};

// user
const loginUrl = "/users/login";
const changePasswordUrl = "/users/changePassword";
const forgotPasswordUrl = "/users/forgotPassword";
const resetPasswordUrl = "/users/resetPassword";

export const loginUser = createAsyncThunk(
  "user/login",
  async (payload, { rejectWithValue }) => {
    try {
      const { remember, ...reqData } = payload;
      const resData = await fetchRequest(loginUrl, "POST", reqData);

      setLSItem(lsProps.token, resData.token, !remember);
      return { token: resData.token };
    } catch (error) {
      return rejectWithValue(setFormError(error));
    }
  }
);

export const changePassword = createAsyncThunk(
  "user/changePassword",
  async (payload, { rejectWithValue }) => {
    try {
      await fetchRequest(changePasswordUrl, "POST", payload);
    } catch (error) {
      return rejectWithValue(setFormError(error));
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "user/forgotPassword",
  async (payload, { rejectWithValue }) => {
    try {
      await fetchRequest(forgotPasswordUrl, "POST", payload);
    } catch (error) {
      return rejectWithValue(setFormError(error));
    }
  }
);

export const resetPassword = createAsyncThunk(
  "user/resetPassword",
  async (payload, { rejectWithValue }) => {
    const { token, ...reqData } = payload;
    try {
      await fetchRequest(`${resetPasswordUrl}/${token}`, "PATCH", reqData);
    } catch (error) {
      return rejectWithValue(setFormError(error));
    }
  }
);

export const checkIsLoggedIn = () => (dispatch) => {
  const token = getLSItem(lsProps.token);

  if (token) dispatch(setToken(token));
};

export const logout = () => (dispatch) => {
  removeLSItem(lsProps.token);

  dispatch(setToken(""));
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setToken(state, { payload }) {
      state.token = payload;
    },
    setLoginError(state, { payload }) {
      state.loginError = payload;
    },
    setChangePassError(state, { payload }) {
      state.changePassError = payload;
    },
    setForgotPassError(state, { payload }) {
      state.forgotPassError = payload;
    },
    setResetPassError(state, { payload }) {
      state.resetPassError = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.loginLoading = false;
        state.token = payload.token;
      })
      .addCase(loginUser.pending, (state) => {
        state.loginLoading = true;
        state.loginError = null;
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.loginLoading = false;
        if (payload) state.loginError = payload;
      })
      .addCase(forgotPassword.fulfilled, (state, { payload }) => {
        state.forgotPassLoading = false;
      })
      .addCase(forgotPassword.pending, (state) => {
        state.forgotPassLoading = true;
        state.forgotPassError = null;
      })
      .addCase(forgotPassword.rejected, (state, { payload }) => {
        state.forgotPassLoading = false;
        if (payload) state.forgotPassError = payload;
      })
      .addCase(resetPassword.fulfilled, (state, { payload }) => {
        state.resetPassLoading = false;
      })
      .addCase(resetPassword.pending, (state) => {
        state.resetPassLoading = true;
        state.resetPassError = null;
      })
      .addCase(resetPassword.rejected, (state, { payload }) => {
        state.resetPassLoading = false;
        if (payload) state.resetPassError = payload;
      })
      .addCase(changePassword.fulfilled, (state, { payload }) => {
        state.changePassLoading = false;
      })
      .addCase(changePassword.pending, (state) => {
        state.changePassLoading = true;
        state.changePassError = null;
      })
      .addCase(changePassword.rejected, (state, { payload }) => {
        state.changePassLoading = false;
        if (payload) state.changePassError = payload;
      });
  },
});

export const {
  setToken,
  setLoginError,
  setChangePassError,
  setForgotPassError,
  setResetPassError,
} = userSlice.actions;

export default userSlice.reducer;
