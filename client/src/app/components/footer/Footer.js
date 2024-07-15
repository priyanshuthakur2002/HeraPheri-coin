import Link from "next/link";
import styles from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; {year} HeraPheriCoin. All rights reserved!</p>
      <ul className={styles.socialLinks}>
        <li>
          <Link href="#">
            <Image src="/x.png" width={40} height={40} />
          </Link>
        </li>
        <li>
          <Link href="#">
            <Image src="/telegram.png" width={40} height={40} />
          </Link>
        </li>
        <li>
          <Link href="#">
            <Image src="/youtube.png" width={40} height={40} />
          </Link>
        </li>
      </ul>
    </footer>
  );
}
