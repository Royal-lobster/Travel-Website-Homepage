import React from "react";
import Navbar from "./Navbar";
import Head from "next/head";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Footer from "./Footer";
import _JSXStyle from "styled-jsx/style";

function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,600;0,800;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="layout">
        <div>
          <Navbar />
          {children}
        </div>
        <Footer />
      </div>
      <style jsx>{`
        .layout {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
      `}</style>
    </>
  );
}

export default Layout;
