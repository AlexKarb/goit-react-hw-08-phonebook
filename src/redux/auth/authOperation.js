import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { notify } from 'helpers/notify';
import { token } from './tokenSet';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', userData);
      token.set(data.token);
      notify({
        text: `Hello, ${data.user.name}! Good Work! `,
        type: 'create',
      });
      return data;
    } catch ({ response: { statusText, status } }) {
      notify({
        text: `user with login: ${userData.email} already exists`,
        type: 'error',
      });
      return thunkAPI.rejectWithValue({ statusText, status });
    }
  }
);

export const logInUser = createAsyncThunk(
  'auth/logIn',
  async (userData, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', userData);
      token.set(data.token);
      notify({
        text: `🦄 Hello, ${data.user.name}! Good Work! `,
        type: 'create',
      });
      return data;
    } catch ({ response: { statusText, status } }) {
      notify({
        text: `login and/or password are incorrect`,
        type: 'error',
      });
      return thunkAPI.rejectWithValue({ statusText, status });
    }
  }
);

export const logOutUser = createAsyncThunk(
  'auth/logOut',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/logout');
      console.log('~ data', data);
      token.unset();
      notify({
        text: `GoodBye! We already MISS YOU! 💖 `,
        type: 'create',
      });
      return data;
    } catch ({ response: { statusText, status } }) {
      notify({
        text: `we have a problem. Try again later`,
        type: 'error',
      });
      return thunkAPI.rejectWithValue({ statusText, status });
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const persistToken = thunkAPI.getState()?.auth.token;

    if (persistToken === null) {
      return thunkAPI.rejectWithValue('no authorisation');
    }

    token.set(persistToken);

    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      // return thunkAPI.rejectWithValue();
    }
  }
);
