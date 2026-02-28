import type { ThemeConfiguration } from "@/theme/types/config";

export const enum Variant {
  DARK = "dark",
}

const defaultColors = {
  transparent: "transparent",
  black: "#000000",
  gray80: "#5B5757",

  /* Gray */
  gray100: "#F8F9FF",
  gray200: "#EFEFEF",
  gray300: "#D5D5D5",
  gray400: "#BBBBBB",
  gray500: "#949494",
  gray600: "#6E6E6E",
  gray700: "#353535",
  gray800: "#212121",
  gray900: "#101010",

  softBlue: "#a6badd",
  whiteBlue: "#EEF5FF",
  red: "#EF4444",
};

const colorsLight = {
  appBackground: "#FFFFFF",
  white: "#FFFFFF",
  primary: "#002D6D",
  secondary: "#FF5050",
  spanishGray: "#b3b3b3",
  brown: "#B45309",

  success700: "#15803D",
  success500: "#22C55E",
  success200: "#BBF7D0",
  success50: "#F0FDF4",

  error: "#DC2626",
  text: "#150000",
  textWhite: "#FFFFFF",
  textPlaceholder: "#6B7280",
  textHeadingSecondary: "#374151",
  textHeadingPrimary: "#111827",
  textSubHeadlineBrand: "#002D6D",
  textHeadingInverted: "#FFFFFF",
  textPrimary: "#090E42",
  textDisabled: "#D1D5DB",
  textErrorPrimary: "#DC2626",
  textBodyInverted: "#E5E7EB",
  textErrorSecondary: "#EF4444",
  textBody: "#4B5563",
  textSemanticWarning500: "#F59E0B",
  textDangerHighlight: "#CC1714",

  footerHeadlineInverted: "#FFFFFF",
  backgroundsSecondary: "#F9FAFB",
  bgPrimary: "#FFFFFF",
  bgButtonPrimary: "#002D6D",
  bgButtonPrimaryDisabled: "#F3F4F6",
  fgButtonPrimaryDisabled: "#9CA3AF",
  fgButtonPrimary: "#FFFFFF",
  fgButtonSecondary: "#002D6D",
  bgButtonSecondary: "#FF5050",
  bgBrandQuaternary: "#002D6D",
  bgPrimaryCards: "#FFFFFF",
  bgBrandSecondary: "#C6D8E8",
  bgSuccessSenary: "#15803D",
  bgSenary: "#D1D5DB",
  bgDot: "#FF5050",
  bgQuaternary: "#E5E7EB",
  bgTertiary: "#F3F4F6",
  bgErrorPrimary: "#FEF2F2",
  bgYellowBage: "#FFFBEB",
  bgSemanticBrand50: "#E8F0F9",

  borderPrimary: "#D1D5DB",
  borderSecondary: "#E5E7EB",
  borderBrand: "#002D6D",
  borderTertiary: "#F3F4F6",
  borderLight: "#BDC1CF",
  borderDisabled: "#D1D5DB",
  borderError: "#DC2626",
  borderYellowBage: "#FDE68A",
  borderNeutral: "#0000000F",

  iconQuaternary: "#4B5563",
  iconLocation: "#6B7280",
  iconPrimary: "#111827",

  paleSilver: "#D1D5DB",
  inputBorder: "#BDC1CF",
  ...defaultColors,
} as const;

const colorsDark = {
  appBackground: "#FFFFFF",
  white: "#FFFFFF",
  primary: "#002D6D",
  secondary: "#FF5050",
  text: "#150000",
  textWhite: "#FFFFFF",
  textHeadingPrimary: "#111827",

  error: "#DC2626",
  backgroundPrimary: "#FFFFFF",
  backgroundsSecondary: "#F9FAFB",
  borderSecondary: "#E5E7EB",
  paleSilver: "#D1D5DB",
  inputBorder: "#BDC1CF",
  ...defaultColors,
} as const;

const sizes = [
  0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 28, 30, 32, 34, 36,
  38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74,
  76, 78, 80, 82, 84, 86, 88, 90, 100,
] as const;

export const config = {
  colors: colorsLight,
  fonts: {
    sizes,
    colors: colorsLight,
  },
  gutters: sizes,
  backgrounds: colorsLight,
  borders: {
    widths: [1, 2],
    radius: sizes,
    colors: colorsLight,
  },
  variants: {
    dark: {
      colors: colorsDark,
      fonts: {
        colors: colorsDark,
      },
      backgrounds: colorsDark,
      borders: {
        colors: colorsDark,
      },
    },
  },
} as const satisfies ThemeConfiguration;
