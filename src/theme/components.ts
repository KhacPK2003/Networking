import type { ComponentTheme } from "@/theme/types/theme";

// Web CSS styles type
type CSSStyle = React.CSSProperties;

interface AllStyle {
  [key: string]: AllStyle | CSSStyle;
}

export const componentGenerators = ({
  layout,
  backgrounds,
  fonts,
}: ComponentTheme) => {
  return {
    buttonCircle: {
      ...layout.justifyCenter,
      ...layout.itemsCenter,
      ...backgrounds.primary,
      ...fonts.gray400,
      height: 70,
      width: 70,
      borderRadius: 35,
    },
    circle250: {
      borderRadius: 140,
      height: 250,
      width: 250,
    },
  } as const satisfies AllStyle;
};
