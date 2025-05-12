import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './components/Layout/Layout'
import Posts from './features/Posts/Posts'
import PostDetail from './features/PostDetail/PostDetail'
import {store} from './store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Posts/>}/>
          <Route path="/:name" element={<PostDetail/>}/>
          {/* <Route path='/' element= */}
        </Route>
      </Routes>

    </BrowserRouter>
    </Provider>
  </StrictMode>
)
