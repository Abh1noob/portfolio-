import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

const tt_trailers = localFont({
  src: [
    {
      path: "../../public/assets/fonts/TT Traillers.ttf",
    },
  ],
  variable: "--font-tt_trailers",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${tt_trailers.variable} `}>
      <Component {...pageProps} />
    </main>
  );
}
