import styles from "./Inspiration.module.css";

export default function Inspiration() {
  return (
    <section className={styles.inspiration}>
      <h2>Inspirerende håndarbeidsprosjekter</h2>
      <p>Unn deg nye ideer og prosjekter innen garn, makramé og håndverk.</p>
      <button className={styles.cta}>UTFORSK</button>
    </section>
  );
}
