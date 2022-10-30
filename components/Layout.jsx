import Head from "next/head";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import { useState } from "react";
import { useRouter } from "next/router";


const Layout = ({ children }) => {

  const router = useRouter();

  //get current path without the slash
  const path = router.pathname.slice(1);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  const pathname = capitalizeFirstLetter(path);

  return (
    <>
      <Head>
        <title>Dummydev - {pathname == '' ? 'Home' : pathname} </title>
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
