import "bootstrap/dist/css/bootstrap.css";
import Menu from "./menu";
import Head from "next/head";
import Footer from "./footer";
export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>Oluwaseun Anselm</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Menu />
      {children}
      <Footer />
    </>
  );
}
