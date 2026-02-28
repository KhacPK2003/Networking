import { useMemo } from "react";
import { config, Variant } from "@/theme/configs";
import {
  generateFontColors,
  generateFontSizes,
  staticFontStyles,
} from "@/theme/fonts";
import { generateBackgroundColors } from "@/theme/backgrounds";
import {
  generateBorderColors,
  generateBorderRadius,
  generateBorderWidths,
} from "@/theme/borders";
import { generateGutters } from "@/theme/gutters";
import { componentGenerators } from "@/theme/components";
import layout from "@/theme/layout";

import type { Theme } from "@/theme/types/theme";

export const useTheme = (variant: Variant = Variant.DARK): Theme => {
  return useMemo(() => {
    const variantConfig =
      variant === Variant.DARK ? config.variants[variant] : undefined;

    const colors = { ...config.colors, ...variantConfig?.colors };

    const themeConfig = variantConfig
      ? {
          ...config,
          ...variantConfig,
          colors,
          fonts: { ...config.fonts, colors },
          backgrounds: colors,
          borders: { ...config.borders, colors },
        }
      : config;

    const fonts = {
      ...generateFontSizes(),
      ...generateFontColors(themeConfig),
      ...staticFontStyles,
    };

    const backgrounds = generateBackgroundColors(themeConfig);
    const borders = {
      ...generateBorderColors(themeConfig),
      ...generateBorderRadius(),
      ...generateBorderWidths(),
    };
    const gutters = generateGutters();

    const theme: Theme = {
      colors,
      variant,
      layout,
      gutters,
      fonts,
      backgrounds,
      borders,
      components: componentGenerators({
        layout,
        backgrounds,
        fonts,
        gutters,
        borders,
        colors,
        variant,
      }),
    };

    return theme;
  }, [variant]);
};
