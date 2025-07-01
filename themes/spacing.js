// Spacing system for consistent layout and component spacing
export const spacing = {
  // Base spacing unit (4px)
  base: 4,

  // Spacing scale
  xs: 4,    // 4px
  sm: 8,    // 8px
  md: 12,   // 12px
  lg: 16,   // 16px
  xl: 20,   // 20px
  '2xl': 24, // 24px
  '3xl': 32, // 32px
  '4xl': 40, // 40px
  '5xl': 48, // 48px
  '6xl': 64, // 64px
  '7xl': 80, // 80px
  '8xl': 96, // 96px

  // Component-specific spacing
  component: {
    // Button spacing
    button: {
      paddingVertical: 12,
      paddingHorizontal: 16,
      paddingVerticalSmall: 8,
      paddingHorizontalSmall: 12,
      paddingVerticalLarge: 16,
      paddingHorizontalLarge: 24,
    },

    // Input spacing
    input: {
      paddingVertical: 12,
      paddingHorizontal: 16,
      marginVertical: 8,
    },

    // Card spacing
    card: {
      padding: 16,
      margin: 8,
      paddingLarge: 24,
      marginLarge: 12,
    },

    // List item spacing
    listItem: {
      paddingVertical: 12,
      paddingHorizontal: 16,
      marginVertical: 4,
    },

    // Modal spacing
    modal: {
      padding: 24,
      margin: 20,
    },

    // Header spacing
    header: {
      paddingVertical: 12,
      paddingHorizontal: 16,
      height: 56,
    },

    // Tab spacing
    tab: {
      paddingVertical: 12,
      paddingHorizontal: 16,
      height: 48,
    },
  },

  // Layout spacing
  layout: {
    // Container spacing
    container: {
      paddingHorizontal: 16,
      paddingVertical: 20,
    },

    // Section spacing
    section: {
      marginVertical: 24,
      paddingVertical: 16,
    },

    // Grid spacing
    grid: {
      gap: 16,
      gapSmall: 8,
      gapLarge: 24,
    },

    // Safe area spacing
    safeArea: {
      top: 44,
      bottom: 34,
    },
  },

  // Border radius
  borderRadius: {
    none: 0,
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    '2xl': 20,
    '3xl': 24,
    full: 999,
  },

  // Icon sizes
  iconSize: {
    xs: 12,
    sm: 16,
    md: 20,
    lg: 24,
    xl: 32,
    '2xl': 40,
    '3xl': 48,
  },

  // Avatar sizes
  avatarSize: {
    xs: 24,
    sm: 32,
    md: 40,
    lg: 48,
    xl: 64,
    '2xl': 80,
    '3xl': 96,
  },
};

// Utility functions for spacing
export const getSpacing = (size) => {
  return spacing[size] || size;
};

export const createMargin = (top = 0, right = 0, bottom = 0, left = 0) => ({
  marginTop: getSpacing(top),
  marginRight: getSpacing(right),
  marginBottom: getSpacing(bottom),
  marginLeft: getSpacing(left),
});

export const createPadding = (top = 0, right = 0, bottom = 0, left = 0) => ({
  paddingTop: getSpacing(top),
  paddingRight: getSpacing(right),
  paddingBottom: getSpacing(bottom),
  paddingLeft: getSpacing(left),
});

export const margin = {
  xs: { margin: spacing.xs },
  sm: { margin: spacing.sm },
  md: { margin: spacing.md },
  lg: { margin: spacing.lg },
  xl: { margin: spacing.xl },
};

export const padding = {
  xs: { padding: spacing.xs },
  sm: { padding: spacing.sm },
  md: { padding: spacing.md },
  lg: { padding: spacing.lg },
  xl: { padding: spacing.xl },
};

export default spacing;