import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk("categories/getCategories", async (_, thunkAPI) => {
    try {
        
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error)
    }
})

const categoriesSlice = createSlice({
    name: "categories",
    initialState: { list: [] },
});
