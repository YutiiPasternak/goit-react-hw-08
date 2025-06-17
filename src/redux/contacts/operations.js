import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://goit-react-hw-08-nu-two.vercel.app/";

const getAuthHeader = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue("No token found");
    }

    try {
      const res = await axios.get("/contacts", getAuthHeader(token));
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    if (!token) {
      return thunkAPI.rejectWithValue("No token found");
    }

    try {
      const res = await axios.post(
        "/contacts",
        newContact,
        getAuthHeader(token)
      );
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (deleteContactId, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    if (!token) {
      return thunkAPI.rejectWithValue("No token found");
    }

    try {
      const res = await axios.delete(
        `/contacts/${deleteContactId}`,
        getAuthHeader(token)
      );
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  "contacts/updateContact",
  async (updateContact, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    if (!token) {
      return thunkAPI.rejectWithValue("No token found");
    }

    try {
      const res = await axios.patch(
        `/contacts/${updateContact.id}`,
        updateContact,
        getAuthHeader(token)
      );
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
