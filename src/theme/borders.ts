import { config } from "@/theme/configs";

import type {
  BorderColors,
  BorderWidths,
  BorderRadius,
  BorderTopRadius,
  BorderBottomRadius,
} from "@/theme/types/borders";
import type { UnionConfiguration } from "@/theme/types/config";

// Web CSS styles type
type CSSStyle = React.CSSProperties;

export const generateBorderColors = (configuration: UnionConfiguration) => {
  return Object.entries(configuration.borders.colors ?? {}).reduce(
    (acc, [key, value]) => {
      return Object.assign(acc, {
        [`${key}`]: {
          borderColor: value,
        },
      });
    },
    {} as BorderColors,
  );
};

export const generateBorderRadius = () => {
  return config.borders.radius.reduce(
    (acc, radius) => {
      return Object.assign(acc, {
        [`rounded_${radius}`]: {
          borderRadius: radius,
        },
        [`roundedTop_${radius}`]: {
          borderTopLeftRadius: radius,
          borderTopRightRadius: radius,
        },
        [`roundedBottom_${radius}`]: {
          borderBottomLeftRadius: radius,
          borderBottomRightRadius: radius,
        },
      });
    },
    {} as BorderRadius & BorderTopRadius & BorderBottomRadius,
  );
};

export const generateBorderWidths = () => {
  return config.borders.widths.reduce((acc, width) => {
    return Object.assign(acc, {
      [`w_${width}`]: {
        borderWidth: width,
      },
      [`wTop_${width}`]: {
        borderTopWidth: width,
      },
      [`wBottom_${width}`]: {
        borderBottomWidth: width,
      },
      [`wLeft_${width}`]: {
        borderLeftWidth: width,
      },
      [`wRight_${width}`]: {
        borderRightWidth: width,
      },
    });
  }, {} as BorderWidths);
};

export const staticBorderStyles = {} as const satisfies Record<
  string,
  CSSStyle
>;
