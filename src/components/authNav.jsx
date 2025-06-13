import clsx from "clsx";
import { NavLink } from "react-router-dom";
import styles from "./navigation.module.css";

export default function AuthNav() {
  const changedStyles = ({ isActive }) => {
    return clsx(styles.defaultStyles, isActive && styles.navigationStyles);
  };

  return (
    <div className={styles.wrapperForLoginAndRegister}>
      <NavLink className={changedStyles} to="/login">
        Login
      </NavLink>
      <NavLink className={changedStyles} to="/registration">
        Registration
      </NavLink>
    </div>
  );
}
