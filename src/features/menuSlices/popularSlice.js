// https://www.reddit.com/r/popular.json
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPopular = createAsyncThunk(
  'popular/fetchPopular',
  async () => {
    const res = await fetch('https://www.reddit.com/r/pics.json')
    const json = await res.json()
    return json.data.children.map(item => item.data)
  }
)

const popularSlice = createSlice({
  name: 'popular',
  initialState: {
    posts: [],
    status: 'idle',
    error: null
  },
  extraReducers: builder =>
    builder
      .addCase(fetchPopular.pending, state => { state.status = 'loading'})

        .addCase(fetchPopular.fulfilled, (state, {payload}) => {
            state.status = 'succeeded'
            state.posts = payload;
        })

        .addCase(fetchPopular.rejected, (state, {error}) => {
          state.status = 'failed'
          state.error = error.message
        })
})


export default popularSlice.reducer;
