import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/global.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Life Ecommerce Store",
  description: "A modern ecommerce platform built with Next js",
};

//Main Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
