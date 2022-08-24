import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { current } from "@reduxjs/toolkit";

// 예비용
export const _PostItem = createAsyncThunk(
  "item/post",
  async (value, thunkAPI) => {
    try {
      const result = await axios.post(
        process.env.REACT_APP_URL + "/item",
        value[1],
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          },
        }
      );
      return thunkAPI.fulfillWithValue(result.data);
    } catch (error) {
      return error;
    }
  }
);

export const _WriteDone = createAsyncThunk(
  "item/tenposts",
  async (value, thunkAPI) => {
    try {
      console.log(value);
      const result = await axios.post(
        process.env.REACT_APP_URL + "/item",
        value[1],
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          },
        }
      );
      return thunkAPI.fulfillWithValue(result.data);
    } catch (error) {
      return error;
    }
  }
);

export const _GetItems = createAsyncThunk(
  "item/get",
  async (value, thunkAPI) => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_URL + `/item/${value}`
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return error;
    }
  }
);

//예비용
export const _PutItem = createAsyncThunk(
  "item/put",
  async (value, thunkAPI) => {
    try {
      const response = await axios.put(
        process.env.REACT_APP_URL + `/item/${value[2].key}`,
        value[1],
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          },
        }
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return error;
    }
  }
);

export const _EditItem = createAsyncThunk(
  "item/edit",
  async (value, thunkAPI) => {
    try {
      const response = await axios.put(
        process.env.REACT_APP_URL + `/item/${value[2].key}`,
        value[1],
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          },
        }
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return error;
    }
  }
);

export const _DeleteItem = createAsyncThunk(
  "item/delete",
  async (value, thunkAPI) => {
    console.log(value);
    try {
      const response = await axios.delete(
        process.env.REACT_APP_URL + `/item/${value[0].key}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          },
        }
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return error;
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
    // 예비용
    [_PostItem.fulfilled]: (state, action) => {
      state.Items.push(action.payload.data);
    },
    [_PostItem.rejected]: (state, action) => {
      console.log(action);
    },

    [_WriteDone.fulfilled]: (state, action) => {
      state.Items.push(action.payload.data);
    },
    [_WriteDone.rejected]: (state, action) => {
      console.log(action);
    },

    [_GetItems.fulfilled]: (state, action) => {
      state.Items = action.payload.data;
    },
    [_GetItems.rejected]: (state, action) => {
      console.log(action);
    },

    [_EditItem.fulfilled]: (state, action) => {
      console.log(current(state));
      console.log(action);
    },
    [_EditItem.rejected]: (state, action) => {
      console.log(action);
    },

    [_PutItem.fulfilled]: (state, action) => {
      console.log(current(state));
      console.log(action);
    },
    [_PutItem.rejected]: (state, action) => {
      console.log(action);
    },

    [_DeleteItem.fulfilled]: (state, aciton) => {
      console.log(current(state), aciton.payload);
    },
    [_DeleteItem.rejected]: (state, aciton) => {
      console.log(aciton);
    },
  },
});

export default ItemSlice.reducer;
