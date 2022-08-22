
import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {}


export const getMainItems = createAsyncThunk('/home',
    async (payload, thunkAPI) => {
        try {
            const { data } = await axios.get(process.env.REACT_APP_URL + '/item')
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

const mainSlice = createSlice({
    name: 'mainSlice',
    initialState,
    reducers: {

    },
    extraReducers: {
        [getMainItems.fulfilled]: (state, { payload }) => {
            state.data = payload;
        },
        [setLike.fulfilled]: (state, action) => {
            console.log(current(state))
            state.data.likes = action.payload
        }
    }
})

export default mainSlice;
