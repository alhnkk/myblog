import React from "react";
import Head from "next/head";
import "tailwindcss/tailwind.css";
import "../styles/globals.scss";
import { Layout } from "../components";
import { ThemeProvider } from "next-themes";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;
