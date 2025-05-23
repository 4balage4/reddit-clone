import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// const isLocal = import.meta.env.DEV;

// const BASE_URL = isLocal
//   ? 'https://www.reddit.com/search.json'
//   : '/api/search';
// managing the state of the

//  creating a fetch function ---> first with a pre defined parameter
// creating a slice
// dispatching
export const fetchSearch = createAsyncThunk(
  "search/fetchSearch",
  async (params) => {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/reddit/search?q=${encodeURIComponent(params)}`);
   if (!res.ok) {
      throw new Error(`Search failed with status ${res.status}`);
    }
    const json = await res.json();
    const data =json.data.children.map((item) => item.data);

    return data
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    posts: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearch.pending, (state) => {
        state.status = "loading";
      })

      .addCase(fetchSearch.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.posts = payload;
      })

      .addCase(fetchSearch.rejected, (state, { error }) => {
        state.status = "failed";
        state.error = error.message;
      });
  },
});

// export { fetchSerachParams } - this is exported
export default searchSlice.reducer;
