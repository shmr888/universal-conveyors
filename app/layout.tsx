import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const mont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Universal Conveyors",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mont.className}>
      <div className="flex flex-col min-h-dvh">

        <Header />
        {children}
        <Footer />
        </div>
        
        
        </body>
    </html>
  );
}
