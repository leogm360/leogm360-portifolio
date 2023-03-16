import type { AppProps } from "next/app";
import { Poppins, Roboto_Mono } from "next/font/google";
import "@/styles/globals.css";

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-poppins",
  fallback: ["swap"],
});

const robotoMono = Roboto_Mono({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  fallback: ["swap"],
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div
      id="fonts-wrapper"
      className={`${poppins.variable} ${robotoMono.variable}`}
    >
      <Component {...pageProps} />
    </div>
  );
};

export default App;
