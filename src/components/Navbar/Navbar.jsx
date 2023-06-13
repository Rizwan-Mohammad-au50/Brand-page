import styles from "./Navbar.module.css"
import "../../../src/App.css"

const Navbar = () => {
  console.log(styles)
  return (
      <nav className={styles.container}>
        <div className={styles.loogo}>
          <img className={styles.logoo} src="images/brand_logo.png" alt="logo" />
        </div>

        <div>
          <ul className={styles.nav_items}>
            <li>Home</li>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <button className={styles.login_btn}>Login</button>
      </nav>
  );
};

export default Navbar;
