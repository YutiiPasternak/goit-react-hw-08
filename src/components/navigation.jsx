import clsx from "clsx";
import { NavLink } from "react-router-dom";
import styles from "./navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const changedStyles = ({ isActive }) => {
    return clsx(styles.defaultStyles, isActive && styles.navigationStyles);
  };

  return (
    <>
      <NavLink className={changedStyles} to="/">
        Home page
      </NavLink>
      {isLoggedIn && (
        <div>
          <nav className={styles.navWrapper}>
            <NavLink className={changedStyles} to="/contacts">
              Contacts
            </NavLink>
          </nav>
        </div>
      )}
    </>
  );
}
