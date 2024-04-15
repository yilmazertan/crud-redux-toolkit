import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "ca428a0d-44af-4567-b5e1-11da9bdb9508",
    name: "Hasan",
    email: "hasan@gmail.com",
  },
  {
    id: "ca428a0d-44af-4567-b5e1-11da9bdb9509",
    name: "Hüseyin",
    email: "hüseyin@gmail.comss",
  },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
      //  console.log(action);
      //state.map((user) => console.log(user));
    },
    editUser: (state, action) => {
      const { id, name, email } = action.payload;

      const existinUser = state.find((user) => user.id === id);
      console.log(existinUser);
      if (existinUser) {
        existinUser.name = name;
        existinUser.email = email;
      }
    },
    deleteUser(state, action) {
      const { id } = action.payload;

      const existingUsers = state.find((user) => user.id === id);

      if (existingUsers) {
        return state.filter((user) => user.id !== id);
      }
    },
  },
});

export const { addUser, editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
