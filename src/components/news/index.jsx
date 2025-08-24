import styles from "./styles.module.css";
import SRC from "../../assets/Banner.svg";

function News() {
  return (
    <section className={styles.wrap}>
      <div className={styles.track}>
        <img className={styles.banner} src={SRC} alt="Shop News" />
      </div>
    </section>
  );
}
export default News;