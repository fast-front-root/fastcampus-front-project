import { f } from "@/src/shared/styles/functions";
import { vars } from "@fastcampus/themes";
import { style } from "@vanilla-extract/css";

export const wrapper = style([
  f.wFull,
  {
    padding: "0 0.5rem 2.5rem",
  },
]);

export const link = style([
  f.wFull,
  {
    textDecoration: "inherit",
    color: "inherit",
    display: "block",
  },
]);

export const thumbnailWrapper = style([f.pRelative, f.wFull, f.hFull]);

export const image = style([
  f.wFull,
  f.hFull,
  {
    backgroundColor: "transparent",
    objectFit: "cover",
    visibility: "inherit",
    borderRadius: "0.75rem",
    opacity: 1,
    transition: "opacity 200ms ease-in",

    selectors: {
      [`${link}:hover &`]: {
        opacity: 0,
      },
    },
  },
]);

export const video = style([
  f.wFull,
  f.hFull,
  f.pAbsolute,
  {
    zIndex: 2,
    top: 0,
    left: 0,
  }
]);


export const contentsWrapper = style([
  f.wFull,
  {
    paddingTop: "0.75rem",
  },
]);

export const title = style([
  f.truncate2,
  f.wFull,
  f.color.scale.gray[900],
  {
    fontSize: "1rem",
    lineHeight: "1.375rem",
    fontWeight: 500,
    maxHeight: "2.75rem",
  },
]);

export const metadataWrapper = style({
  paddingTop: "0.25rem",
});

export const metadataText = style([
  f.truncate1,
  f.color.scale.gray[600],
  {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    fontWeight: 400,
  },
]);

export const metadataLinkText = style([
  metadataText,
  {
    selectors: {
      "&:hover": {
        color: vars.colors.$scale.gray[900],
      },
    },
  },
]);
