import { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { refreshUser } from "./redux/auth/operations";

import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import RegistrationPage from "./pages/registrationPage";
import ContactsPage from "./pages/contactsPage";

import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute";

import styles from "./components/componentsCss/app.module.css";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector((state) => state.auth.isRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <p className={styles.loading}>Loading user data...</p>; // або spinner
  }

  return (
    <div className={styles.mainContainer}>
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/login"
              element={
                <RestrictedRoute>
                  <LoginPage />
                </RestrictedRoute>
              }
            />
            <Route
              path="/registration"
              element={
                <RestrictedRoute>
                  <RegistrationPage />
                </RestrictedRoute>
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
