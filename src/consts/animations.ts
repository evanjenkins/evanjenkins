export const AnimationSpeeds = {
  slow: 0.2,
  fast: 0.1,
} as const;
export type AnimationSpeedKeys = keyof typeof AnimationSpeeds;
export type AnimationSpeed = keyof typeof AnimationSpeeds[AnimationSpeedKeys];
