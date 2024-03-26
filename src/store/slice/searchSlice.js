import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

export const getSearch = createAsyncThunk("search/getSearch", 
   async (name) => {
  return (await axios.get(`/search.php?s=${name}`)).data.meals;
});

const searchSlice = createSlice({
  name: "search",
  initialState: {
    isLoading: false,
    dataSearch: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getSearch.pending, (state) => {
      state.isLoading = true
      
    });
    builder.addCase(getSearch.fulfilled, (state, { payload }) => {
      state.isLoading = false, 
      state.dataSearch = payload;
    });
    builder.addCase(getSearch.rejected, (state, action)=>{
        state.error=action.error;
    })

  },
});

export default searchSlice.reducer