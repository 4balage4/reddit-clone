// https://www.reddit.com/t/amazing.json
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// fetch request to get all posts. I wil add it to an array separately
export const fetchAmazing = createAsyncThunk(
  'amazing/fetchAmazing',
  async () => {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/reddit/europe`);
    const json = await res.json()
    return json.data.children.map(item => item.data)
  }
)


const amazingSlice = createSlice({
  name: 'amazing',
  initialState: {
    posts: [],
    status: 'idle',
    error: null
  },
  extraReducers: builder =>
    builder
  // handling the promises, pending, fulfilled, and error.
  .addCase(fetchAmazing.pending, state => {state.status = 'loading'})

      .addCase(fetchAmazing.fulfilled, (state, {payload}) => {
        state.status = 'succeeded'
        state.posts = payload;
      })
    .addCase(fetchAmazing.rejected, (state, {error}) => {
      state.status = 'failed',
      state.error = error.message
    })
    })


    export default amazingSlice.reducer;
