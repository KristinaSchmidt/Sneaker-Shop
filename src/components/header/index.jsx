import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

const menuList = [
  { title: "Main", path: "/" },
  { title: "Cart", path: "/cart" },
  { title: "Contacts", path: "/contacts" },
];

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.brand}>Sneaker Shop</h1>
      <nav className={styles.nav}>
        {menuList.map((item) => (
          <NavLink
            key={item.title}
            to={item.path}
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ""}`
            }
          >
            {item.title}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Header;