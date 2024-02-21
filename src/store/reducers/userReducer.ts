import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser, InitialState } from "../../types/user";
import { fetchUser } from "../asyncActions/user";

const initialState: InitialState = {
  user: null,
  loading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserUserSlice(state, action: PayloadAction<IUser | null>) {
      state.user = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
  },
});

export default userSlice.reducer;
