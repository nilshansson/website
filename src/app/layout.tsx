import { Roboto } from "next/font/google";
import "./globals.css";
import "./index.css";

// Importing the Roboto font with weight, subsets, and display properties
const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className="font-roboto bg-white flex">
        <main className="ml-[300px] flex-1 p-10">{children}</main>
      </body>
    </html>
  );
}
