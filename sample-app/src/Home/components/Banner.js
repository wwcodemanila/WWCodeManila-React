import React from "react";
import logo from "../../assets/images/react-logo.svg";
import styles from "../home.module.scss"

const Banner = () => (
  <section className="hero is-dark">
    <div className="hero-body">
      <div className="container has-text-centered">
        <img src={logo} className={styles.spin} alt="React Logo" width="15%" />
        <h1 className="title has-text-centered">React JS Study Group</h1>
        <h2 className="subtitle has-text-centered">Women Who Code Manila</h2>
      </div>
    </div>
  </section>
);

export default Banner;
