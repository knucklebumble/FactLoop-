import colors from './colors';
import spacing from './spacing';
import typography from './typography';

// Component styles for consistent UI components
export const componentStyles = {
  // Button styles
  button: {
    base: {
      borderRadius: spacing.borderRadius.md,
      paddingVertical: spacing.component.button.paddingVertical,
      paddingHorizontal: spacing.component.button.paddingHorizontal,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      ...typography.textStyles.button,
    },
    variants: {
      primary: {
        backgroundColor: colors.primary[500],
        borderWidth: 0,
      },
      secondary: {
        backgroundColor: colors.secondary[500],
        borderWidth: 0,
      },
      outline: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: colors.primary[500],
      },
      ghost: {
        backgroundColor: 'transparent',
        borderWidth: 0,
      },
      danger: {
        backgroundColor: colors.error[500],
        borderWidth: 0,
      },
    },
    sizes: {
      small: {
        paddingVertical: spacing.component.button.paddingVerticalSmall,
        paddingHorizontal: spacing.component.button.paddingHorizontalSmall,
        ...typography.textStyles.buttonSmall,
      },
      medium: {
        paddingVertical: spacing.component.button.paddingVertical,
        paddingHorizontal: spacing.component.button.paddingHorizontal,
        ...typography.textStyles.button,
      },
      large: {
        paddingVertical: spacing.component.button.paddingVerticalLarge,
        paddingHorizontal: spacing.component.button.paddingHorizontalLarge,
        ...typography.textStyles.buttonLarge,
      },
    },
    states: {
      disabled: {
        opacity: 0.5,
      },
      pressed: {
        opacity: 0.8,
      },
    },
  },

  // Input styles
  input: {
    base: {
      borderRadius: spacing.borderRadius.md,
      paddingVertical: spacing.component.input.paddingVertical,
      paddingHorizontal: spacing.component.input.paddingHorizontal,
      borderWidth: 1,
      borderColor: colors.border.light,
      backgroundColor: colors.background.primary,
      ...typography.textStyles.input,
      color: colors.text.primary,
    },
    states: {
      focused: {
        borderColor: colors.border.focus,
        borderWidth: 2,
      },
      error: {
        borderColor: colors.border.error,
      },
      disabled: {
        backgroundColor: colors.neutral[100],
        color: colors.text.disabled,
      },
    },
    variants: {
      default: {},
      filled: {
        backgroundColor: colors.background.secondary,
        borderWidth: 0,
      },
      underlined: {
        borderRadius: 0,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        backgroundColor: 'transparent',
      },
    },
  },

  // Card styles
  card: {
    base: {
      backgroundColor: colors.background.primary,
      borderRadius: spacing.borderRadius.lg,
      padding: spacing.component.card.padding,
      margin: spacing.component.card.margin,
      shadowColor: colors.neutral[900],
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    variants: {
      elevated: {
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 5,
      },
      outlined: {
        borderWidth: 1,
        borderColor: colors.border.light,
        shadowOpacity: 0,
        elevation: 0,
      },
      flat: {
        shadowOpacity: 0,
        elevation: 0,
      },
    },
    sizes: {
      small: {
        padding: spacing.sm,
        margin: spacing.xs,
      },
      medium: {
        padding: spacing.component.card.padding,
        margin: spacing.component.card.margin,
      },
      large: {
        padding: spacing.component.card.paddingLarge,
        margin: spacing.component.card.marginLarge,
      },
    },
  },

  // List item styles
  listItem: {
    base: {
      paddingVertical: spacing.component.listItem.paddingVertical,
      paddingHorizontal: spacing.component.listItem.paddingHorizontal,
      marginVertical: spacing.component.listItem.marginVertical,
      backgroundColor: colors.background.primary,
      borderBottomWidth: 1,
      borderBottomColor: colors.border.light,
      flexDirection: 'row',
      alignItems: 'center',
    },
    variants: {
      card: {
        borderRadius: spacing.borderRadius.md,
        margin: spacing.xs,
        borderBottomWidth: 0,
        shadowColor: colors.neutral[900],
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
      },
      divider: {
        borderBottomWidth: 1,
        borderBottomColor: colors.border.light,
      },
      noDivider: {
        borderBottomWidth: 0,
      },
    },
    states: {
      pressed: {
        backgroundColor: colors.neutral[50],
      },
      selected: {
        backgroundColor: colors.primary[50],
      },
    },
  },

  // Modal styles
  modal: {
    overlay: {
      flex: 1,
      backgroundColor: colors.overlay.dark,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      backgroundColor: colors.background.primary,
      borderRadius: spacing.borderRadius.xl,
      padding: spacing.component.modal.padding,
      margin: spacing.component.modal.margin,
      maxWidth: '90%',
      maxHeight: '80%',
      shadowColor: colors.neutral[900],
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.25,
      shadowRadius: 20,
      elevation: 10,
    },
    header: {
      paddingBottom: spacing.lg,
      borderBottomWidth: 1,
      borderBottomColor: colors.border.light,
      marginBottom: spacing.lg,
    },
    footer: {
      paddingTop: spacing.lg,
      borderTopWidth: 1,
      borderTopColor: colors.border.light,
      marginTop: spacing.lg,
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
  },

  // Header styles
  header: {
    base: {
      height: spacing.component.header.height,
      paddingVertical: spacing.component.header.paddingVertical,
      paddingHorizontal: spacing.component.header.paddingHorizontal,
      backgroundColor: colors.background.primary,
      borderBottomWidth: 1,
      borderBottomColor: colors.border.light,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    title: {
      ...typography.textStyles.navTitle,
      color: colors.text.primary,
    },
    variants: {
      transparent: {
        backgroundColor: 'transparent',
        borderBottomWidth: 0,
      },
      colored: {
        backgroundColor: colors.primary[500],
      },
    },
  },

  // Tab styles
  tab: {
    container: {
      flexDirection: 'row',
      backgroundColor: colors.background.primary,
      borderTopWidth: 1,
      borderTopColor: colors.border.light,
    },
    item: {
      flex: 1,
      height: spacing.component.tab.height,
      paddingVertical: spacing.component.tab.paddingVertical,
      paddingHorizontal: spacing.component.tab.paddingHorizontal,
      alignItems: 'center',
      justifyContent: 'center',
    },
    label: {
      ...typography.textStyles.tabLabel,
      color: colors.text.secondary,
    },
    labelActive: {
      ...typography.textStyles.tabLabel,
      color: colors.primary[500],
      fontWeight: typography.fontWeight.semibold,
    },
    indicator: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 2,
      backgroundColor: colors.primary[500],
    },
  },

  // Badge styles
  badge: {
    base: {
      paddingVertical: 2,
      paddingHorizontal: 6,
      borderRadius: spacing.borderRadius.full,
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 20,
      height: 20,
    },
    variants: {
      primary: {
        backgroundColor: colors.primary[500],
      },
      secondary: {
        backgroundColor: colors.secondary[500],
      },
      success: {
        backgroundColor: colors.success[500],
      },
      warning: {
        backgroundColor: colors.warning[500],
      },
      error: {
        backgroundColor: colors.error[500],
      },
      info: {
        backgroundColor: colors.info[500],
      },
    },
    text: {
      fontSize: 10,
      fontWeight: typography.fontWeight.semibold,
      color: colors.text.inverse,
    },
  },

  // Avatar styles
  avatar: {
    base: {
      borderRadius: spacing.borderRadius.full,
      backgroundColor: colors.neutral[300],
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    },
    sizes: {
      xs: {
        width: spacing.avatarSize.xs,
        height: spacing.avatarSize.xs,
      },
      sm: {
        width: spacing.avatarSize.sm,
        height: spacing.avatarSize.sm,
      },
      md: {
        width: spacing.avatarSize.md,
        height: spacing.avatarSize.md,
      },
      lg: {
        width: spacing.avatarSize.lg,
        height: spacing.avatarSize.lg,
      },
      xl: {
        width: spacing.avatarSize.xl,
        height: spacing.avatarSize.xl,
      },
    },
    image: {
      width: '100%',
      height: '100%',
    },
    text: {
      color: colors.text.inverse,
      fontWeight: typography.fontWeight.semibold,
    },
  },
};

// Utility function to combine styles
export const combineStyles = (...styles) => {
  return Object.assign({}, ...styles);
};

// Utility function to get component style
export const getComponentStyle = (component, variant = 'base', size = null, state = null) => {
  const baseStyle = componentStyles[component]?.base || {};
  const variantStyle = componentStyles[component]?.variants?.[variant] || {};
  const sizeStyle = size ? (componentStyles[component]?.sizes?.[size] || {}) : {};
  const stateStyle = state ? (componentStyles[component]?.states?.[state] || {}) : {};

  return combineStyles(baseStyle, variantStyle, sizeStyle, stateStyle);
};

export default componentStyles;