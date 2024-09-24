import Navbar from "./_components/navbar";
import { Manrope } from "next/font/google";
import "./globals.css";

const archivo = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={archivo.variable}>
      <body className="font-archivo">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
