import Nav from '@/components/molecules/Nav/Nav';
import type { Metadata } from 'next';
import { Lexend, Pixelify_Sans, Source_Code_Pro } from 'next/font/google';
import './globals.scss';

const lexendSans = Lexend({
  variable: '--font-lexend',
  subsets: ['latin'],
});

const sourceCodePro = Source_Code_Pro({
  variable: '--font-source-code',
  subsets: ['latin'],
});

const pixelSans = Pixelify_Sans({
  variable: '--font-pixel',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Evan Jenkins',
  description: 'Frontend Web Developer',
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${lexendSans.variable} ${sourceCodePro.variable} ${pixelSans.variable} antialiased drawer`}
      >
        <Nav />
        <div className="drawer-content ">{children}</div>
      </body>
    </html>
  );
}
