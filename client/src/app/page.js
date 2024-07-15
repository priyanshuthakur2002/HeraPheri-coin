import Image from "next/image";
import Header from "./components/header/Header";
import styles from "./page.module.css";
import Footer from "./components/footer/Footer";
import Link from "next/link";
export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.hero}>
        <div>
          <h1 className={styles.heading}>
            Invest in Laughter, Invest in Hera Pheri Coin!
          </h1>
          <p className={styles.description}>
            Jump into laughter and fun with Hera Pheri Coin! Join the chuckles
            and invest in the comedy craze. It's not just about coins, it's
            about spreading smiles too! Invest in Laughter, Invest in Hera Pheri
            Coin!
          </p>
          <div className={styles.btns}>
            <Link href="#" className={`${styles.btn} ${styles.buyBtn}`}>
              Buy Now!
            </Link>
            <Link href="/tokenomics" className={styles.btn}>
              Learn More
            </Link>
          </div>
        </div>
        <Image
          src="/pic1.png"
          alt="Image of Akshay kumar"
          width={440}
          height={575}
        />
      </div>
      <Footer />
    </div>
  );
}
