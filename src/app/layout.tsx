import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@/styles/globals.scss';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Super Patch",
  description: "En Super Patch tenemos soluciones fáciles y sin drogas para todo, desde el sueño hasta los deportes, y otros beneficios que mejoran la vida.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
