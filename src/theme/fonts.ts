import type { FontColors, FontSizes } from "@/theme/types/fonts";
import type { UnionConfiguration } from "@/theme/types/config";
import { config } from "@/theme/configs";
import { scale } from "@/utils/common/devices/scale";

// Web CSS styles type for text
type CSSTextStyle = React.CSSProperties;

export const generateFontColors = (configuration: UnionConfiguration) => {
  return Object.entries(configuration.fonts.colors ?? {}).reduce(
    (acc, [key, value]) => {
      return Object.assign(acc, {
        [`${key}`]: {
          color: value,
        },
      });
    },
    {} as FontColors,
  );
};

export const generateFontSizes = () => {
  return config.fonts.sizes.reduce((acc, size) => {
    return Object.assign(acc, {
      [`size_${size}`]: {
        fontSize: scale(size),
      },
    });
  }, {} as FontSizes);
};

export const staticFontStyles = {
  bold: {
    fontWeight: "bold",
  } as CSSTextStyle,
  uppercase: {
    textTransform: "uppercase",
  } as CSSTextStyle,
  capitalize: {
    textTransform: "capitalize",
  } as CSSTextStyle,
  alignCenter: {
    textAlign: "center",
  } as CSSTextStyle,
  alignRight: {
    textAlign: "right",
  } as CSSTextStyle,
  alignLeft: {
    textAlign: "left",
  } as CSSTextStyle,
} as const satisfies Record<string, CSSTextStyle>;
