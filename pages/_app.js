import React, {useEffect, useState} from 'react'
import 'tailwindcss/tailwind.css'
import '../styles/globals.scss';
import {Layout} from '../components'
import { ThemeProvider } from 'next-themes';


const MyApp = ({Component, pageProps}) => {
  return (
  <ThemeProvider enableSystem={true} attribute="class">
    <Layout>
    <Component {...pageProps}  />
    </Layout>
  </ThemeProvider>
  )

  
}

export default MyApp
