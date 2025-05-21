import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';


// here I create an active post. Which is chosen
// I get an id
// i should get

export const fetchPostDetails = createAsyncThunk(
  'postDetail/fetchPostDetails',
  async ({sub ,postId}, thunkAPI) => {
     const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/reddit/${sub}/${postId}`);
    if (!res.ok) {
      return thunkAPI.rejectWithValue(await res.text());
    }
    const data = await res.json()
    return data
  }
)

const postDetailSlice = createSlice({
  name: 'postDetail',
  initialState: {
    post: [],
    comments: [],
    status: 'idle',
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchPostDetails.pending, (state) => {
          state.status = 'loading';
          state.error  = null;
        })
      .addCase(fetchPostDetails.fulfilled, (state, {payload}) => {
        state.error = null;
        state.status = 'succeeded'
        //state.post = payload[0].data.children[0].data
        state.post = payload[0].data.children[0].data
        // the data comes and I just get the parts I need. This way I will get an array of the comments
        state.comments = payload[1].data.children
      })
      .addCase(fetchPostDetails.rejected, (state, {error}) => {
        state.status = 'failed';
        state.error = error.message;
      })
})


export default postDetailSlice.reducer
