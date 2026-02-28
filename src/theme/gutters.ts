import { config } from "@/theme/configs";
import type { Gutters } from "@/theme/types/gutters";
import { scale } from "@/utils/common/devices/scale";

// Web CSS styles type
type CSSStyle = React.CSSProperties;

export const generateGutters = (): Gutters => {
  return config.gutters.reduce((acc, curr) => {
    return Object.assign(acc, {
      [`margin_${curr}`]: {
        margin: scale(curr),
      },
      [`marginBottom_${curr}`]: {
        marginBottom: scale(curr),
      },
      [`marginTop_${curr}`]: {
        marginTop: scale(curr),
      },
      [`marginRight_${curr}`]: {
        marginRight: scale(curr),
      },
      [`marginLeft_${curr}`]: {
        marginLeft: scale(curr),
      },
      [`marginVertical_${curr}`]: {
        marginTop: scale(curr),
        marginBottom: scale(curr),
      } as CSSStyle,
      [`marginHorizontal_${curr}`]: {
        marginLeft: scale(curr),
        marginRight: scale(curr),
      } as CSSStyle,
      [`padding_${curr}`]: {
        padding: scale(curr),
      },
      [`paddingBottom_${curr}`]: {
        paddingBottom: scale(curr),
      },
      [`paddingTop_${curr}`]: {
        paddingTop: scale(curr),
      },
      [`paddingRight_${curr}`]: {
        paddingRight: scale(curr),
      },
      [`paddingLeft_${curr}`]: {
        paddingLeft: scale(curr),
      },
      [`paddingVertical_${curr}`]: {
        paddingTop: scale(curr),
        paddingBottom: scale(curr),
      } as CSSStyle,
      [`paddingHorizontal_${curr}`]: {
        paddingLeft: scale(curr),
        paddingRight: scale(curr),
      } as CSSStyle,
      [`gap_${curr}`]: {
        gap: scale(curr),
      },
      [`width_${curr}`]: {
        width: scale(curr),
      },
      [`height_${curr}`]: {
        height: scale(curr),
      },
      [`top_${curr}`]: {
        top: scale(curr),
      },
      [`right_${curr}`]: {
        right: scale(curr),
      },
      [`bottom_${curr}`]: {
        bottom: scale(curr),
      },
      [`left_${curr}`]: {
        left: scale(curr),
      },
    });
  }, {} as Gutters);
};

export const staticGutterStyles = {} as const satisfies Record<
  string,
  CSSStyle
>;
