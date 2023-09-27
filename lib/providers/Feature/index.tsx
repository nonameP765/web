import { HackleFeature } from '@hackler/react-sdk';
import { FeatureFlag } from '@lib/feature';
import React from 'react';

interface FeatureProviderProps {
  children: (isFeatureOn: boolean) => React.ReactNode;
  feature: FeatureFlag;
}

export function FeatureProvider({ children, feature }: FeatureProviderProps) {
  return (
    <HackleFeature featureKey={feature}>{(isFeatureOn) => children(isFeatureOn)}</HackleFeature>
  );
}
