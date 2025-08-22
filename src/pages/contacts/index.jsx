import styles from "./styles.module.css";

export default function Contacts() {
  return (
    <section className={styles.container}>
      <h2>Контакты</h2>
      <p>Тел: 8 800 000 00 00</p>
      <p>Email: emailexample@gmail.com</p>
    </section>
  );
}