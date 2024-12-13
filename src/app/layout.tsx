import Navbar from "./_components/navbar";
import { Roboto } from "next/font/google";
import "./globals.css";
import "./index.css";

// Importing the Roboto font with weight, subsets, and display properties
const roboto = Roboto({
  weight: ["400", "700"], // Add font weights here (you can choose different ones)
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto", // Font variable
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className="font-roboto bg-white flex flex-col pt-10">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
