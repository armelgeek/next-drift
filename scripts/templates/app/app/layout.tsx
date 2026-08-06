import type { Metadata } from 'next';
import { SessionProvider } from '@repo/auth/client';
import { ThemeProvider } from 'next-themes';
import './styles.css';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Your SaaS app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SessionProvider>{children}</SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
