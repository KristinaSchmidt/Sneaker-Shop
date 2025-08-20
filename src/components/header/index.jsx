import { NavLink } from "react-router";
import styles from "./styles.module.css";


const menuList = [
  {
    title: "Main",
    path: "/",
  },
  {
    title: "Cart",
    path: "/cart",
  },
  {
    title: "Contacts",
    path: "/contacts",
  },
];

function Header () {
    return <header className={styles.header}>
        <h1>Sneaker Shop</h1>
        {menuList.map((menuItem) => {
            return <NavLink className={styles.nav}key={menuItem.title} to ={menuItem.path}>{menuItem.title}</NavLink>
        })}
    </header>
}

export default Header;