"use client"
import 'bootstrap/dist/css/bootstrap.css'

import { Lexend } from 'next/font/google';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import Link from 'next/link'
// import {NextUIProvider} from "@nextui-org/react";


import { Provider } from 'react-redux'
import store from "../store"
import NaveBarre from "../component/navBarre";




export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {

  return (
    <html lang="en">
    <body>
      {/* Layout UI */}
      <main>
      {/* {children} */}
      <Provider store={store}>
      <NaveBarre/>
        {children} 
        </Provider>
        </main>
      <h1>
      {/* <a rel="login" href="component/login.tsx" >login</a> */}
      </h1>
    </body>
  </html>
  );
}
