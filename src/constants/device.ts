// Web device constants
export const kWidth = typeof window !== 'undefined' ? window.innerWidth : 1920;
export const kHeight = typeof window !== 'undefined' ? window.innerHeight : 1080;

// Responsive breakpoints
export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
} as const;

export type Breakpoint = keyof typeof breakpoints;