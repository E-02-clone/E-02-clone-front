
import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = { data: { data: [], likes: [] } }

export const getSearchItems = createAsyncThunk('/searchItems',
    async (payload, thunkAPI) => {
        try {
            const { data } = await axios.get(process.env.REACT_APP_URL + `/item/search/${payload}`)
            console.log(data)
            return thunkAPI.fulfillWithValue(data)
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const getMainItems = createAsyncThunk('/',
    async (payload, thunkAPI) => {
        try {
            const { data } = await axios.get(process.env.REACT_APP_URL + '/item')
            console.log(data)

            return thunkAPI.fulfillWithValue(data)
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const getSubItems = createAsyncThunk('/subItems',
    async (payload, thunkAPI) => {
        try {
            console.log(payload)
            const { data } = await axios.get(process.env.REACT_APP_URL + `/item?page=${payload}`)
            return thunkAPI.fulfillWithValue(data)
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const setLike = createAsyncThunk('/like',
    async (payload, thunkAPI) => {
        try {
            const { data } = await axios.post(process.env.REACT_APP_URL + `/like/${payload}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`
                    },
                })

            return thunkAPI.fulfillWithValue(data.like)
        } catch (error) {
        }
    }
)

export const myLike = createAsyncThunk('/mylike',
    async (payload, thunkAPI) => {
        try {
            const { data } = await axios.get(process.env.REACT_APP_URL + "/like",
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`
                    },
                })
            return thunkAPI.fulfillWithValue(data.data)
        } catch (error) {
        }
    }
)

const mainSlice = createSlice({
    name: 'mainSlice',
    initialState,
    reducers: {

    },
    extraReducers: {
        [getMainItems.fulfilled]: (state, { payload }) => {
            console.log(payload)
            state.data = payload;
        },
        [getSearchItems.fulfilled]: (state, { payload }) => {
            state.data = payload;
        }
        ,
        [setLike.fulfilled]: (state, { payload }) => {
            console.log(payload)
            state.data.likes = payload
        },
        [myLike.fulfilled]: (state, { payload }) => {
            state.myLike = payload

        },
        [getSubItems.fulfilled]: (state, { payload }) => {
            // console.log(current(state))
            // console.log(current(state))
            // console.log(payload)
            state.data.likes = [...state.data.likes, ...payload.likes]
            state.data.data = [...state.data.data, ...payload.data]
            console.log(current(state))
            // state.data.data = [...state.data.data, ...payload];
            // console.log(state.data.data)
        }
    }
})

export default mainSlice;
