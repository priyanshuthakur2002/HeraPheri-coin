import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import styles from "./Tokenomics.module.css";

export default function Tokenomics() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.Innercontainer}>
        <h2 className={styles.heading}>Total Supply:</h2>
        <p className={styles.paragraph}>Initially set to 70,000,000 tokens.</p>

        <h2 className={styles.heading}>Minting Functionality:</h2>
        <ul className={styles.list}>
          <li>Only the contract owner (deployer) can mint new tokens.</li>
          <li>
            The mint function allows the owner to create and allocate additional
            tokens to specific addresses.
          </li>
        </ul>

        <h2 className={styles.heading}>Burning Functionality:</h2>
        <ul className={styles.list}>
          <li>
            Any token holder can burn their own tokens using the burn function.
          </li>
          <li>Burning reduces the total supply.</li>
        </ul>

        <h2 className={styles.heading}>Transaction Fees:</h2>
        <p className={styles.paragraph}>Zero transaction fee</p>

        <h2 className={styles.heading}>Ownership and Governance:</h2>
        <ul className={styles.list}>
          <li>The contract deployer is initially set as the owner.</li>
          <li>
            The onlyOwner modifier restricts certain functions to the contract
            owner.
          </li>
        </ul>

        <h2 className={styles.heading}>Token Utility:</h2>
        <ul className={styles.list}>
          <li>
            <strong>Access to Exclusive Content</strong>: HPC holder may unlock
            exclusive content.
          </li>
          <li>
            <strong>Community Events</strong>: HPC could grant access to virtual
            events, giveaways, or community activities.
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}
