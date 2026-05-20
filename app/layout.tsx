import type { Metadata } from "next";
import "./globals.css";

import {
  Black_Han_Sans,
  DM_Serif_Text,
  Space_Mono,
} from "next/font/google";

const blackHan = Black_Han_Sans({
  subsets: ["latin"],
  weight: "400",
});

const dmSerif = DM_Serif_Text({
  subsets: ["latin"],
  weight: "400",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "MANHWAMATCH",
  description: "Your next obsession is one scroll away.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${blackHan.className}
          bg-[#050505]
          text-[#f0e8d8]
        `}
      >
        {children}
      </body>
    </html>
  );
}