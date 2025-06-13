import { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation";
import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import RegistrationPage from "./pages/registrationPage";
import ContactsPage from "./pages/contactsPage";
import AppBar from "./components/appBar";
import { refreshUser } from "./redux/auth/operations";
import { useDispatch } from "react-redux";
import Layout from "./components/Layout";
import styles from "./components/componentsCss/app.module.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div className={styles.mainContainer}>
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
