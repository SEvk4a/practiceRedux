import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/_home/HomePage";
import PostsPage from "./pages/_posts/PostsPage";
import Layout from "./components/Layout/Layout";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/useRedux";
import { fetchUser } from "./store/asyncActions/user";
import AboutPage from "./pages/_about/AboutPage";

function App() {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) dispatch(fetchUser());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {!user ? (
            <>
              <Route index element={<HomePage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </>
          ) : (
            <>
              <Route path="/posts" element={<PostsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="*" element={<Navigate to="/posts" replace />} />
            </>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
