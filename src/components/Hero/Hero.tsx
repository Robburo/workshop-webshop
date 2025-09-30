import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1>VELKOMMEN TIL NOVA WORKSHOP</h1>
      <p>Oppdag materialer, verktøy og inspirasjon til håndarbeid</p>
      <button className={styles.cta}>HANDLE NÅ</button>
    </section>
  );
}
