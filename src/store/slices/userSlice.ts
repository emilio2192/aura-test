import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  email: string;
  name: string;
  id: number | null;
};

const initialState: UserState = {
  id: null,
  name: "",
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<Partial<UserState>>) {
      const { id, name, email } = action.payload;
      if (id !== undefined) state.id = id;
      if (name !== undefined) state.name = name;
      if (email !== undefined) state.email = email;
    },
  },

});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
