import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display:"swap"
});
const fraunces = Fraunces({
  subsets: ["vietnamese"],
  variable: "--font-fraunces",
  axes:["opsz"]
});

export const metadata = {
  title: "TheKey Wine | Home",
  description: "TheKey Wine - Biểu tượng của sự xa hoa và đẳng cấp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/images/wine.png" />

      </head>
      <body className={`${inter.className} ${fraunces.variable}`}>{children}</body>
    </html>
  );
}
