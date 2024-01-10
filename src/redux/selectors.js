import { createSelector } from '@reduxjs/toolkit';

const getContactsState = state => state.contacts;
const getAuthState = state => state.auth;
const getFilterState = state => state.filter;

export const getContacts = createSelector(
  getContactsState,
  contacts => contacts.items
);

export const getIsLoading = createSelector(
  getContactsState,
  contacts => contacts.isLoading
);

export const getError = createSelector(
  getContactsState,
  contacts => contacts.error
);

export const getFilter = createSelector(getFilterState, filter => filter.value);

export const getIsLogged = createSelector(getAuthState, auth => auth.isLogged);

export const getEmail = createSelector(getAuthState, auth => auth.email);
