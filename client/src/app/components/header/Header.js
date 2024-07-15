import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src="/logo.png" width={310} height={60} />
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navLinks}>
            <li>
              <Link href="/" className={styles.link}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/tokenomics" className={styles.link}>
                Tokenomics
              </Link>
            </li>
            <li>
              <Link href="/giveaway" className={styles.link}>
                Giveaway
              </Link>
            </li>
          </ul>
          <button className={styles.ctaBtn}>Buy Now!</button>
        </nav>
      </div>
    </header>
  );
}
