import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
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

const mainSlice = createSlice({
    name: 'mainSlice',
    initialState,
    reducers: {

    },
    extraReducers: {
        [getMainItems.fulfilled]: (state, { payload }) => {
            state.data = payload;
        }
    }
})

export default mainSlice;
