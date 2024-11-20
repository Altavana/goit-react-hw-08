import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filters/selectors";
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) =>
    contacts.filter((contactItem) => {
      return (
        contactItem.name.toLowerCase().includes(filter.toLowerCase().trim()) ||
        contactItem.number.replace(/\D/g, "").includes(filter.trim())
      );
    })
);
