import { createSlice } from '@reduxjs/toolkit';
import { editContact, fetchContacts } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const handleFulfilledFetch = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

const handleFulfilledEdit = (state, action) => {
  state.isLoading = false;
  state.error = null;

  const updatedContact = action.payload;
  if (updatedContact && updatedContact.id) {
    const updatedIndex = state.items.findIndex(
      contact => contact.id === updatedContact.id
    );
    if (updatedIndex !== -1) {
      state.items = [
        ...state.items.slice(0, updatedIndex),
        updatedContact,
        ...state.items.slice(updatedIndex + 1),
      ];
    }
  }
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, handleFulfilledFetch)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(editContact.pending, handlePending)
      .addCase(editContact.fulfilled, handleFulfilledEdit)
      .addCase(editContact.rejected, handleRejected);
  },
});

export const contactsReduser = contactsSlice.reducer;
