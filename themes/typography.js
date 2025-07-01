// Typography system for consistent text styling
export const typography = {
  // Font families
  fontFamily: {
    primary: 'System', // iOS uses San Francisco, Android uses Roboto
    secondary: 'System',
    monospace: 'Courier New',
  },

  // Font weights
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },

  // Font sizes
  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48,
    '6xl': 60,
    '7xl': 72,
    '8xl': 96,
    '9xl': 128,
  },

  // Line heights
  lineHeight: {
    xs: 16,
    sm: 20,
    base: 24,
    lg: 28,
    xl: 32,
    '2xl': 36,
    '3xl': 40,
    '4xl': 44,
    '5xl': 56,
    '6xl': 72,
    '7xl': 88,
    '8xl': 112,
    '9xl': 144,
  },

  // Letter spacing
  letterSpacing: {
    tight: -0.5,
    normal: 0,
    wide: 0.5,
    wider: 1,
    widest: 2,
  },

  // Text styles
  textStyles: {
    // Headings
    h1: {
      fontSize: 32,
      lineHeight: 40,
      fontWeight: '700',
      letterSpacing: -0.5,
    },
    h2: {
      fontSize: 28,
      lineHeight: 36,
      fontWeight: '700',
      letterSpacing: -0.25,
    },
    h3: {
      fontSize: 24,
      lineHeight: 32,
      fontWeight: '600',
      letterSpacing: 0,
    },
    h4: {
      fontSize: 20,
      lineHeight: 28,
      fontWeight: '600',
      letterSpacing: 0,
    },
    h5: {
      fontSize: 18,
      lineHeight: 24,
      fontWeight: '600',
      letterSpacing: 0,
    },
    h6: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '600',
      letterSpacing: 0,
    },

    // Body text
    body1: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '400',
      letterSpacing: 0,
    },
    body2: {
      fontSize: 14,
      lineHeight: 20,
      fontWeight: '400',
      letterSpacing: 0,
    },

    // Captions and labels
    caption: {
      fontSize: 12,
      lineHeight: 16,
      fontWeight: '400',
      letterSpacing: 0.5,
    },
    label: {
      fontSize: 14,
      lineHeight: 20,
      fontWeight: '500',
      letterSpacing: 0,
    },
    overline: {
      fontSize: 10,
      lineHeight: 16,
      fontWeight: '500',
      letterSpacing: 1.5,
      textTransform: 'uppercase',
    },

    // Button text
    button: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '600',
      letterSpacing: 0,
    },
    buttonSmall: {
      fontSize: 14,
      lineHeight: 20,
      fontWeight: '600',
      letterSpacing: 0,
    },
    buttonLarge: {
      fontSize: 18,
      lineHeight: 28,
      fontWeight: '600',
      letterSpacing: 0,
    },

    // Link text
    link: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '400',
      letterSpacing: 0,
      textDecorationLine: 'underline',
    },

    // Input text
    input: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '400',
      letterSpacing: 0,
    },
    inputLabel: {
      fontSize: 14,
      lineHeight: 20,
      fontWeight: '500',
      letterSpacing: 0,
    },
    inputError: {
      fontSize: 12,
      lineHeight: 16,
      fontWeight: '400',
      letterSpacing: 0,
    },
    inputHelper: {
      fontSize: 12,
      lineHeight: 16,
      fontWeight: '400',
      letterSpacing: 0,
    },

    // Navigation text
    navTitle: {
      fontSize: 18,
      lineHeight: 24,
      fontWeight: '600',
      letterSpacing: 0,
    },
    tabLabel: {
      fontSize: 14,
      lineHeight: 20,
      fontWeight: '500',
      letterSpacing: 0,
    },

    // Special text
    code: {
      fontSize: 14,
      lineHeight: 20,
      fontWeight: '400',
      fontFamily: 'Courier New',
      letterSpacing: 0,
    },
    quote: {
      fontSize: 18,
      lineHeight: 28,
      fontWeight: '400',
      fontStyle: 'italic',
      letterSpacing: 0,
    },
  },
};

// Utility functions for typography
export const createTextStyle = (
  fontSize,
  fontWeight = 'normal',
  lineHeight = null,
  letterSpacing = 0
) => ({
  fontSize: typography.fontSize[fontSize] || fontSize,
  fontWeight: typography.fontWeight[fontWeight] || fontWeight,
  lineHeight: lineHeight ? (typography.lineHeight[lineHeight] || lineHeight) : undefined,
  letterSpacing: typography.letterSpacing[letterSpacing] || letterSpacing,
});

export const getTextStyle = (styleName) => {
  return typography.textStyles[styleName] || {};
};

// Responsive text scaling
export const responsiveTextSize = (baseSize, scale = 1.2) => ({
  fontSize: baseSize,
  '@media (min-width: 768px)': {
    fontSize: baseSize * scale,
  },
});

export default typography;