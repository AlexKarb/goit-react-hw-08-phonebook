import { createSlice } from '@reduxjs/toolkit';
import {
  logInUser,
  logOutUser,
  refreshUser,
  registerUser,
} from './authOperation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: null,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    //registerUser
    [registerUser.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [registerUser.rejected](state, { payload }) {
      state.error = payload;
    },
    //logInUser
    [logInUser.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logInUser.rejected](state, { payload }) {
      state.error = payload;
    },
    //logOutUser
    [logOutUser.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [logOutUser.rejected](state, { payload }) {
      state.error = payload;
    },
    //refreshUser
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, { payload }) {
      state.user = { ...payload };
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state, { payload }) {
      state.isRefreshing = false;
      state.error = payload;
    },
  },
});
