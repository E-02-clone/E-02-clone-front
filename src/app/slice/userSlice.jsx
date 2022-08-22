
import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import axios from 'axios';
import setAuthorizationToken from './auth';
import jwt_decode from "jwt-decode";
import { request } from '.';

const initialState = {
    user: {},
    isAuth: null
};

export const postLogin = createAsyncThunk('/login',
    async (payload, thunkAPI) => {
        try {
            const { data } = await axios.post(process.env.REACT_APP_URL + '/user/login', payload)
            const token = data.token
            localStorage.setItem("jwtToken", token);
            setAuthorizationToken(token);
            console.log(jwt_decode(token)) // 디코딩 
            return thunkAPI.fulfillWithValue(jwt_decode(token))
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const postJoin = createAsyncThunk('/join',
    async (payload, thunkAPI) => {
        try {
            const { data } = await axios.post(process.env.REACT_APP_URL + '/user/join', payload)
            console.log(data)
            return thunkAPI.fulfillWithValue(data)
            //현재 회원가입 아무 것도 없어도 작동함
        } catch (error) {

            return thunkAPI.rejectWithValue(error)
        }
    }
)


const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        currentUser: (state, action) => {
            state.user = action.payload
            state.isAuth = true
        },
        logoutUser: (state, action) => {
            state = initialState;
            localStorage.removeItem("jwtToken");
        },
    },
    extraReducers: {

    }
});

export default userSlice;
export const { currentUser, logoutUser } = userSlice.actions;
