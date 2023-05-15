import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { auth, firestore } from "../../utils/firebase";

const login = createSlice({
  name: "Login",
  initialState: {
    user: {
      username: "",
      email: "",
      chats: [],
      requests: [],
    },
  },
  reducers: {
    updateuser: (state) => {
      return {
        ...state,
      };
    },
  },
});

export default login;
