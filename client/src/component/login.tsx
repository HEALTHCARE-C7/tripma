import Login from "../component/authentication/login"
// import { NextApiRequest, NextApiResponse } from 'next'
// import  signIn  from '../component/authentication/login'
 
// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   try {
//     const { email, password } = req.body
//     await signIn()
 
//     res.status(200).json({ success: true })
//   } catch (error) {
//     if (error === 'CredentialsSignin') {
//       res.status(401).json({ error: 'Invalid credentials.' })
//     } else {
//       res.status(500).json({ error: 'Something went wrong.' })
//     }
//   }
// }
import React from 'react'

export default function login() {
  return (
    <div>
     
      <Login />
    </div>
  )
}
