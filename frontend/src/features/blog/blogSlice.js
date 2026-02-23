import { createSlice } from '@reduxjs/toolkit';

const blogSlice = createSlice({
  name: 'blog',
  initialState: { items: [], loading: false },
  reducers: {
    setBlogs: (state, action) => {
      state.items = action.payload;
    },
    setBlogLoading: (state, action) => {
      state.loading = action.payload;
    }
  }
});

export const { setBlogs, setBlogLoading } = blogSlice.actions;
export default blogSlice.reducer;
