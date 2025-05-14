import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// managing the state of the

//  creating a fetch function ---> first with a pre defined parameter
// creating a slice
// dispatching
export const fetchSearch = createAsyncThunk(
  "search/fetchSearch",
  async (params) => {
    const res = await fetch(
     `https://www.reddit.com/search/.json?q=${params}`
    );
    const json = await res.json();
    return json.data.children.map(item => item.data)
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
export default searchSlice.reducer
