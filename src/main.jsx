import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Layout from "./components/Layout/Layout";
import Posts from "./features/Posts/Posts";
import PostDetail from "./features/PostDetail/PostDetail";
import { store } from "./store";
import ScrollToTop from './utils/ScrollToTop'
import ToastProvider from './components/ToastNotification/ToastProvider'
import ErrorPage from './features/ErrorPages/ErrorPage'
import ErrorPost from './features/ErrorPages/ErrorPost'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ToastProvider>
      <BrowserRouter>
        <ScrollToTop/>

        <Routes>
          <Route element={<Layout />}>
          {/* setup for the main page to navigate to all */}
            <Route path="/" element={<Navigate to="all" />} />


            <Route path="/all" element={<Posts />} />
            <Route path="/all/:id" element={<PostDetail />} />



            <Route path="/pics" element={<Posts />} />
            <Route path="/pics/:id" element={<PostDetail />} />

            <Route path="/europe/:id" element={<PostDetail />} />
            <Route path="/europe" element={<Posts />} />


            <Route path="/search" element={<Posts />} />
            <Route path="/search/:id" element={<PostDetail />} />

            <Route path="/not-found" element={<ErrorPost/>} />
            <Route path="*" element={<ErrorPage/>} />
            {/* <Route path='/' element= */}
          </Route>
        </Routes>

      </BrowserRouter>
      </ToastProvider>
    </Provider>
  </StrictMode>
);
