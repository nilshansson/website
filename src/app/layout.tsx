import Navbar from "./_components/navbar";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "./_components/footer";

const archivo = Urbanist({
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
      <head>
        {/* Add the FontAwesome CDN link */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.min.css"
        />
      </head>
      <body className="font-archivo bg-customWhite flex flex-col">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
