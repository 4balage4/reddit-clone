import {configureStore} from '@reduxjs/toolkit'

import allReducer from './features/menuSlices/allSlice'
import amazingReducer from './features/menuSlices/amazingSlice'
import popularReducer from './features/menuSlices/popularSlice'
import activeReducer from './features/menuSlices/activeSlice'
import postDetailReducer from './features/PostDetail/postDetailSlice'
import searchReducer from './features/menuSlices/searchSlice'


const rootReducer = {
    all: allReducer,
    amazing: amazingReducer,
    popular: popularReducer,
    active: activeReducer,
    postDetail: postDetailReducer,
    search: searchReducer,
}

export const store = configureStore({
  reducer: rootReducer,
})


export {rootReducer}
