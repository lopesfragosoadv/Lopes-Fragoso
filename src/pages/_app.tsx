import type { AppProps } from "next/app";
import "@/styles/globalstyle.scss";
import "react-toastify/dist/ReactToastify.min.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
