import { createSlice } from '@reduxjs/toolkit';
import { login } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const handleLogin = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(login.fulfilled, handleLogin);
  },
});

export const authReducer = authSlice.reducer;
