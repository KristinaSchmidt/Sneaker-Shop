import styles from "./styles.module.css";


import fbIcon from "../../assets/facebook.svg";
import twIcon from "../../assets/twitter.svg";
import igIcon from "../../assets/instagram.svg";

function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>

        <div className={styles.colLeft}>
          <h3 className={styles.head}>Контакты</h3>
          <p className={styles.line}>8 800 000 00 00</p>
          <p className={styles.line}>emailexample@gmail.com</p>
        </div>


        <div className={styles.colCenter}>
          <a className={styles.social} href="#" aria-label="Facebook">
            <img src={fbIcon} alt="Facebook" className={styles.icon} />
          </a>
          <a className={styles.social} href="#" aria-label="Twitter">
            <img src={twIcon} alt="Twitter" className={styles.icon} />
          </a>
          <a className={styles.social} href="#" aria-label="Instagram">
            <img src={igIcon} alt="Instagram" className={styles.icon} />
          </a>
        </div>


        <div className={styles.colRight}>
          <label className={styles.label} htmlFor="footerEmail">
            Введите свой email:
          </label>
          <input
            id="footerEmail"
            type="email"
            className={styles.input}
            placeholder="example@mail.com"
          />
        </div>
      </div>

      <div className={styles.bottom}>
        2024 Сникер-магазин, Все права защищены
      </div>
    </footer>
  );
}

export default Footer;