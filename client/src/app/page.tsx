import Image from "next/image";
import Login from "../component/authentication/Logins";
import SignUp from "../component/authentication/SignUp"
import NaveBarre from "../component/authentication/NaveBarre";
import Slide from "../component/authentication/Slide";

export default function Home() {
  return (
    <main className="">
      {/* <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1>LOGIN</h1>
       <Login/>
       <h1>SIGNUP</h1>
       <SignUp />
      </div> */}
      <NaveBarre/>
      <Slide/>
    

    </main>
  );
}
