import type { Metadata } from 'next';
import { Orbitron, Rajdhani } from 'next/font/google';
import './globals.css';

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
});

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-rajdhani',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Lamborghini Aventador | Scrollytelling Showcase',
  description: 'Experience the engineering masterpiece.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${rajdhani.variable}`} suppressHydrationWarning>
      <body className="antialiased font-sans bg-pagani-black text-white selection:bg-pagani-gold selection:text-black" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
