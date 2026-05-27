/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface RibLogoProps {
  className?: string;
  size?: number;
}

export default function RibLogo({ className = '', size = 48 }: RibLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={`select-none ${className}`}
      aria-label="Logo de Costilla de Cerdo"
    >
      <defs>
        {/* Rich dimensional metallic/meat gradients that stimulate appetite */}
        <linearGradient id="ribMeatGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff4d3d" />
          <stop offset="50%" stopColor="#ea2b1f" />
          <stop offset="100%" stopColor="#961109" />
        </linearGradient>
        <linearGradient id="ribBoneGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="70%" stopColor="#ebdcd0" />
          <stop offset="100%" stopColor="#c5b0a0" />
        </linearGradient>
        <linearGradient id="bbqGlazeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f26419" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#300300" stopOpacity="0.9" />
        </linearGradient>
        <filter id="ribGlow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#ea2b1f" floodOpacity="0.15" />
        </filter>
      </defs>

      <g filter="url(#ribGlow)">
        {/* STYLIZED MEATY COSTILLA RACK (Main Body) */}
        {/* Curvaceous Rack body styled beautifully */}
        <path
          d="M 22 45 
             C 25 38, 30 36, 38 35 
             C 48 34, 52 38, 58 42 
             C 64 46, 75 42, 85 32 
             C 88 29, 90 28, 92 31 
             C 94 34, 91 40, 83 48 
             C 74 57, 65 62, 55 64 
             C 45 66, 32 64, 25 58 
             C 22 55, 21 49, 22 45 Z"
          fill="url(#ribMeatGradient)"
        />

        {/* DISTINCT EXPOSED BONE 1 (Infinitely crisp vector paths) */}
        <path
          d="M 20 44 
             C 17 45, 14 43, 11 41 
             C 9 40, 7 40, 6 42 
             C 5 44, 7 47, 9 48 
             C 12 50, 16 51, 19 49 
             Z"
          fill="url(#ribBoneGradient)"
          stroke="#9f8572"
          strokeWidth="0.5"
        />

        {/* DISTINCT EXPOSED BONE 2 */}
        <path
          d="M 23 54 
             C 19 56, 15 55, 12 53 
             C 10 52, 8 52, 7 54 
             C 6 56, 8 59, 10 60 
             C 13 62, 18 62, 22 59 
             Z"
          fill="url(#ribBoneGradient)"
          stroke="#9f8572"
          strokeWidth="0.5"
        />

        {/* DISTINCT EXPOSED BONE 3 (Fanning Ribs) */}
        <path
          d="M 83 44
             C 86 42, 89 39, 92 36
             C 93 35, 95 35, 96 37
             C 97 39, 95 42, 93 44
             C 90 47, 86 49, 84 46
             Z"
          fill="url(#ribBoneGradient)"
          stroke="#9f8572"
          strokeWidth="0.5"
        />

        {/* GLISTENING GLOSS BBQ GLAZE (Deep Caramel Accents) */}
        <path
          d="M 28 42
             C 34 38, 45 37, 52 40
             C 60 43, 68 49, 78 44
             C 73 51, 62 55, 52 56
             C 40 57, 32 54, 28 42 Z"
          fill="url(#bbqGlazeGradient)"
        />

        {/* PARRILLA BRAND SEAR MARKS (Diagonal grill lines to signify authenticity) */}
        <line x1="38" y1="36" x2="42" y2="58" stroke="#3d0501" strokeWidth="2.5" strokeLinecap="round" opacity="0.65" />
        <line x1="50" y1="38" x2="54" y2="60" stroke="#3d0501" strokeWidth="2.5" strokeLinecap="round" opacity="0.65" />
        <line x1="62" y1="41" x2="66" y2="58" stroke="#3d0501" strokeWidth="2.5" strokeLinecap="round" opacity="0.65" />

        {/* SUNRISE APPETITE ACCENT LIGHT (Gleaming white curve highlighting the sticky BBQ syrup) */}
        <path
          d="M 33 38 
             C 42 36, 50 37, 56 42"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.55"
        />
      </g>
    </svg>
  );
}
