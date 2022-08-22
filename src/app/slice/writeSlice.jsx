import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { current } from "@reduxjs/toolkit";

const initialState = {
    data : [],
    comment: '',
    star: '',
    id : '',
    isLoading: false,
    error: null,
  };

export const postCommentsThunk = createAsyncThunk(
  "commnets/post",
  async (payload, thunkAPI) => {
    console.log(payload)
    try {
      const result = await axios.post(process.env.REACT_APP_URL+`/comment/${payload.id}` , payload)
        return thunkAPI.fulfillWithValue(result.data); 
        
    } catch (error) {
      console.log(error);
    };
}
);

export const getCommentsThunk = createAsyncThunk(
  "comments/get",
  async (payload, thunkAPI) => {
    
    try {
      const response = await axios.get(process.env.REACT_APP_URL + `/comment/${payload}`);
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }
  
);

export const deleteCommentsThunk = createAsyncThunk(
  "comments/delete",
  async(payload, thunkAPI) => {
    try{
    
      const response = await axios.delete(process.env.REACT_APP_URL + `/comment/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error){
      console.log(error)
    }
  }
);

export const putCommentsThunk = createAsyncThunk(
  "comments/put",
  async(payload, thunkAPI) => {
    console.log(payload)
    try{
      const response = await axios.put(process.env.REACT_APP_URL + `/comment/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    }catch (error){
      console.log(error)
    }
  }
)


export const WriteSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    [postCommentsThunk.fulfilled]: (state, action) => {
      console.log(current(state))
    },
    [postCommentsThunk.rejected]: (state, action) => {
    },

    [getCommentsThunk.fulfilled]: (state, action) => {
      state.data = action.payload
    },
    [getCommentsThunk.rejected]: (state, action) => {
    },

    [deleteCommentsThunk.fulfilled]: (state, action) => {
      console.log(current(state))
      console.log(action.payload)
      state.data = current(state).data.filter((a) => a.commentkey !== action.payload)
    },
    [deleteCommentsThunk.rejected]: (state, action) => {
      console.log(action);
    },
    [putCommentsThunk.fulfilled]: (state, action) => {
      console.log(current(state))
      console.log(action)
    },
    [putCommentsThunk.rejected]: (state, action) => {
      console.log(current(state))
      console.log(action);
    }
  },
});

export default WriteSlice.reducer;
