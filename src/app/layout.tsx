import type { Metadata } from "next";
import { Oswald, Source_Code_Pro } from "next/font/google";
import "./globals.css";
import Nav from '@/components/molecules/Nav/Nav';

const oswaldSans = Oswald({
  variable: '--font-oswald',
  subsets: ["latin"]
})

const sourceCodePro = Oswald({
  variable: '--font-source-code',
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Evan Jenkins",
  description: "Frontend Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oswaldSans.variable} ${sourceCodePro.variable} antialiased`}
      >
        <Nav/>
        {children}
      </body>
    </html>
  );
}
