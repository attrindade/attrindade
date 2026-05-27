import React from 'react';

export const NoiseFilter = () => {
  return (
    <svg className="pointer-events-none fixed isolate h-0 w-0" aria-hidden="true">
      <filter id="noiseFilter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.65"
          numOctaves="3"
          stitchTiles="stitch"
        />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1
                  0 0 0 0 1
                  0 0 0 0 1
                  0 0 0 0.15 0"
        />
      </filter>
    </svg>
  );
};
