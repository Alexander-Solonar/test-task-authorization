import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
const selectorFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectorFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);
