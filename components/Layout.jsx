import Head from "next/head";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import { useState } from "react";

const Layout = ({ children }) => {

  return (
    <>
      <Head>
        <title>Dummydev</title>
        <meta name="description" content="Dummydev Portfolio" />
      </Head>
          <Header />
        <div className="p-5 px-3 lg:px-96 bg-amber-100 dark:bg-[#202023] min-h-screen">
          <main>
            {children}</main>
          <Footer />
        </div>
    </>
  );
};

export default Layout;
