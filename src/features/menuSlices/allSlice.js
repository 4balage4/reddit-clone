// https://www.reddit.com/r/all.json
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// fetch request to get all posts. I wil add it to an array separately
export const fetchAll = createAsyncThunk("all/fetchAll", async () => {
  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/reddit/all`);
  const json = await res.json();
  return json.data.children.map((item) => item.data);
});

const allSlice = createSlice({
  name: "all",
  initialState: {
    posts: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) =>
    builder
      // handling the promises, pending, fulfilled, and error.
      .addCase(fetchAll.pending, (state) => {
        state.status = "loading";
      })

      .addCase(fetchAll.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.posts = payload;
      })
      .addCase(fetchAll.rejected, (state, { error }) => {
        state.status = "failed";
        state.error = error.message;
      }),
});

export default allSlice.reducer;
