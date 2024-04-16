"use client"
import 'bootstrap/dist/css/bootstrap.css'
import { Lexend } from 'next/font/google';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import Link from 'next/link'
import {NextUIProvider} from "@nextui-org/react";

import { Provider } from 'react-redux'
import store from "../store"

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {

  return (
    <html lang="en">
    <body>
      {/* Layout UI */}
      <main>
      {/* {children} */}
      <Provider store={store}>
      <NextUIProvider>  {children} </NextUIProvider>
        </Provider>
        </main>
      <h1>
      {/* <a rel="login" href="component/login.tsx" >login</a> */}
      </h1>
    </body>
  </html>
  );
}
