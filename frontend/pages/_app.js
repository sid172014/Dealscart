import { CartItems } from "@/components/context/CartItems";
import { DetailsContext } from "@/components/context/DetailsContext";
import { LoginStatusContext } from "@/components/context/LoginStatusContext";
import "@/styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {


  const [loggedIn,setLoggedIn] = useState(false);
  const [userProfile,setUserProfile] = useState();
  const [updateCart,setUpdateCart] = useState(false);

  return (
    <CartItems.Provider value={{updateCart,setUpdateCart}}>
    <DetailsContext.Provider value={{userProfile,setUserProfile}}>
    <LoginStatusContext.Provider value={{ loggedIn, setLoggedIn }}>
      <Component {...pageProps} />
    </LoginStatusContext.Provider>
    </DetailsContext.Provider>
    </CartItems.Provider>
  );
}
