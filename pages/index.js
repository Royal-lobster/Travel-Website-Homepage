import React from "react";
import Layout from "../components/Layout/Layout";
import * as Styles from "../styles/Home.module.scss";
import Image from "next/image";
import Experiences from "../components/Experience/Experiences";
import DiscoverWidget from "../components/DiscoverWidget";
function index() {
  return (
    <>
      <Layout>
        <div className={Styles.hero}>
          <div className={Styles.hero__content}>
            <h1 className={Styles.hero__tagline}>
              Experience <br />
              <span>Freedom</span>
            </h1>
            <p className={Styles.hero__desc}>
              Discover All destiny around the world. There are many beautiful
              places with their own uniqueness. Choose the best destiny and
              programs for your journey
            </p>
            <DiscoverWidget />
          </div>
          <Image
            className={Styles.hero__image}
            width={526 / 1.2}
            height={584 / 1.2}
            src="/assets/images/homeHero.png"
            alt="beautiful river with a man riding boat surrounding with coconut trees "
          />
        </div>
        <Experiences />
      </Layout>
    </>
  );
}

export default index;
