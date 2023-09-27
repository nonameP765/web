import '@lib/styles/globals.css';
import StyledComponentsRegistry from '@lib/registry';
import { HackleProvider } from '@lib/providers/Hackle';
import React from 'react';

export const metadata = {
  title: 'NA`ME web',
  description: '노네임 프로듀서의 개인 페이지 입니다.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <HackleProvider>{children}</HackleProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
