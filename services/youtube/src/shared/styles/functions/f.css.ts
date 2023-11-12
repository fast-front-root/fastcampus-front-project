import { vars } from "@fastcampus/themes";
import { style } from "@vanilla-extract/css";

// Flex
export const flex = style({
  display: "flex",
});

export const alignStart = style({
  alignItems: "flex-start",
});

export const alignEnd = style({
  alignItems: "flex-end",
});

export const alignCenter = style({
  alignItems: "center",
});

export const justifyStart = style({
  justifyContent: "flex-start",
});

export const justifyEnd = style({
  justifyContent: "flex-end",
});

export const justifyCenter = style({
  justifyContent: "center",
});

export const justifyBetween = style({
  justifyContent: "space-between",
});

export const justifyAround = style({
  justifyContent: "space-around",
});

export const directionRow = style({
  flexDirection: "row",
});

export const directionRowReverse = style({
  flexDirection: "row-reverse",
});

export const directionColumn = style({
  flexDirection: "column",
});

export const directionColumnReverse = style({
  flexDirection: "column-reverse",
});

export const flexCenterBox = style([flex, alignCenter, justifyCenter]);

// Width
export const wFull = style({
  width: "100%",
});

export const wScreen = style({
  width: "100vw",
});

// Height
export const hFull = style({
  height: "100%",
});

export const hScreen = style({
  height: "100vh",
});

// Position
export const pAbsolute = style({
  position: "absolute",
});

export const pRelative = style({
  position: "relative",
});

export const pFixed = style({
  position: "fixed",
});

export const pStatic = style({
  position: "static",
});

export const pSticky = style({
  position: "sticky",
});

// Typo
export const textSelectable = style({
  WebkitUserSelect: "text",
  MozUserSelect: "text",
  msUserSelect: "text",
});

const truncate = style({
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  wordBreak: "break-all",
});

export const truncate1 = style([
  truncate,
  {
    WebkitLineClamp: 1,
  },
]);

export const truncate2 = style([
  truncate,
  {
    WebkitLineClamp: 2,
  },
]);

// Color
export const color = {
  static: {
    light: Object.entries(vars.colors.$static.light).reduce(
      (acc, [key, value]) => {
        const color = Object.entries(value).reduce((acc, [key, value]) => {
          return {
            ...acc,
            [key]: style({ color: value }),
          };
        }, {});

        return {
          ...acc,
          [key]: color,
        };
      },
      {} as {
        [key in keyof (typeof vars)["colors"]["$static"]["light"]]: string;
      },
    ),
    dark: Object.entries(vars.colors.$static.dark).reduce(
      (acc, [key, value]) => {
        const color = Object.entries(value).reduce((acc, [key, value]) => {
          return {
            ...acc,
            [key]: style({ color: value }),
          };
        }, {});

        return {
          ...acc,
          [key]: color,
        };
      },
      {} as {
        [key in keyof (typeof vars)["colors"]["$static"]["dark"]]: string;
      },
    ),
  },
  scale: Object.entries(vars.colors.$scale).reduce(
    (acc, [key, value]) => {
      const color = Object.entries(value).reduce((acc, [key, value]) => {
        return {
          ...acc,
          [key]: style({ color: value }),
        };
      }, {});

      return {
        ...acc,
        [key]: color,
      };
    },
    {} as {
      [key in keyof (typeof vars)["colors"]["$scale"]]: string;
    },
  ),
};
