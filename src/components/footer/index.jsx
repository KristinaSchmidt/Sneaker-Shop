import styles from "./styles.module.css";
import facebook from "../../assets/facebook.svg";
import twIcon from "../../assets/twitter.svg";
import igIcon from "../../assets/instagram.svg";

function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.top}>
        <div className={styles.left}>
          <h3 className={styles.head}>Kontakte</h3>
          <p className={styles.line}>8 800 000 00 00</p>
          <p className={styles.line}>emailexample@gmail.com</p>
        </div>

        <div className={styles.center}>
          <a className={styles.social} href="!#" aria-label="Facebook">
            <img src={facebook} alt="Facebook" className={styles.icon} />
          </a>
          <a className={styles.social} href="!#" aria-label="Twitter">
            <img src={twIcon} alt="Twitter" className={styles.icon} />
          </a>
          <a className={styles.social} href="!#" aria-label="Instagram">
            <img src={igIcon} alt="Instagram" className={styles.icon} />
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.copy}>
          2026 Sneaker-Shop. Alle Rechte vorbehalten.
        </div>

        <form className={styles.subscribe} onSubmit={(e) => e.preventDefault()}>
          <label className={styles.label} htmlFor="footerEmail">
          </label>
          <input
            id="footerEmail"
            type="email"
            className={styles.input}
            placeholder="Ihre E-mail Adresse:"
          />
        </form>
      </div>
    </footer>
  );
}

export default Footer;