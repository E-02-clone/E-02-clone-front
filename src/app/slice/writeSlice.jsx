import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { current } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  comment: '',
  star: '',
  id: '',
  isLoading: false,
  error: null,
};

export const postCommentsThunk = createAsyncThunk(
  "commnets/post",
  async (payload, thunkAPI) => {
    try {
      const result = await axios.post(process.env.REACT_APP_URL + `/comment/${payload.id}`, payload)
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
  async (payload, thunkAPI) => {
    try {

      const response = await axios.delete(process.env.REACT_APP_URL + `/comment/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      console.log(error)
    }
  }
);

export const putCommentsThunk = createAsyncThunk(
  "comments/put",
  async (payload, thunkAPI) => {

    try {
      const response = await axios.put(process.env.REACT_APP_URL + `/comment/${payload.commentkey}`, { star: payload.star, comment: payload.comment });
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
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

      state.data.push(action.payload.data)
      
    },
    [postCommentsThunk.rejected]: (state, action) => {
    },

    [getCommentsThunk.fulfilled]: (state, action) => {
      console.log(action.payload)
      state.data = action.payload.sort((a,b)=>b.commentkey-a.commentkey)
  
    },
    [getCommentsThunk.rejected]: (state, action) => {
    },

    [deleteCommentsThunk.fulfilled]: (state, action) => {

      state.data = current(state).data.filter((a) => a.commentkey !== action.payload)
    },
    [deleteCommentsThunk.rejected]: (state, action) => {
      console.log(action);
    },
    [putCommentsThunk.fulfilled]: (state, action) => {

      //comment , star, commentkey

    state.data = current(state).data.map((el) => el.commentkey === action.payload.commentkey ?
     {userkey:(current(state).data.filter((el) => el.commentkey === action.payload.commentkey))[0].userkey, commentkey:action.payload.commentkey , comment: action.payload.comment, star: action.payload.star } : el)
      // console.log(action.payload)
      // console.log((current(state).data.filter((el) => el.commentkey === action.payload.commentkey))[0].userkey)
      // console.log(current(state).data)
      // state.data = {...current(state).data.filter((el)=>el.commentkey===action.payload.commentkey)[0], 
      //   comment:action.payload.comment, star:action.payload.star}
      // 같은거 찾아냄
      // search = ({...action.payload, comment:action.payload.comment, star:action.payload.star})

    },
    [putCommentsThunk.rejected]: (state, action) => {

    }
  },
});

export default WriteSlice.reducer;
