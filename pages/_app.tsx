import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "../components/navbar/Navbar";
import { RegisterModal } from "../components/modals/RegisterModal";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RegisterModal />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
