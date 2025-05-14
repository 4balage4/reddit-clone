import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/Layout/Layout";
import Posts from "./features/Posts/Posts";
import PostDetail from "./features/PostDetail/PostDetail";
import { store } from "./store";
import ScrollToTop from './utils/ScrollToTop'
// import ToastProvider from './components/ToastNotification/ToastProvider'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      {/* <ToastProvider> */}
      <BrowserRouter>
        <ScrollToTop/>

        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Posts />} />
            <Route path="/all" element={<Posts />} />
            <Route path="/all/:name" element={<PostDetail />} />

            <Route path="/search" element={<Posts />} />
            <Route path="/:name" element={<PostDetail />} />

            <Route path="/pics" element={<Posts />} />
            <Route path="/pics/:name" element={<PostDetail />} />

            <Route path="/europe/:name" element={<PostDetail />} />
            <Route path="/europe" element={<Posts />} />


            <Route path="/search" element={<Posts />} />
            <Route path="/search/:name" element={<PostDetail />} />
            {/* <Route path='/' element= */}
          </Route>
        </Routes>

      </BrowserRouter>
      {/* </ToastProvider> */}
    </Provider>
  </StrictMode>
);
