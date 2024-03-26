import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

export const getDetail = createAsyncThunk("detail/getDetail", async (id) => {
  return (await axios.get(`/lookup.php?i=${id}`)).data.meals[0];
});

const detailSlice = createSlice({
  name: "detail",
  initialState: {
    dataDetail: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getDetail.fulfilled, (state, { payload }) => {
      state.dataDetail = payload;
    });
  },
});

export default detailSlice.reducer;
