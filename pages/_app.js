import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "@/components/layouts";
import RootLayout from "../components/layouts";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <RootLayout>
        <Component {...pageProps} />;
      </RootLayout>
    </div>
  );
}
