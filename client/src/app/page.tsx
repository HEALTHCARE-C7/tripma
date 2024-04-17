import Image from "next/image";
import Login from "../component/authentication/Logins";
import SignUp from "../component/authentication/SignUp"
<<<<<<< HEAD
import NaveBarre from "../component/NaveBarre";
import Slide from "../component/Slide";
=======
import HomePage from "./HomePage";




>>>>>>> 83a1f494f39d3dc08260a74682baa8cdf18adfe3

export default function Home() {
  return (
    <main className="">
      {/* <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1>LOGIN</h1>
       <Login/>
       <h1>SIGNUP</h1>
       <SignUp />
      </div> */}
      <HomePage/>

     
    

    </main>
  );
}
