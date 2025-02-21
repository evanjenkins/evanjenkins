import Nav from '@/components/molecules/Nav/Nav';
import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { Lexend, Pixelify_Sans, Source_Code_Pro } from 'next/font/google';
import siteConfig from '../../site.config';
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
  title: siteConfig.name,
  description: siteConfig.slogan,
  openGraph: {
    images: ['/its-me.jpg'],
  },
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId: string | undefined = process.env.GOOGLE_ANALYTICCS_ID;

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${lexendSans.variable} ${sourceCodePro.variable} ${pixelSans.variable} antialiased drawer`}
      >
        <Nav />
        <div className="drawer-content ">{children}</div>
      </body>
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}
