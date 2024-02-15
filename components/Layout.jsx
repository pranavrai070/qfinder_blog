import React from "react";
import Header from "./Header";
import Head from "next/head";

const Layout = ({ children }) => (
  <>
    <Head>
      <link rel="icon" href="/favicon.png" />
      <meta name="google-adsense-account" content="ca-pub-2590982090650195"></meta>
      <title>Qfinder's Blog</title>
    </Head>
    <Header />
    {children}
  </>
);

export default Layout;
