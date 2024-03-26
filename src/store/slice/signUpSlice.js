import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../api/userApi";




export const postUser = createAsyncThunk("auth/postUser", 
async (data) => {
  return await userApi.createUser(data);
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    dataUser: null,
    isLoading: false,
    error: "",
  },
  extraReducers: (builder) => {
    builder.addCase(postUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(postUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.dataUser = payload.data;
      
    });
    builder.addCase(postUser.rejected, (state, {payload})=>{
        state.isLoading=false;
        state.error=payload
    })
  },
});

export default authSlice.reducer;
