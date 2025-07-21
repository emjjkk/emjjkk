import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

export const metadata: Metadata = {
  title: "Emmanuel Alabi (@emjjkk) | Software developer in Kigali, Rwanda",
  description: "Chicken Buritto",
};

const tts = localFont({ src: './../public/tts.ttf' })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${tts.className} antialiased w-[100dvw] h-[100dvh] flex`}>
        {children}
      </body>
    </html>
  );
}
