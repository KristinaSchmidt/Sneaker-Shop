import { useState } from "react";
import styles from "./styles.module.css";
import Group from "../../assets/Group 25.svg";
import  Facebook  from "../../assets/g10.svg";
import XIcon from "../../assets/x_icon.jpeg.svg";

// Validation//
const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
const isNonEmpty = (v) => v.trim().length >= 2;

export default function Contacts() {
  const [values, setValues] = useState({ email: "", name: "", message: "" });
  const [touched, setTouched] = useState({ email: false, name: false, message: false });
  const [sent, setSent] = useState(false);

  const errors = {
    email:
      values.email === ""
        ? "Bitte E-mail eingeben"
        : !isEmail(values.email)
        ? "Bitte prüfen Sie Ihre E-mail Adresse!"
        : "",
    name:
      values.name === ""
        ? "Bitte Name eingeben"
        : !isNonEmpty(values.name)
        ? "Name soll mindestens 2 Symbole enthalten!"
        : "",
    message:
      values.message === ""
        ? "Bitte Text eingeben"
        : values.message.trim().length < 10
        ? "Der Text soll mindestens 10 Symbole enthalten!"
        : "",
  };

  const isValid = Object.values(errors).every((e) => e === "");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ email: true, name: true, message: true });
    if (!isValid) return;

    try {
      setSent(true);
      setValues({ email: "", name: "", message: "" });
      setTouched({ email: false, name: false, message: false });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className={styles.container}>
      <h2 className={styles.title}>Kontakte</h2>

      <div className={styles.hr} />

      <section className={styles.layout}>
        <div className={styles.left}>
          <ul className={styles.infoList}>
            <li>+ 8 800 000 00 00</li>
            <li>emailsample@gmail.com</li>
          </ul>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.row2}>
              <div className={styles.field}>
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={touched.email && !!errors.email}
                  aria-describedby="email-error"
                />
                {touched.email && errors.email && (
                  <span className={styles.error} id="email-error">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className={styles.field}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={touched.name && !!errors.name}
                  aria-describedby="name-error"
                />
                {touched.name && errors.name && (
                  <span className={styles.error} id="name-error">
                    {errors.name}
                  </span>
                )}
              </div>
            </div>

            <div className={styles.field}>
              <textarea
                name="message"
                placeholder="Dein Text"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                rows={4}
                aria-invalid={touched.message && !!errors.message}
                aria-describedby="message-error"
              />
              {touched.message && errors.message && (
                <span className={styles.error} id="message-error">
                  {errors.message}
                </span>
              )}
            </div>

            <button className={styles.submit} type="submit" disabled={!isValid}>
              Senden
            </button>

            {sent && (
              <div className={styles.success} role="status">
                Сообщение отправлено ✓
              </div>
            )}
          </form>
        </div>

        <aside className={styles.right}>
          <h4>Finde uns:</h4>
          <div className={styles.socials}>
            <a href="!#" aria-label="Snapchat" className={styles.social}>
              <img src={Group} alt="Snapchat" className={styles.social} />
            </a>
            <a href="!#" aria-label="Facebook" className={styles.social}>
              <img src={Facebook} alt="Facebook" className={styles.social} />
            </a>
            <a href="!#" aria-label="X" className={styles.social}>
              <img src={XIcon} alt="X" className={styles.social} />
            </a>
          </div>
        </aside>
      </section>
    </main>
  );
}