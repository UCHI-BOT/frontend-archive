import React from "react";
import { EmojiProps } from "./types";

const PersonLiftingWeightsEmoji = React.forwardRef<SVGSVGElement, EmojiProps>(
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
        <rect width="72" height="72" fill="url(#PersonLiftingWeightsPattern)" />
        <defs>
          <pattern
            id="PersonLiftingWeightsPattern"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              href="#PersonLiftingWeightsImage"
              transform="scale(0.0138889)"
            />
          </pattern>
          <image
            id="PersonLiftingWeightsImage"
            width="72"
            height="72"
            href="data:image/png;base64,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"
          />
        </defs>
      </svg>
    );
  },
);

export { PersonLiftingWeightsEmoji };