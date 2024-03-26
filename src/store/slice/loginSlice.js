import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../api/userApi";


export const loginUser = createAsyncThunk(
  "login/loginUser",
  async (data) => {
    const token = (await userApi.loginUser(data)).data.access_token;
    localStorage.setItem("Token", token);
    return await userApi.getProfile(token)
  }
);

export const getUser=createAsyncThunk("login/getUser", async()=>{
  const token = localStorage.getItem("Token");
  return await userApi.getProfile(token)
})

const loginSlice = createSlice({
  name: "login",
  initialState: {
    accessToken: null,

  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
        state.accessToken = action.payload.data;
      });
      builder.addCase(getUser.fulfilled, (state, action)=>{
        state.accessToken = action.payload?.data
      })
  },
});

export default loginSlice.reducer;
