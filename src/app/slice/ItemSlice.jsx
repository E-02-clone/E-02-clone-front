import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { current } from "@reduxjs/toolkit";

export const _PostItem = createAsyncThunk(
  "item/post",
  async (value, thunkAPI) => {
    try {
      const result = await axios.post(`api`, value[1].item, {
        headers: {
          Authorization: `Bearer ${value[0].token}`,
        },
      });
      return thunkAPI.fulfillWithValue(result.data);
    } catch (error) {
      console.log(error);
    }
  }
);

export const _GetItems = createAsyncThunk(
  "item/get",
  async (value, thunkAPI) => {
    try {
      const response = await axios.get("api");
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  Items: [],
  isLoading: false,
  error: null,
};
export const ItemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {},
  extraReducers: {
    [_PostItem.fulfilled]: (state, action) => {
      console.log(current(state), action);
    },
    [_PostItem.rejected]: (state, action) => {
      console.log(action);
    },

    [_GetItems.fulfilled]: (state, action) => {
      console.log(current(state), action);
    },
    [_GetItems.rejected]: (state, action) => {
      console.log(action);
    },
  },
});

export default ItemSlice.reducer;
