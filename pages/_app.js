import React from "react";
import Head from "next/head";
import "tailwindcss/tailwind.css";
import "../styles/globals.scss";
import { Layout } from "../components";
import { ThemeProvider } from "next-themes";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";
import Script from "next/script";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Head>
        <Script
        strategy='lazyOnload'
        src="https://www.googletagmanager.com/gtag/js?id=G-MDVDELLX7M"
         />

        
      <Script strategy="lazyOnload">
            {`
              window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-MDVDELLX7M');`
            }
        </Script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@500&display=swap"
          rel="stylesheet"
        ></link>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>

      <GoogleAnalytics measurementId="G-MDVDELLX7M" />

        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;

