import { Toaster } from "sonner";
import { Html, Head, Main, NextScript } from "next/document";
import { useState } from "react";
import { LoginStatusContext } from "@/components/context/LoginStatusContext";

export default function Document() {
  const [loggedIn,setLoggedIn] = useState(false);
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
