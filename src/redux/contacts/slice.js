import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact, addContact } from "./operations";
import { selectContacts } from "./selectors";
import { selectNameFilter } from "../filters/selectors";
import { logOut } from "../auth/operations";

const slice = createSlice({
  name: "contact",
  initialState: {
    items: [],
    defaultItems: [],
    loading: false,
    error: null,
  },

  reducers: {
    returnContacts: (state) => {
      state.items = [...state.defaultItems];
    },
    setContacts(state, action) {
      state.items = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log("fetchContacts.pending");
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
        state.defaultItems = [...action.payload];
        console.log("fetchContacts.fulfilled");
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.loading = false;
        state.error = true;
        console.log("fetchContacts.rejected");
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        const contactId = action.payload.id;
        state.items = state.items.filter((contact) => contact.id !== contactId);
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(logOut.fulfilled, (state) => {
        state.items = [];
        state.error = null;
      });
  },
});

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    const normalizedFilter = (filter || "").toLowerCase();
    return contacts.filter((contact) =>
      (contact?.name || "").toLowerCase().includes(normalizedFilter)
    );
  }
);

export const { returnContacts, setContacts, setLoading, setError } =
  slice.actions;

export default slice.reducer;
