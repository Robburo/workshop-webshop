"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Sidebar.module.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { usePathname } from "next/navigation";

export const links = [
  { name: "Produktoversikt", href: "/produkter"},
  { name: "Garn", href: "/garn"},
  { name: "Makramé", href: "/makrame"},
  { name: "Leire", href: "/leire"},
  { name: "DIY kit", href: "/diy-kit"},
  { name: "Veveutstyr", href: "/veveutstyr"},
];

export default function Sidebar() {
    const pathname = usePathname();
    
  return (
    <aside className={styles.sidebar}>
      {/* Logo */}
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="/sidebar_logo.png"
            alt="Nova Workshop"
            width={250}
            height={200}
            priority
          />
        </Link>
      </div>

      {/* Nav */}
      <nav className={styles.nav}>
        <ul>
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className={`${styles.link} ${pathname === link.href ? styles.active : ""}`} >
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Social icons */}
      <div className={styles.socials}>
        <a href="#">
          <FaFacebook />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
      </div>
    </aside>
  );
}
