"use client";

import { useEffect, useState } from "react";
import styles from "./Giveaway.module.css";
import Image from "next/image";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Transfer from "@/utils/useWeb3";

export default function GiveawayPage() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [claim, setClaim] = useState(false);
  const [address, setAddress] = useState("");
  const [twitter, setTwitter] = useState("Complete");
  const [telegram, setTelegram] = useState("Complete");
  const [youtube, setYoutube] = useState("Complete");
  const [msg, setMsg] = useState("");
  const [transactionInProgress, setTransactionInProgress] = useState(false);

  useEffect(() => {
    const target = new Date("04/05/2024 23:59:59");
    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();
      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);
      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);
      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function addLeadingZero(value) {
    const nonNegativeValue = Math.max(0, value);

    const paddedValue =
      nonNegativeValue < 10 ? `0${nonNegativeValue}` : nonNegativeValue;
    return paddedValue;
  }

  useEffect(() => {
    if (
      twitter === "Completed" &&
      telegram === "Completed" &&
      youtube === "Completed"
    ) {
      setClaim(true);
    } else {
      setClaim(false);
    }
  }, [twitter, telegram, youtube]);

  const handleChange = (e) => {
    const add = e.target.value;
    setAddress(add);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
      return;
    }
    setTransactionInProgress(true);
    const transaction = await Transfer(address);
    setTransactionInProgress(false);
    if (transaction === 1) {
      setMsg("Transaction Successful!");
    } else if (transaction === -1) {
      setMsg("Invalid Address...");
    } else if (transaction == 0) {
      setMsg("Transaction Failed!");
    }
    setAddress("");
  }

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.Innercontainer}>
        <div className={styles.content}>
          <div className={styles.timer}>
            <h1 className={styles.heading}>Giveaway</h1>
            <div className={styles.countdown}>
              <div className={styles.timebox}>
                <div className={styles.time}>{addLeadingZero(days)}</div>
                <div className={styles.label}>Days</div>
              </div>
              <div className={styles.timebox}>
                <div className={styles.time}>{addLeadingZero(hours)}</div>
                <div className={styles.label}>Hours</div>
              </div>
              <div className={styles.timebox}>
                <div className={styles.time}>{addLeadingZero(minutes)}</div>
                <div className={styles.label}>Minutes</div>
              </div>
              <div className={styles.timebox}>
                <div className={styles.time}>{addLeadingZero(seconds)}</div>
                <div className={styles.label}>Seconds</div>
              </div>
            </div>
          </div>
          <div className={styles.requirements}>
            <h3 className={styles.reqHeading}>**Requirements to Claim:</h3>
            <ul className={styles.links}>
              <li className={styles.link}>
                <Image src="/x.png" width={40} height={40} />
                <span className={styles.linkTxt}>Follow us on Twitter</span>
                <button
                  className={
                    twitter === "Complete" ? styles.linkBtn : styles.linkBtnAtv
                  }
                  onClick={() => {
                    setTwitter("Completed");
                  }}
                >
                  {twitter}
                </button>
              </li>
              <li className={styles.link}>
                <Image src="/telegram.png" width={40} height={40} />
                <span className={styles.linkTxt}>
                  Join our Telegram channel
                </span>
                <button
                  className={
                    telegram === "Complete" ? styles.linkBtn : styles.linkBtnAtv
                  }
                  onClick={() => {
                    setTelegram("Completed");
                  }}
                >
                  {telegram}
                </button>
              </li>
              <li className={styles.link}>
                <Image src="/youtube.png" width={40} height={40} />
                <span className={styles.linkTxt}>
                  Subscribe to our YouTube channel
                </span>
                <button
                  className={
                    youtube === "Complete" ? styles.linkBtn : styles.linkBtnAtv
                  }
                  onClick={() => {
                    setYoutube("Completed");
                  }}
                >
                  {youtube}
                </button>
              </li>
            </ul>

            {claim ? (
              transactionInProgress ? (
                <button type="button" disabled className={styles.activebtn}>
                  <span className={styles.spinner} />
                  Processing...
                </button>
              ) : (
                <form onSubmit={handleSubmit} className={styles.Form}>
                  <input
                    placeholder="Enter your address"
                    type="text"
                    onChange={handleChange}
                    value={address}
                    className={styles.Input}
                  />
                  <button type="submit" className={styles.claimBtn}>
                    Claim
                  </button>
                </form>
              )
            ) : (
              <button disabled className={styles.inactivebtn}>
                Claim
              </button>
            )}

            <div
              className={
                msg === "Transaction Successful!"
                  ? styles.msgScs
                  : styles.msgFail
              }
            >
              {msg}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
