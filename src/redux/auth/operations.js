import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://technical-task-api.icapgroupgmbh.com/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/login/', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      alert(error.response.data.error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
