import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

export const getMeal = createAsyncThunk("meals/getMeal", async () => {
  return (await axios.get("/search.php?f=b")).data.meals;
});

const mealsSlice = createSlice({
  name: "meals",
  initialState: {
    isLoading: false,
    dataMeals: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getMeal.pending, (state) => {
      state.isLoading = true
      
    });
    builder.addCase(getMeal.fulfilled, (state, { payload }) => {
      state.isLoading = false, 
      state.dataMeals = payload;
    });
    builder.addCase(getMeal.rejected, (state, action)=>{
        state.error=action.error;
    })

  },
});

export default mealsSlice.reducer
