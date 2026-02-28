// Scale utility for web - simple implementation
// For web, we can use rem units or direct pixel values

const BASE_FONT_SIZE = 16; // Base font size in pixels

export const scale = (size: number): number => {
  // For web, we can directly return the size or apply a scaling factor
  // This is much simpler than React Native's scaling
  return size;
};

export const scaleRem = (size: number): string => {
  // Convert to rem units
  return `${size / BASE_FONT_SIZE}rem`;
};

export const scalePx = (size: number): string => {
  // Return as pixel value
  return `${size}px`;
};