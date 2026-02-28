import { kHeight, kWidth } from "@/constants/device";
import { config } from "@/theme/configs";

// Web CSS styles type
type CSSStyle = React.CSSProperties;

export default {
  /* Column Layouts */
  column: {
    display: "flex",
    flexDirection: "column",
  } as CSSStyle,
  columnReverse: {
    display: "flex",
    flexDirection: "column-reverse",
  } as CSSStyle,
  colCenter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  } as CSSStyle,
  colVCenter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  } as CSSStyle,
  colHCenter: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  } as CSSStyle,
  
  /* Row Layouts */
  row: {
    display: "flex",
    flexDirection: "row",
  } as CSSStyle,
  rowReverse: {
    display: "flex",
    flexDirection: "row-reverse",
  } as CSSStyle,
  rowCenter: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  } as CSSStyle,
  rowVCenter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  } as CSSStyle,
  rowHCenter: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  } as CSSStyle,
  rowBetween: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  } as CSSStyle,

  /* Default Layouts */
  col: {
    display: "flex",
    flexDirection: "column",
  } as CSSStyle,
  colReverse: {
    display: "flex",
    flexDirection: "column-reverse",
  } as CSSStyle,
  wrap: {
    flexWrap: "wrap",
  } as CSSStyle,
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  } as CSSStyle,
  itemsCenter: {
    alignItems: "center",
  } as CSSStyle,
  itemsStart: {
    alignItems: "flex-start",
  } as CSSStyle,
  itemsStretch: {
    alignItems: "stretch",
  } as CSSStyle,
  itemsEnd: {
    alignItems: "flex-end",
  } as CSSStyle,
  justifyCenter: {
    justifyContent: "center",
  } as CSSStyle,
  justifyAround: {
    justifyContent: "space-around",
  } as CSSStyle,
  justifyBetween: {
    justifyContent: "space-between",
  } as CSSStyle,
  justifyEnd: {
    justifyContent: "flex-end",
  } as CSSStyle,
  justifyStart: {
    justifyContent: "flex-start",
  } as CSSStyle,
  alignSelfEnd: {
    alignSelf: "flex-end",
  } as CSSStyle,
  alignSelfStart: {
    alignSelf: "flex-start",
  } as CSSStyle,
  alignSelfCenter: {
    alignSelf: "center",
  } as CSSStyle,
  
  /* Sizes Layouts */
  flex_1: {
    flex: 1,
  } as CSSStyle,
  flexGrow: {
    flexGrow: 1,
  } as CSSStyle,
  flexShrink: {
    flexShrink: 1,
  } as CSSStyle,
  fullSize: {
    height: "100%",
    width: "100%",
  } as CSSStyle,
  fullWidth: {
    width: "100%",
  } as CSSStyle,
  fullHeight: {
    height: "100%",
  } as CSSStyle,
  width: {
    width: kWidth,
  } as CSSStyle,
  height: {
    height: kHeight,
  } as CSSStyle,
  fill: {
    width: "100%",
    height: "100%",
  } as CSSStyle,
  fillAbsolute: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999,
  } as CSSStyle,
  fullDevice: {
    width: kWidth,
    height: kHeight,
  } as CSSStyle,
  imgBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  } as CSSStyle,
  
  /* Positions */
  relative: {
    position: "relative",
  } as CSSStyle,
  absolute: {
    position: "absolute",
  } as CSSStyle,
  top0: {
    top: 0,
  } as CSSStyle,
  bottom0: {
    bottom: 0,
  } as CSSStyle,
  left0: {
    left: 0,
  } as CSSStyle,
  right0: {
    right: 0,
  } as CSSStyle,
  z1: {
    zIndex: 1,
  } as CSSStyle,
  z10: {
    zIndex: 10,
  } as CSSStyle,
  z999: {
    zIndex: 999,
  } as CSSStyle,
  overHidden: {
    overflow: "hidden",
  } as CSSStyle,
  
  /* Shadow Layout */
  boxShadow: {
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.09)",
  } as CSSStyle,
  boxShadow1: {
    boxShadow: "rgba(40, 40, 40, 1) 1.5px 1.5px",
  } as CSSStyle,
  boxShadow3: {
    boxShadow: "rgba(40, 40, 40, 1) 3px 3px",
  } as CSSStyle,
  underline: {
    borderBottomWidth: 1,
    alignSelf: "flex-start",
  } as CSSStyle,
} as const satisfies Record<string, CSSStyle>;
