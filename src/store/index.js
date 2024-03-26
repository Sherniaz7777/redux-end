import { configureStore } from "@reduxjs/toolkit";
import mealsSlice from "./slice/cartSlice"
import detailSlice from "./slice/detailSlice";
import corzinSlice from "./slice/corzinSlice";
import authSlice from "./slice/signUpSlice"
import loginSlice from "./slice/loginSlice";
import  getSearch  from "./slice/searchSlice";






const store=configureStore({
     reducer:{
        meal:mealsSlice,
        detail:detailSlice,
        cart:corzinSlice,
        auth:authSlice,
        login:loginSlice,
        search:getSearch
     }
     
})

export default store