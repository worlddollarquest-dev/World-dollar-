import React from 'react';

interface WorldDollarLogoProps {
  variant?: 'full' | 'horizontal' | 'icon';
  theme?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  className?: string;
}

/**
 * Official WorldDollarQuest Logo component
 * Accurately vectorized from the brand identity:
 * - 3D Globe with green continents and graticule grid
 * - Golden orbital arrow looping diagonally up and to the right
 * - Dimensional emerald origami ribbon "W"
 * - "WorldDollar" in deep forest pine green + "Quest" in golden amber
 * - Tagline: "Learn • Build • Earn • From Anywhere"
 */
export const WorldDollarLogo: React.FC<WorldDollarLogoProps> = ({
  variant = 'horizontal',
  theme = 'light',
  size = 'md',
  showTagline = true,
  className = '',
}) => {
  const isDark = theme === 'dark';

  // Size mappings
  const dimensions = {
    sm: {
      icon: 'h-8 w-8',
      text: 'text-lg',
      tagline: 'text-[9px]',
      gap: 'gap-2.5',
    },
    md: {
      icon: 'h-10 w-10 sm:h-11 sm:w-11',
      text: 'text-xl sm:text-2xl',
      tagline: 'text-[10px] sm:text-[11px]',
      gap: 'gap-3',
    },
    lg: {
      icon: 'h-14 w-14 sm:h-16 sm:w-16',
      text: 'text-2xl sm:text-3xl lg:text-4xl',
      tagline: 'text-xs sm:text-sm',
      gap: 'gap-4',
    },
    xl: {
      icon: 'h-20 w-20 sm:h-24 sm:w-24',
      text: 'text-4xl sm:text-5xl',
      tagline: 'text-sm sm:text-base',
      gap: 'gap-5',
    },
  }[size];

  // The high-fidelity Vector Icon / Emblem
  const Emblem = (
    <svg
      viewBox="0 0 160 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${dimensions.icon} shrink-0 transition-transform duration-300 group-hover:scale-105`}
      aria-label="WorldDollarQuest Emblem"
    >
      <defs>
        {/* Globe Oceans Gradient */}
        <radialGradient id="wdqGlobeBase" cx="45%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="45%" stopColor="#10B981" />
          <stop offset="85%" stopColor="#059669" />
          <stop offset="100%" stopColor="#047857" />
        </radialGradient>

        {/* Globe Landmass Gradient */}
        <linearGradient id="wdqContinent" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A7F3D0" />
          <stop offset="60%" stopColor="#6EE7B7" />
          <stop offset="100%" stopColor="#34D399" />
        </linearGradient>

        {/* Golden Orbit Gradient */}
        <linearGradient id="wdqGoldenOrbit" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="35%" stopColor="#FBBF24" />
          <stop offset="70%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>

        {/* Ribbon 'W' Front Facets (Vibrant Emerald) */}
        <linearGradient id="wdqRibbonFront" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="40%" stopColor="#059669" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>

        {/* Ribbon 'W' Left Curve Light Accent */}
        <linearGradient id="wdqRibbonHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>

        {/* Ribbon 'W' Crease / Under-fold Shadows */}
        <linearGradient id="wdqRibbonShadow" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#064E3B" />
          <stop offset="60%" stopColor="#022C22" />
          <stop offset="100%" stopColor="#011F17" />
        </linearGradient>

        {/* Outer Glow / Soft Drop Shadow */}
        <filter id="wdqSoftGlow" x="-10%" y="-10%" width="130%" height="130%" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#064E3B" floodOpacity="0.2" />
        </filter>
      </defs>

      {/* 1. BACK ORBIT SEGMENT (passing behind globe at upper-left) */}
      <path
        d="M 24 58 C 22 45 32 30 52 24 C 70 19 92 24 106 36"
        stroke="url(#wdqGoldenOrbit)"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
      />

      {/* 2. THE GLOBE */}
      <g filter="url(#wdqSoftGlow)">
        {/* Base Sphere */}
        <circle cx="68" cy="50" r="36" fill="url(#wdqGlobeBase)" />

        {/* Globe Inner Glow Rim */}
        <circle
          cx="68"
          cy="50"
          r="35"
          fill="none"
          stroke="#ECFDF5"
          strokeWidth="1.5"
          opacity="0.35"
        />

        {/* Latitude & Longitude Subtle Graticules */}
        <path
          d="M 32 50 Q 68 36 104 50"
          fill="none"
          stroke="#D1FAE5"
          strokeWidth="1.2"
          opacity="0.3"
        />
        <path
          d="M 36 63 Q 68 53 100 63"
          fill="none"
          stroke="#D1FAE5"
          strokeWidth="1.2"
          opacity="0.3"
        />
        <path
          d="M 36 37 Q 68 27 100 37"
          fill="none"
          stroke="#D1FAE5"
          strokeWidth="1.2"
          opacity="0.3"
        />
        <ellipse
          cx="68"
          cy="50"
          rx="18"
          ry="35.5"
          fill="none"
          stroke="#D1FAE5"
          strokeWidth="1.2"
          opacity="0.3"
        />
        <line
          x1="68"
          y1="14"
          x2="68"
          y2="86"
          stroke="#D1FAE5"
          strokeWidth="1.2"
          opacity="0.3"
        />

        {/* Stylized Continents (Europe, Africa, Americas shapes) */}
        {/* Eurasia & Africa */}
        <path
          d="M 58 30 C 62 26 69 25 76 27 C 82 29 86 33 82 38 C 80 41 84 44 87 45 C 91 46 95 43 97 45 C 99 48 94 54 90 56 C 86 58 84 65 79 69 C 75 72 71 67 69 63 C 67 58 64 56 61 57 C 58 58 57 53 59 48 C 61 44 57 40 56 36 Z"
          fill="url(#wdqContinent)"
          opacity="0.9"
        />
        {/* Americas hint on the left */}
        <path
          d="M 35 34 C 38 31 43 32 46 36 C 48 40 45 44 43 47 C 41 50 43 55 45 59 C 43 63 38 67 37 62 C 35 56 34 45 35 34 Z"
          fill="url(#wdqContinent)"
          opacity="0.85"
        />
        {/* Island dots */}
        <circle cx="89" cy="32" r="2" fill="url(#wdqContinent)" />
        <circle cx="50" cy="27" r="1.5" fill="url(#wdqContinent)" />
      </g>

      {/* 3. FOREGROUND GOLDEN ORBIT & ASCENDING ARROW */}
      {/* Swooping golden orbital ring looping around lower left and up to top-right */}
      <path
        d="M 18 78 C 14 96 38 107 72 98 C 96 92 118 74 130 52 C 134 44 138 34 140 22"
        stroke="url(#wdqGoldenOrbit)"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />

      {/* Golden Arrow Head at Top Right (pointing 45° up and right) */}
      <path
        d="M 148 10 L 124 23 L 135 27 L 129 38 L 138 42 L 144 31 L 147 42 Z"
        fill="url(#wdqGoldenOrbit)"
      />

      {/* 4. THE 3D ORIGAMI RIBBON 'W' (Dominant Brand Monogram) */}
      <g filter="url(#wdqSoftGlow)">
        {/* Back Crease Shadows of the W (giving 3D fold realism) */}
        <path
          d="M 33 118 L 47 68 L 59 74 L 43 124 Z"
          fill="url(#wdqRibbonShadow)"
          opacity="0.85"
        />
        <path
          d="M 77 122 L 95 62 L 107 68 L 89 126 Z"
          fill="url(#wdqRibbonShadow)"
          opacity="0.85"
        />

        {/* Fold 1: Left Wing / Outer Stem */}
        <path
          d="M 19 86 C 16 70 24 57 37 57 C 46 57 52 64 49 76 L 39 116 C 36 126 27 127 22 121 C 17 114 18 98 19 86 Z"
          fill="url(#wdqRibbonHighlight)"
        />

        {/* Fold 2: Left-to-Center Diagonal Ribbon */}
        <path
          d="M 37 57 C 47 57 57 65 65 82 L 77 106 L 65 116 L 49 76 C 45 68 40 60 37 57 Z"
          fill="url(#wdqRibbonFront)"
        />

        {/* Fold 3: Center Bottom Fold & Rise to Right Peak */}
        <path
          d="M 65 116 C 71 124 81 123 87 115 L 112 70 C 117 60 125 57 132 64 C 137 70 135 79 128 90 L 105 125 C 96 137 80 138 68 126 L 65 116 Z"
          fill="url(#wdqRibbonFront)"
        />

        {/* Fold 4: Right Upper Arm & Fold Over */}
        <path
          d="M 112 70 L 100 92 L 87 115 L 75 92 L 92 61 C 99 50 110 50 118 56 C 124 61 121 68 112 70 Z"
          fill="url(#wdqRibbonHighlight)"
        />

        {/* Gloss highlights on upper rims of ribbon W */}
        <path
          d="M 23 75 C 25 63 32 58 37 58 C 42 58 46 64 44 72"
          stroke="#A7F3D0"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
        />
        <path
          d="M 94 62 C 100 52 108 51 115 57 C 120 62 118 68 112 70"
          stroke="#A7F3D0"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
        />
      </g>
    </svg>
  );

  if (variant === 'icon') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        {Emblem}
      </div>
    );
  }

  return (
    <div className={`group inline-flex items-center ${dimensions.gap} ${className}`}>
      {/* Icon Emblem */}
      {Emblem}

      {/* Typography Column */}
      <div className="flex flex-col justify-center select-none">
        {/* Main Wordmark: WorldDollar + Quest */}
        <div className="flex items-baseline leading-none tracking-tight">
          <span
            className={`font-sans font-extrabold ${dimensions.text} transition-colors ${
              isDark ? 'text-[#FDFBF7]' : 'text-[#0A3E29]'
            }`}
            style={{ letterSpacing: '-0.03em' }}
          >
            WorldDollar
          </span>
          <span
            className={`font-sans font-extrabold ${dimensions.text} text-[#F5A623] transition-colors hover:text-[#F39C12]`}
            style={{ letterSpacing: '-0.02em' }}
          >
            Quest
          </span>
        </div>

        {/* Tagline: Learn • Build • Earn • From Anywhere */}
        {showTagline && (
          <div
            className={`mt-1 flex items-center gap-1 sm:gap-1.5 font-medium tracking-[0.14em] sm:tracking-[0.18em] uppercase ${
              dimensions.tagline
            } ${isDark ? 'text-[#A4B5AC]' : 'text-[#0A3E29]/80'}`}
          >
            <span>Learn</span>
            <span className="text-[#F5A623] font-bold">•</span>
            <span>Build</span>
            <span className="text-[#F5A623] font-bold">•</span>
            <span>Earn</span>
            <span className="text-[#F5A623] font-bold">•</span>
            <span className="whitespace-nowrap">From Anywhere</span>
          </div>
        )}
      </div>
    </div>
  );
};
