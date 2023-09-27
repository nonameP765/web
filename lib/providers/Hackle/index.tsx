'use client';

import { createInstance, HackleProvider as OriginalHackleProvider } from '@hackler/react-sdk';
import { hackleKey, isDev } from '@lib/config';
import React from 'react';

const hackleClient = createInstance(hackleKey, {
  debug: isDev,
  pollingIntervalMillis: 30000,
  auto_track_page_view: true
});

interface HackleProviderProps {
  children?: React.ReactNode;
}

export function HackleProvider({ children }: HackleProviderProps) {
  return (
    <OriginalHackleProvider hackleClient={hackleClient} supportSSR>
      {children}
    </OriginalHackleProvider>
  );
}
