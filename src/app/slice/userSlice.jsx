import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import setAuthorizationToken from "./auth";
import jwt_decode from "jwt-decode";
import { request } from ".";

const initialState = {
  user: {},
  isAuth: null,
};

export const postLogin = createAsyncThunk(
  "/login",
  async (payload, thunkAPI) => {
    try {
      // const { data } = await axios.get(process.env.REACT_APP_URL + '/login')
      const { data } = await axios.post(
        process.env.REACT_APP_URL + "/user/login",
        payload
      );
      const token = data.token;
      localStorage.setItem("jwtToken", token);
      setAuthorizationToken(token);
      console.log(jwt_decode(token)); // 디코딩
      return thunkAPI.fulfillWithValue(jwt_decode(token));
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    currentUser: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
    },
  },
  extraReducers: {},
});

export default userSlice;
export const { currentUser } = userSlice.actions;
