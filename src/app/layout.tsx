import type { Metadata } from "next";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ThemeProvider } from "@/components/themeprovider";

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
      <body>
        <ThemeProvider>
          <AntdRegistry>{children}</AntdRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
