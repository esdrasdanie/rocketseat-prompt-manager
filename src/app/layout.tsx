import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { Sidebar } from '@/components/sidebar';

export const metadata: Metadata = {
  title: 'Prompt Manager',
  description: 'Gerencie seus prompts',
};

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} antialiased`}>
      <body className="flex h-screen bg-background text-foreground">
        <NuqsAdapter>
          <Sidebar />
          <main className="flex-1 overflow-auto p-6">{children}</main>
        </NuqsAdapter>
      </body>
    </html>
  );
}
