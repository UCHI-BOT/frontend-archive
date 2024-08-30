import React from "react";
import { EmojiProps } from "./types";

const WarningEmoji = React.forwardRef<SVGSVGElement, EmojiProps>(
  ({ size = 20, ...props }, ref) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        {...props}
      >
        <rect width="72" height="72" fill="url(#WarningEmojiPattern)" />
        <defs>
          <pattern
            id="WarningEmojiPattern"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use href="#WarningEmojiImage" transform="scale(0.0138889)" />
          </pattern>
          <image
            id="WarningEmojiImage"
            width="72"
            height="72"
            href="data:image/png;base64,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"
          />
        </defs>
      </svg>
    );
  },
);

export { WarningEmoji };