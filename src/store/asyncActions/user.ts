import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../../types/user";

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const response = await axios<IUser>(
    `https://jsonplaceholder.typicode.com/users/1`
  );
  return response.data;
});
