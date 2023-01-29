
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { storageKeys } from '../constants';

interface AppSlicsState {
  loading: boolean;
  logedIn: boolean;
}

export const getLogedInStatus = createAsyncThunk("app/getStatus", async (): Promise<boolean> => {
  const token = await AsyncStorage.getItem(storageKeys.token);
  return token ? true : false
})

const appSlice = createSlice({
  name: "app",
  initialState: {
    loading: false,
    logedIn: false,
  } as AppSlicsState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getLogedInStatus.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(getLogedInStatus.fulfilled, (state, action) => {
      state.loading = false;
      state.logedIn = action.payload;
    })
    builder.addCase(getLogedInStatus.rejected, (state) => {
      state.loading = false;
    })
  }
})

export default appSlice.reducer