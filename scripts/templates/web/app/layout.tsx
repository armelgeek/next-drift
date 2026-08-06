import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import './styles.css';

export const metadata: Metadata = {
  title: 'Your SaaS',
  description: 'Welcome to your SaaS application',
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
