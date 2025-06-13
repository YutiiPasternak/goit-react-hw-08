import styles from "./componentsCss/homePage.module.css";

export default function HomeDescr() {
  return (
    <div className={styles.wrapperHomeDscr}>
      <h1 className={styles.title}>
        Welcome to your personal contact manager — a simple and secure web app
        designed to help you organize your contacts with ease.
      </h1>
      <ul className={styles.list}>
        With this app, you can:
        <li>🔐 Register and log in to your account</li>
        <li>
          📋 View your private list of contacts (only available when logged in)
        </li>
        <li>➕ Add new contacts</li>
        <li>🗑 Delete unwanted entries</li>
        <li>🔍 Quickly filter contacts by name</li>
        <li>
          All your contact data is safely stored, and you can access your
          contact book anytime, from any device.
        </li>
      </ul>
      <p className={styles.text}>
        {" "}
        Get started by creating an account or logging in — and take control of
        your contacts today!
      </p>
    </div>
  );
}

//
