import { createSlice } from '@reduxjs/toolkit';

const initialState = { user: null, isAuthenticated: false };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSession: (state, action) => {
      state.user = action.payload.user;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem('accessToken');
    }
  }
});

export const { setSession, logout } = authSlice.actions;
export default authSlice.reducer;
