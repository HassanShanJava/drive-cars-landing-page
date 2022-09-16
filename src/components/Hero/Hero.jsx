import React from "react";
import styles from "./Hero.module.css";

import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <form>
        <div className={styles.text}>
          <label>Where</label>
          <input className={styles.input_text} type="text" placeholder="Search Location" />
        </div>
        <div className={styles.dates}>
          <span className={styles.border}></span>
          <label>From</label>
          <input type="date" />
        </div>
        <div className={styles.until}>
          <span className={styles.border}></span>
          <label>Until</label>
          <input type="date" />
        </div>
        <div className={styles.search_btn}>
            <AiOutlineSearch size={25} className={styles.icon}/>
            <button className={styles.btn}>Search for cars</button>
        </div>
      </form>
    </div>
  );
};

export default Hero;
