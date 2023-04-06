import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "../components/navbar/Navbar";
import { Modal } from "../components/modals/Modal";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Modal isOpen title="Hello" actionLabel="Submit" />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
