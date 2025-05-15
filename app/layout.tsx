import type { Metadata } from 'next';
import { Inter, Baumans, Frijole, Underdog, Cabin } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
import Providers from '@/providers';
// const inter = Inter({ subsets: ['latin'] });
const underDog = Cabin({ subsets: ['latin'], weight: '400' });
// const frijole = Martian_Mono({ weight: ['400'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'JobNet',
  description: 'Job application tracking system for job hunters',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={underDog.className}>
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
