import {createSlice} from '@reduxjs/toolkit'

const activeSlice = createSlice({
  name: 'active',
  initialState: 'all',
  reducers: {
    setActive(_, action) {
      return action.payload
    }
  }
})

export const { setActive} = activeSlice.actions
export default activeSlice.reducer
