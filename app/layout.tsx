import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import ShoppingCartModal from "@/components/ShoppingCart";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce",
  description: "E-commerce website built with Next.js and Sanity.io CMS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        <Navbar />
        <ShoppingCartModal />
          {children}
          </Providers>
      </body>
    </html>
  );
}
