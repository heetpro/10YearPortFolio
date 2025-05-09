import './globals.css';
import type { Metadata } from 'next';
import Bar from "@/components/Bar";

export const metadata: Metadata = {
  title: 'Virtual Heet Co',
  description: 'Virtual Sheet Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scrollbar-none">
      <body className="bg-main scrollbar-none " style={{ overflowY: 'auto' }}>
        <Bar />
        {children}
      </body>
    </html>
  );
}
