
import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {}

export const getSearchItems = createAsyncThunk('/searchItems',
    async (payload, thunkAPI) => {
        try {
            const { data } = await axios.get(process.env.REACT_APP_URL + `/item/search/${payload}`)
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

export const setLike = createAsyncThunk('/like',
    async (payload, thunkAPI) => {
        try {
            const { data } = await axios.post(process.env.REACT_APP_URL + `/like/${payload}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`
                    },
                })
            console.log(data)
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
        }
    }
})

export default mainSlice;
