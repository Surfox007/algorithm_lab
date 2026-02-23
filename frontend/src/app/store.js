import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import blogReducer from '../features/blog/blogSlice';
import uiReducer from '../features/ui/uiSlice';

export const store = configureStore({
  reducer: { auth: authReducer, blog: blogReducer, ui: uiReducer }
});
