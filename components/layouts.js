import "bootstrap/dist/css/bootstrap.css";
import Menu from "./menu";
import Head from "next/head";
import Footer from "./footer";
import CoreValues from "./corevalues";
import BlogSection from "./blogsection";
export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>My World, My Psssion, My Values | Oluwaseun Anselm</title>
        <meta
          name="description"
          content="Oluwaseun Anselm (Ph.D) Dr HAN Website"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Menu />
      {children}
      <CoreValues />
      <BlogSection />
      <Footer />
    </>
  );
}
