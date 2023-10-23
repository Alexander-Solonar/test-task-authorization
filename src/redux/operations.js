import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://technical-task-api.icapgroupgmbh.com/api';

export const fetchContacts = createAsyncThunk(
  '/table/',
  async (offset, thunkAPI) => {
    try {
      const response = await axios.get(`/table/?limit=10&offset=${offset}`);
      return response.data.results;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async (updatedContact, thunkAPI) => {
    try {
      const response = await axios.put(
        `/table/${updatedContact.id}/`,
        updatedContact
      );
      return response.data.results;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
