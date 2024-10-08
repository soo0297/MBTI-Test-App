import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProtectedRoute from "../components/ProtectedRoute";
import Profile from "../pages/Profile";
import TestPage from "../pages/TestPage";
import TestResultPage from "../pages/TestResultPage";
import { MbtiTestContext } from "../context/mbtiContext";
import { useEffect, useState } from "react";

const AppRouter = () => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const loginToken = (token) => {
    localStorage.setItem("accessToken", token);
    setIsAuthenticated(true);
  };

  const logoutToken = () => {
    localStorage.removeItem("accessToken");
    setIsAuthenticated(false);
  };
  return (
    <MbtiTestContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
        setIsAuthenticated,
        loginToken,
        logoutToken,
      }}
    >
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/profile"
              element={<ProtectedRoute page={<Profile />} />}
            />
            <Route
              path="/test"
              element={<ProtectedRoute page={<TestPage />} />}
            />
            <Route
              path="/results"
              element={<ProtectedRoute page={<TestResultPage />} />}
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </MbtiTestContext.Provider>
  );
};

export default AppRouter;
