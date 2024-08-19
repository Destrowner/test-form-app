import { createSlice } from '@reduxjs/toolkit';

export type UserState = {
  user: {
    email: string;
    name: string;
  };
};

const initialState: UserState = {
  user: {
    email: '',
    name: '',
  },
};

export const sessionState = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setUser: (state, actions) => {
      state.user = actions.payload.user;
    },
  },
});

export const { setUser } = sessionState.actions;

export default sessionState.reducer;
