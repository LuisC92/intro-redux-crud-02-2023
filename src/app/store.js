import { configureStore } from "@reduxjs/toolkit";
import UsersSlice from "../reducers/UsersSlice";

export const store = configureStore({
    reducer:{
        usersList:  UsersSlice
    }
})