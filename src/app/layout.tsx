import React from 'react';

export const metadata = {
  title: {
    default: '김예지 | 프론트엔드 개발자',
    template: '김예지 | %s',
  },
  description: '김예지 포트폴리오',
  // icons: {
  //   icon: '/favicon.ico',
  // },
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
    <body suppressHydrationWarning={true}>
    <main>{children}</main>
    </body>
    </html>
  );
}
