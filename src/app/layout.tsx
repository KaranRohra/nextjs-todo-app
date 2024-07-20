import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Todo App',
  description: 'Todo App by Karan Rohra',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
