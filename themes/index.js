// Main theme export file - provides unified access to all theme modules
import colors, { lightTheme, darkTheme } from './colors';
import spacing from './spacing';
import typography from './typography';
import componentStyles from './componentStyles';
import layout from './layout';

// Main theme object combining all theme modules
export const theme = {
  colors,
  spacing,
  typography,
  componentStyles,
  layout,
  
  // Theme variants
  light: {
    ...lightTheme,
    spacing,
    typography,
    componentStyles,
    layout,
  },
  
  dark: {
    ...darkTheme,
    spacing,
    typography,
    componentStyles,
    layout,
  },
};

// Individual module exports for granular imports
export { colors, lightTheme, darkTheme } from './colors';
export { spacing } from './spacing';
export { typography } from './typography';
export { componentStyles } from './componentStyles';
export { layout } from './layout';

// Utility functions from individual modules
export { getSpacing, createMargin, createPadding, margin, padding } from './spacing';
export { createTextStyle, getTextStyle, responsiveTextSize } from './typography';
export { combineStyles, getComponentStyle } from './componentStyles';
export { createLayout, responsiveLayout, createGrid, createGridItem, getLayoutStyle } from './layout';

// Theme utility functions
export const getTheme = (variant = 'light') => {
  return theme[variant] || theme.light;
};

export const createThemeVariant = (baseTheme, overrides = {}) => {
  return {
    ...baseTheme,
    ...overrides,
  };
};

// Responsive breakpoints (for future use)
export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

// Animation durations and easings
export const animations = {
  duration: {
    fast: 150,
    normal: 250,
    slow: 350,
  },
  easing: {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
  },
};

// Shadow presets
export const shadows = {
  none: {
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  small: {
    shadowColor: colors.neutral[900],
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  medium: {
    shadowColor: colors.neutral[900],
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  large: {
    shadowColor: colors.neutral[900],
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
  },
  xl: {
    shadowColor: colors.neutral[900],
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.25,
    shadowRadius: 24,
    elevation: 12,
  },
};

// Global style utilities
export const globalStyles = {
  // Screen safe area styles
  screenContainer: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  
  // Common text styles
  screenTitle: {
    ...typography.textStyles.h1,
    color: colors.text.primary,
    marginBottom: spacing.lg,
  },
  
  sectionTitle: {
    ...typography.textStyles.h3,
    color: colors.text.primary,
    marginBottom: spacing.md,
  },
  
  // Error states
  errorText: {
    ...typography.textStyles.caption,
    color: colors.error[500],
    marginTop: spacing.xs,
  },
  
  // Loading states
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background.primary,
  },
  
  // Empty states
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing['2xl'],
  },
  
  emptyText: {
    ...typography.textStyles.body1,
    color: colors.text.secondary,
    textAlign: 'center',
    marginTop: spacing.md,
  },
};

// Theme provider configuration (for future use with Context API)
export const themeConfig = {
  defaultTheme: 'light',
  storageKey: 'app-theme',
  themes: {
    light: theme.light,
    dark: theme.dark,
  },
};

// Default export
export default theme;