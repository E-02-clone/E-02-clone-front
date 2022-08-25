
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import setAuthorizationToken from './auth';
import jwt_decode from "jwt-decode";


const initialState = {
    user: {},
    isAuth: null,
    check: { id: {}, nickname: {}, email: {} }
};

export const postLogin = createAsyncThunk('/login',
    async (payload, thunkAPI) => {
        try {
            const { data } = await axios.post(process.env.REACT_APP_URL + '/user/login', payload)
            console.log(data)
            const token = data.token
            console.log(data)
            localStorage.setItem("jwtToken", token);
            setAuthorizationToken(token);
            console.log(jwt_decode(token)) // 디코딩 
            return thunkAPI.fulfillWithValue(jwt_decode(token))
        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const postJoin = createAsyncThunk('/join',
    async (payload, thunkAPI) => {
        console.log(payload)
        try {
            const { data } = await axios.post(process.env.REACT_APP_URL + '/user/join', payload)
            console.log(data)
            return thunkAPI.fulfillWithValue(data)

        } catch (error) {

            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const checkDuplicationId = createAsyncThunk('/check/userId',
    async (payload, thunkAPI) => {
        console.log(payload)
        try {
            const { data } = await axios.post(process.env.REACT_APP_URL + "/user/check", payload)
            return thunkAPI.fulfillWithValue(data)
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)

export const checkDuplicationNick = createAsyncThunk('/check/nickname',
    async (payload, thunkAPI) => {
        console.log(payload)
        try {
            const { data } = await axios.post(process.env.REACT_APP_URL + "/user/check", payload)
            return thunkAPI.fulfillWithValue(data)
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)

export const checkDuplicationEmail = createAsyncThunk('/check/email',
    async (payload, thunkAPI) => {
        console.log(payload)
        try {
            const { data } = await axios.post(process.env.REACT_APP_URL + "/user/check", payload)
            return thunkAPI.fulfillWithValue(data)
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data)
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
        [postLogin.rejected]: (state, action) => {
            alert('로그인에 실패했습니다.')
            window.location.replace('/')
        },
        [postLogin.fulfilled]: (state, action) => {
            alert('환영합니다!')
            window.location.replace('/')
        },
        [postJoin.rejected]: (state, action) => {
            // alert('회원가입에 실패했습니다.')
        },
        [postJoin.fulfilled]: (state, action) => {
            state.message = action.payload.message
        },
        [checkDuplicationId.fulfilled]: (state, action) => {
            state.check = { ...state.check, id: action.payload }
        },
        [checkDuplicationId.rejected]: (state, action) => {
            state.check = { ...state.check, id: action.payload }
        },
        [checkDuplicationNick.fulfilled]: (state, action) => {
            state.check = { ...state.check, nickname: action.payload }
        },
        [checkDuplicationNick.rejected]: (state, action) => {
            state.check = { ...state.check, nickname: action.payload }
        },
        [checkDuplicationEmail.fulfilled]: (state, action) => {
            state.check = { ...state.check, email: action.payload }
        },
        [checkDuplicationEmail.rejected]: (state, action) => {
            console.log(action.payload)
            state.check = { ...state.check, email: action.payload }

        },
    }
});

export default userSlice;
export const { currentUser, logoutUser } = userSlice.actions;
