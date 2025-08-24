import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const menuList = [
  { title: "Shop", path: "/" },
  { title: "Warenkorb", path: "/cart" },
  { title: "Kontakte", path: "/contacts" },
];

function Header() {
  const [menuAnchor, setMenuAnchor] = useState(null);
  const isOpen = Boolean(menuAnchor);
  const location = useLocation();

  {/* Menü nach Navigation schließen */}
  useEffect(() => setMenuAnchor(null), [location.pathname]);

  const handleMenuToggle = (e) => {
    setMenuAnchor((prev) => (prev ? null : e.currentTarget));
  };

  const handleClose = () => setMenuAnchor(null);

  return (
    <header className={styles.header}>
      <h1 className={styles.brand}>Sneaker Shop</h1>

      {/* Desktop-Nav */}
      <nav id="primary-nav" className={styles.nav}>
        {menuList.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              [styles.link, isActive ? styles.active : ""].join(" ")
            }
          >
            {item.title}
          </NavLink>
        ))}
      </nav>

      {/* Mobile: BurgerIcon +  Dropdown */}
      <div className={styles.mobileOnly}>
        <IconButton
          aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={isOpen}
          aria-controls={isOpen ? "mobile-menu" : undefined}
          aria-haspopup="true"
          onClick={handleMenuToggle}
          size="large"
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>

        {/*  graue Hintergrund, wenn menü offen ist wird beim klick geschlossen */}
        {isOpen && (
          <div
            className={styles.backdrop}
            onClick={handleClose}
            aria-hidden="true"
          />
        )}

        <Menu
          id="mobile-menu"
          anchorEl={menuAnchor}
          open={isOpen}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          PaperProps={{
            elevation: 2,
            sx: {
              bgcolor: "#3B3C3D",
              color: "white",
              minWidth: 180,
              px: 1,
              py: 0.5,
              borderRadius: 2,
            },
          }}
          MenuListProps={{ sx: { p: 0.5 } }}
        >
          {menuList.map((item) => (
            <MenuItem
              key={item.path}
              component={NavLink}
              to={item.path}
              onClick={handleClose}
              sx={{
                fontSize: 16,
                fontWeight: 600,
                color: "inherit",
                "&:hover": { backgroundColor: "rgba(255,255,255,0.08)" },
                '&[aria-current="page"]': {
                  fontWeight: 800,
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                },
              }}
            >
              {item.title}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </header>
  );
}

export default Header;