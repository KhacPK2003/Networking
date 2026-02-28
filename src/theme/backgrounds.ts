import type { UnionConfiguration } from "@/theme/types/config";
import type { Backgrounds } from "@/theme/types/backgrounds";

// Web CSS styles type
type CSSStyle = React.CSSProperties;

export const generateBackgroundColors = (configuration: UnionConfiguration) => {
  return Object.entries(configuration.backgrounds ?? {}).reduce(
    (acc, [key, value]) => {
      return Object.assign(acc, {
        [`${key}`]: {
          backgroundColor: value,
        } as CSSStyle,
      });
    },
    {} as Backgrounds,
  );
};

export const staticBackgroundStyles = {} as const satisfies Record<
  string,
  CSSStyle
>;
