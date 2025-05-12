import {configureStore} from '@reduxjs/toolkit'
// import postsReducer from './features/Posts/postsSlice'
import counterReducer from './features/counterSlice'
import allReducer from './features/menuSlices/allSlice'
import amazingReducer from './features/menuSlices/amazingSlice'
import popularReducer from './features/menuSlices/popularSlice'
import activeReducer from './features/menuSlices/activeSlice'
import postDetailReducer from './features/PostDetail/postDetailSlice'


export const store = configureStore({
  reducer: {
    // posts: postsReducer
    counter: counterReducer,
    all: allReducer,
    amazing: amazingReducer,
    popular: popularReducer,
    active: activeReducer,
    postDetail: postDetailReducer,
  }
})
