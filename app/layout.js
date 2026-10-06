import { Newsreader, Figtree } from "next/font/google";
import "./globals.css";

const serif = Newsreader({ subsets: ["latin"], variable: "--serif", display: "swap" });
const sans = Figtree({ subsets: ["latin"], variable: "--sans", display: "swap" });

export const metadata = {
  title: "Harsh Kumar Pandey | Backend Software Engineer",
  description: "Portfolio of Harsh Kumar Pandey: backend projects in Node.js, Spring Boot, Redis and Kafka.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
