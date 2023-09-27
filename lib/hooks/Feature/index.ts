import { useFeature as useFeatureHackle } from '@hackler/react-sdk';
import React from 'react';
import { FeatureFlag } from "@lib/feature";

export const useFeature = (featureFlag: FeatureFlag) => {
  const isFeatureEnabled = useFeatureHackle(featureFlag);

  return React.useMemo(() => isFeatureEnabled, [isFeatureEnabled]);
};
