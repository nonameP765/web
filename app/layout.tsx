import '@lib/styles/globals.css';
import React from 'react';

export const metadata = {
  title: 'NA`ME web',
  description: '노네임 프로듀서의 개인 페이지 입니다.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
