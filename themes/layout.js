import spacing from './spacing';
import colors from './colors';

// Layout styles and utilities for consistent layout patterns
export const layout = {
  // Container styles
  container: {
    base: {
      flex: 1,
      paddingHorizontal: spacing.layout.container.paddingHorizontal,
      paddingVertical: spacing.layout.container.paddingVertical,
    },
    centered: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: spacing.layout.container.paddingHorizontal,
    },
    fullWidth: {
      width: '100%',
      paddingHorizontal: spacing.layout.container.paddingHorizontal,
    },
    noPadding: {
      flex: 1,
      padding: 0,
    },
  },

  // Screen layouts
  screen: {
    base: {
      flex: 1,
      backgroundColor: colors.background.primary,
    },
    centered: {
      flex: 1,
      backgroundColor: colors.background.primary,
      justifyContent: 'center',
      alignItems: 'center',
    },
    scrollable: {
      flexGrow: 1,
      backgroundColor: colors.background.primary,
    },
    withHeader: {
      flex: 1,
      backgroundColor: colors.background.primary,
      paddingTop: spacing.layout.safeArea.top,
    },
    withTabBar: {
      flex: 1,
      backgroundColor: colors.background.primary,
      paddingBottom: spacing.layout.safeArea.bottom,
    },
  },

  // Section layouts
  section: {
    base: {
      marginVertical: spacing.layout.section.marginVertical,
      paddingVertical: spacing.layout.section.paddingVertical,
    },
    withBackground: {
      marginVertical: spacing.layout.section.marginVertical,
      paddingVertical: spacing.layout.section.paddingVertical,
      backgroundColor: colors.background.secondary,
      borderRadius: spacing.borderRadius.lg,
      marginHorizontal: spacing.md,
      paddingHorizontal: spacing.lg,
    },
    header: {
      paddingBottom: spacing.md,
      borderBottomWidth: 1,
      borderBottomColor: colors.border.light,
      marginBottom: spacing.lg,
    },
    footer: {
      paddingTop: spacing.md,
      borderTopWidth: 1,
      borderTopColor: colors.border.light,
      marginTop: spacing.lg,
    },
  },

  // Flex layouts
  flex: {
    // Flex directions
    row: {
      flexDirection: 'row',
    },
    column: {
      flexDirection: 'column',
    },
    rowReverse: {
      flexDirection: 'row-reverse',
    },
    columnReverse: {
      flexDirection: 'column-reverse',
    },

    // Justify content
    justifyStart: {
      justifyContent: 'flex-start',
    },
    justifyEnd: {
      justifyContent: 'flex-end',
    },
    justifyCenter: {
      justifyContent: 'center',
    },
    justifyBetween: {
      justifyContent: 'space-between',
    },
    justifyAround: {
      justifyContent: 'space-around',
    },
    justifyEvenly: {
      justifyContent: 'space-evenly',
    },

    // Align items
    alignStart: {
      alignItems: 'flex-start',
    },
    alignEnd: {
      alignItems: 'flex-end',
    },
    alignCenter: {
      alignItems: 'center',
    },
    alignStretch: {
      alignItems: 'stretch',
    },
    alignBaseline: {
      alignItems: 'baseline',
    },

    // Flex sizing
    flex1: {
      flex: 1,
    },
    flex2: {
      flex: 2,
    },
    flex3: {
      flex: 3,
    },
    flexNone: {
      flex: 0,
    },
    flexShrink: {
      flexShrink: 1,
    },
    flexGrow: {
      flexGrow: 1,
    },

    // Common combinations
    centerAll: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    spaceBetween: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    spaceAround: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
  },

  // Grid layouts
  grid: {
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      margin: -spacing.layout.grid.gap / 2,
    },
    item: {
      padding: spacing.layout.grid.gap / 2,
    },
    // Grid item sizes (based on 12-column grid)
    col1: { width: '8.333%' },
    col2: { width: '16.666%' },
    col3: { width: '25%' },
    col4: { width: '33.333%' },
    col5: { width: '41.666%' },
    col6: { width: '50%' },
    col7: { width: '58.333%' },
    col8: { width: '66.666%' },
    col9: { width: '75%' },
    col10: { width: '83.333%' },
    col11: { width: '91.666%' },
    col12: { width: '100%' },
  },

  // Position utilities
  position: {
    relative: {
      position: 'relative',
    },
    absolute: {
      position: 'absolute',
    },
    absoluteFill: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    absoluteTop: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
    },
    absoluteBottom: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
    absoluteCenter: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: [{ translateX: -50 }, { translateY: -50 }],
    },
  },

  // Overflow utilities
  overflow: {
    visible: {
      overflow: 'visible',
    },
    hidden: {
      overflow: 'hidden',
    },
    scroll: {
      overflow: 'scroll',
    },
  },

  // Dimension utilities
  dimensions: {
    fullWidth: {
      width: '100%',
    },
    fullHeight: {
      height: '100%',
    },
    fullSize: {
      width: '100%',
      height: '100%',
    },
    square: (size) => ({
      width: size,
      height: size,
    }),
    circle: (size) => ({
      width: size,
      height: size,
      borderRadius: size / 2,
    }),
  },

  // Z-index layers
  zIndex: {
    base: 0,
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
    toast: 1080,
  },

  // Safe area utilities
  safeArea: {
    top: {
      paddingTop: spacing.layout.safeArea.top,
    },
    bottom: {
      paddingBottom: spacing.layout.safeArea.bottom,
    },
    horizontal: {
      paddingHorizontal: spacing.lg,
    },
    all: {
      paddingTop: spacing.layout.safeArea.top,
      paddingBottom: spacing.layout.safeArea.bottom,
      paddingHorizontal: spacing.lg,
    },
  },

  // Separator styles
  separator: {
    horizontal: {
      height: 1,
      backgroundColor: colors.border.light,
      marginVertical: spacing.md,
    },
    vertical: {
      width: 1,
      backgroundColor: colors.border.light,
      marginHorizontal: spacing.md,
    },
    thick: {
      height: 8,
      backgroundColor: colors.background.secondary,
      marginVertical: spacing.lg,
    },
  },

  // List layouts
  list: {
    container: {
      flex: 1,
    },
    contentContainer: {
      flexGrow: 1,
      padding: spacing.md,
    },
    emptyContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: spacing['2xl'],
    },
    headerContainer: {
      paddingHorizontal: spacing.lg,
      paddingVertical: spacing.md,
      backgroundColor: colors.background.secondary,
    },
    footerContainer: {
      paddingHorizontal: spacing.lg,
      paddingVertical: spacing.md,
    },
  },
};

// Utility functions for layout
export const createLayout = (styles) => {
  return Object.assign({}, ...styles);
};

export const responsiveLayout = (baseStyle, tabletStyle = {}, desktopStyle = {}) => {
  // This would be expanded with actual responsive breakpoints
  // For now, returning base style
  return baseStyle;
};

export const createGrid = (columns, gap = spacing.layout.grid.gap) => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  margin: -gap / 2,
});

export const createGridItem = (span = 1, totalColumns = 12, gap = spacing.layout.grid.gap) => ({
  width: `${(span / totalColumns) * 100}%`,
  padding: gap / 2,
});

export const getLayoutStyle = (layoutName, variant = 'base') => {
  const layoutGroup = layout[layoutName];
  if (!layoutGroup) return {};
  
  if (typeof layoutGroup === 'object' && layoutGroup[variant]) {
    return layoutGroup[variant];
  }
  
  return layoutGroup || {};
};

export default layout;