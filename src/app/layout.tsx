import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "devGames - Descubra jogos incríveis para se divertir",
  description: "O lugar para conhecer novos games para o seu dia!",
  keywords: ['games', 'jogos', 'steam'],
  openGraph: {
    images: [`${process.env.PUBLIC_URL}/preview.png`]
  },
  robots: {
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
    nocache: true,
    follow: true,
    index: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
