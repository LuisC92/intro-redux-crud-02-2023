import { createSlice } from "@reduxjs/toolkit";

export const UsersSlice = createSlice({
  name: "users",

  initialState: {
    users: [],
    status: "good",
    error: "none",
  },

  reducers: {
    //! get Users
    getUsers: {
      reducer(state, action) {
        return { ...state, users: action.payload };
      },
    },
    //! add User
    addUser:{
        reducer(state, action) {
            return { ...state, users: [...state.users, action.payload] };
        }
    },

    //! delete User
    deleteUsers: {
      reducer(state, action) {
        console.log(action.payload);
        return {
          ...state,
          users: state.users.filter((user) => user.id !== action.payload),
        };
      },
    },
  },
});

export const { getUsers, deleteUsers, addUser } = UsersSlice.actions;

export default UsersSlice.reducer;
