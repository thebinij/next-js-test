import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
// import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "CityRemit Japan",
  description: "Remittance App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <AntdRegistry>
        {children}
        </AntdRegistry>
      </body>
    </html>
  );
}
