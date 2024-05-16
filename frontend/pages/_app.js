import { LoginStatusContext } from "@/components/context/LoginStatusContext";
import "@/styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {


  const [loggedIn,setLoggedIn] = useState(false);
  return (
    <LoginStatusContext.Provider value={{ loggedIn, setLoggedIn }}>
      <Component {...pageProps} />
    </LoginStatusContext.Provider>
  );
}
