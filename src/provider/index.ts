import { config } from "@/theme/configs";

// Theme provider for web
export const themeConfigs = () => config;

export type ThemeProviderProps = {
  children: React.ReactNode;
  theme?: typeof config;
};

// Simple theme provider component for web
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ 
  children, 
  theme = config 
}) => {
  return <>{children}</>;
};

// Hook to use theme
export const useTheme = () => {
  return config;
};