import React from 'react';
import '@/styles/reset.css';
import '@/styles/global.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: {
    default: '김예지 | Yeji Kim',
    template: '김예지 | %s',
  },
  description: '김예지 포트폴리오',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
