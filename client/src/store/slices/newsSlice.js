import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  createFormData,
  fetchRequest,
  setFormError,
} from "../tools/fetchTools";
import { ADMIN_NEWS_PAGE_SIZE } from "../../constants/pagination";

const initialState = {
  data: null,
  getLoading: false,
  getError: null,
  resultCount: 0,
  createError: null,
  editError: null,
};

const getNewsUrl = "/news";

export const getNewsList = createAsyncThunk(
  "news/getNewsList",
  async (page, { rejectWithValue }) => {
    try {
      const resData = await fetchRequest(
        `${getNewsUrl}?page=${page || 1}&pageSize=${ADMIN_NEWS_PAGE_SIZE}`
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

const createNewsUrl = "/news/create";
export const addNews = createAsyncThunk(
  "news/addNews",
  async (
    { title, description, image, date },
    { rejectWithValue, getState }
  ) => {
    try {
      const resData = await fetchRequest(
        createNewsUrl,
        "POST",
        createFormData({
          title,
          description,
          image,
          date,
        })
      );
      //   {
      //     "status": "success",
      //     "data": {
      //         "activeDayNews": false,
      //         "id": 7,
      //         "title": "In et voluptatum qui",
      //         "description": "Nam eos minima enim",
      //         "date": "1982-10-29T00:00:00.000Z",
      //         "image": "/news/resized-1750070281060-239.jpeg"
      //     }
      // }

      return resData.data;
    } catch (error) {
      console.error(error);

      return rejectWithValue(setFormError(error));
    }
  }
);

const editNewsUrl = "/news/";
export const editNews = createAsyncThunk(
  "news/editNews",
  async ({ title, description, image, date, id }, { rejectWithValue }) => {
    try {
      const resData = await fetchRequest(
        editNewsUrl + id,
        "PATCH",
        createFormData({
          title,
          description,
          image,
          date,
        })
      );
      //   {
      //     "status": "success",
      //     "data": {
      //         "activeDayNews": false,
      //         "id": 7,
      //         "title": "In et voluptatum qui",
      //         "description": "Nam eos minima enim",
      //         "date": "1982-10-29T00:00:00.000Z",
      //         "image": "/news/resized-1750070281060-239.jpeg"
      //     }
      // }

      return resData.data;
    } catch (error) {
      console.error(error);

      return rejectWithValue(setFormError(error));
    }
  }
);

const deleteNewsUrl = "/news/";
export const deleteNews = async (id) => {
  try {
    const resData = await fetchRequest(deleteNewsUrl + id, "DELETE");
    return resData.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const updateActiveDayNewsUrl = "/news/update/dayNews/";
export const updateActiveDayNews = createAsyncThunk(
  "news/updateActiveDayNews",
  async (id, { rejectWithValue }) => {
    try {
      const resData = await fetchRequest(updateActiveDayNewsUrl + id, "PUT");
      return resData.data;
      //   {
      //     "status": "success",
      //     "data": {
      //         "id": 11,
      //         "title": "Debitis aute et iste",
      //         "description": "Sequi sit et commodi",
      //         "image": "/news/resized-1750170408356-475.jpeg",
      //         "date": "2001-08-09T00:00:00.000Z",
      //         "activeDayNews": true
      //     }
      // }
    } catch (error) {
      console.error(error);
      return rejectWithValue(error);
    }
  }
);

const getActiveDayNewsUrl = "/news/dayNews";
export const getActiveDayNews = async () => {
  try {
    const resData = await fetchRequest(getActiveDayNewsUrl);
    return resData.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const newsSlice = createSlice({
  name: "newsSlice",
  initialState,
  reducers: {
    setCreateError(state, { payload }) {
      state.createError = payload;
    },
    setEditError(state, { payload }) {
      state.editError = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNewsList.pending, (state) => {
        state.getLoading = true;
        state.getError = null;
      })
      .addCase(getNewsList.fulfilled, (state, { payload }) => {
        state.data = payload.data;
        state.resultCount = payload.resultCount;
        state.getLoading = false;
      })
      .addCase(getNewsList.rejected, (state, { payload }) => {
        state.getLoading = false;
        if (payload) state.getError = payload;
      })
      .addCase(addNews.rejected, (state, { payload }) => {
        if (payload) state.createError = payload;
      })
      .addCase(updateActiveDayNews.fulfilled, (state, { payload }) => {
        state.data = state.data.map((item) => {
          return {
            ...item,
            activeDayNews:
              payload.activeDayNews && payload.id === item.id ? true : false,
          };
        });
      })
      .addCase(editNews.rejected, (state, { payload }) => {
        if (payload) state.editError = payload;
      });
  },
});

export const { setCreateError, setEditError } = newsSlice.actions;

export default newsSlice.reducer;
