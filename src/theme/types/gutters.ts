import { config } from "@/theme/configs";

import type {
  ArrayValue,
  RemoveAfterSeparator,
  RemoveBeforeSeparator,
  ToNumber,
} from "./common";

type Margins =
  | "margin"
  | "marginBottom"
  | "marginTop"
  | "marginRight"
  | "marginLeft"
  | "marginVertical"
  | "marginHorizontal";

type MarginKeys = `${Margins}_${ArrayValue<typeof config.gutters>}`;

type MarginGutters = {
  [key in MarginKeys]: {
    [K in Extract<RemoveAfterSeparator<key>, Margins>]: ToNumber<
      RemoveBeforeSeparator<key>
    >;
  };
};

type Paddings =
  | "padding"
  | "paddingBottom"
  | "paddingTop"
  | "paddingRight"
  | "paddingLeft"
  | "paddingVertical"
  | "paddingHorizontal";

type PaddingKeys = `${Paddings}_${ArrayValue<typeof config.gutters>}`;

type PaddingGutters = {
  [key in PaddingKeys]: {
    [K in Extract<RemoveAfterSeparator<key>, Paddings>]: ToNumber<
      RemoveBeforeSeparator<key>
    >;
  };
};

type Gaps = `gap_${ArrayValue<typeof config.gutters>}`;

type GapGutters = {
  [key in Gaps]: {
    gap: ToNumber<RemoveBeforeSeparator<key>>;
  };
};

type Width = `width_${ArrayValue<typeof config.gutters>}`;
type Height = `height_${ArrayValue<typeof config.gutters>}`;
type Top = `top_${ArrayValue<typeof config.gutters>}`;
type Right = `right_${ArrayValue<typeof config.gutters>}`;
type Bottom = `bottom_${ArrayValue<typeof config.gutters>}`;
type Left = `left_${ArrayValue<typeof config.gutters>}`;

type WidthGutters = {
  [key in Width]: {
    width: ToNumber<RemoveBeforeSeparator<key>>;
  };
};

type HeightGutters = {
  [key in Height]: {
    height: ToNumber<RemoveBeforeSeparator<key>>;
  };
};
type TopGutters = {
  [key in Top]: {
    top: ToNumber<RemoveBeforeSeparator<key>>;
  };
};
type RightGutters = {
  [key in Right]: {
    right: ToNumber<RemoveBeforeSeparator<key>>;
  };
};
type BottomGutters = {
  [key in Bottom]: {
    bottom: ToNumber<RemoveBeforeSeparator<key>>;
  };
};
type LeftGutters = {
  [key in Left]: {
    left: ToNumber<RemoveBeforeSeparator<key>>;
  };
};

export type Gutters = MarginGutters &
  PaddingGutters &
  GapGutters &
  WidthGutters &
  HeightGutters &
  TopGutters &
  RightGutters &
  BottomGutters &
  LeftGutters;
