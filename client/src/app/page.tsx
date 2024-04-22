'use client'
import Image from "next/image";

import HomePage from "./HomePage";

import {useEffect} from 'react'
import {useAppDispatch} from '../store'
import {oneUser} from '../Action/user'


export default function Home() {

  return (
    <main className="">
  
      <HomePage/>

     
    

    </main>
  );
}
