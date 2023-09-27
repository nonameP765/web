export const FeatureFlag = {
  TEST: -1
} as const;

export type FeatureFlag = (typeof FeatureFlag)[keyof typeof FeatureFlag];
