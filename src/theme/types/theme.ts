import { componentGenerators } from "@/theme/components";
import layout from "@/theme/layout";

import type { Colors } from "@/theme/types/colors";
import type { Backgrounds } from "./backgrounds";
import type { Borders } from "./borders";
import type { Variant } from "./config";
import type { Fonts } from "./fonts";
import type { Gutters } from "./gutters";

export type Theme = {
  colors: Colors;
  variant: Variant;
  layout: typeof layout;
  gutters: Gutters;
  fonts: Fonts;
  backgrounds: Backgrounds;
  borders: Borders;
  components: ReturnType<typeof componentGenerators>;
};

export type ComponentTheme = Omit<Theme, "components">;
