import styles from "./ProductGrid.module.css";
import Image from "next/image";

export default function ProductGrid() {
  const products = [
    { name: "Garn", image: "/products/garn.jpg" },
    { name: "Makramé", image: "/products/makrame.jpg" },
    { name: "Leire", image: "/products/leire.jpg" },
    { name: "DIY Kit", image: "/products/diykit.jpg" },
  ];

  return (
    <section className={styles.grid}>
      {products.map((p) => (
        <div key={p.name} className={styles.card}>
          <Image
            src={p.image}
            alt={p.name}
            width={300}
            height={200}
            className={styles.image}
          />
          <h3>{p.name}</h3>
          <button className={styles.cardButton}>SHOP</button>
        </div>
      ))}
    </section>
  );
}
