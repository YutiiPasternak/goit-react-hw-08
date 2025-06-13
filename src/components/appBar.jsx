import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import Navigation from "./navigation";
import { UserMenu } from "./userMenu";
import AuthNav from "./authNav";
import styles from "./componentsCss/appBar.module.css";

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className={styles.appBar_wrapper}>
      <Navigation />
      <div className={styles.wrapperIsLoggedIn}>
        {isLoggedIn ? (
          <div className={styles.userMenu}>
            <UserMenu />
          </div>
        ) : (
          <div>
            <AuthNav />
          </div>
        )}
      </div>
    </header>
  );
}
