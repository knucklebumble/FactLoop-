# Theme System

This folder contains a comprehensive theme system for consistent styling across your React Native application.

## Structure

```
themes/
├── index.js          # Main theme export with utilities
├── colors.js         # Color palette and theme variants
├── spacing.js        # Spacing system and layout utilities
├── typography.js     # Text styles and font system
├── componentStyles.js # Pre-built component styles
├── layout.js         # Layout utilities and patterns
└── README.md         # This documentation
```

## Quick Start

```javascript
// Import the complete theme
import theme from './themes';

// Or import specific modules
import { colors, spacing, typography } from './themes';

// Use in your components
const MyComponent = () => (
  <View style={[theme.layout.container.base, { backgroundColor: theme.colors.primary[500] }]}>
    <Text style={theme.typography.textStyles.h1}>Hello World</Text>
  </View>
);
```

## Color System

### Usage
```javascript
import { colors, lightTheme, darkTheme } from './themes/colors';

// Using color palette
backgroundColor: colors.primary[500]
color: colors.text.primary

// Using theme variants
backgroundColor: lightTheme.background
color: darkTheme.text
```

### Available Colors
- **Primary**: Blue color scale (50-900)
- **Secondary**: Purple color scale (50-900)
- **Neutral**: Gray color scale (50-900)
- **Semantic**: Success, warning, error, info (50-900)
- **Background**: Primary, secondary, tertiary, dark variants
- **Text**: Primary, secondary, tertiary, disabled, inverse, link
- **Border**: Light, medium, dark, focus, error, success
- **Overlay**: Light, medium, dark, white

## Spacing System

### Usage
```javascript
import { spacing, getSpacing, margin, padding } from './themes/spacing';

// Direct spacing values
marginTop: spacing.lg        // 16px
paddingHorizontal: spacing.xl // 20px

// Component-specific spacing
padding: spacing.component.button.paddingVertical

// Utility functions
...margin.lg  // { margin: 16 }
...padding.md // { padding: 12 }
```

### Spacing Scale
- `xs`: 4px
- `sm`: 8px
- `md`: 12px
- `lg`: 16px
- `xl`: 20px
- `2xl`: 24px
- `3xl`: 32px
- And more...

## Typography System

### Usage
```javascript
import { typography, getTextStyle, createTextStyle } from './themes/typography';

// Predefined text styles
<Text style={typography.textStyles.h1}>Heading</Text>
<Text style={typography.textStyles.body1}>Body text</Text>

// Custom text style
const customStyle = createTextStyle('lg', 'bold', 'xl', 'wide');
```

### Available Text Styles
- **Headings**: h1, h2, h3, h4, h5, h6
- **Body**: body1, body2
- **UI Elements**: button, label, caption, overline
- **Interactive**: link, input, inputLabel, inputError
- **Navigation**: navTitle, tabLabel
- **Special**: code, quote

## Component Styles

### Usage
```javascript
import { componentStyles, getComponentStyle } from './themes/componentStyles';

// Direct style access
<TouchableOpacity style={componentStyles.button.base}>
  <Text>Button</Text>
</TouchableOpacity>

// With variants and states
const buttonStyle = getComponentStyle('button', 'primary', 'large', 'pressed');
```

### Available Components
- **Button**: Primary, secondary, outline, ghost, danger variants
- **Input**: Default, filled, underlined variants with focus/error states
- **Card**: Elevated, outlined, flat variants in multiple sizes
- **List Item**: Card, divider variants with press/select states
- **Modal**: Overlay, container, header, footer styles
- **Header**: Base, transparent, colored variants
- **Tab**: Container, item, label, indicator styles
- **Badge**: Color variants for all semantic colors
- **Avatar**: Multiple sizes with image and text support

## Layout System

### Usage
```javascript
import { layout, createGrid, getLayoutStyle } from './themes/layout';

// Flex utilities
<View style={[layout.flex.row, layout.flex.justifyCenter]}>
  {/* Content */}
</View>

// Grid system
<View style={layout.grid.container}>
  <View style={[layout.grid.item, layout.grid.col6]}>
    {/* Half width item */}
  </View>
</View>

// Screen layouts
<View style={layout.screen.base}>
  {/* Screen content */}
</View>
```

### Layout Categories
- **Container**: Base, centered, fullWidth, noPadding
- **Screen**: Base, centered, scrollable, withHeader, withTabBar
- **Section**: Base, withBackground, header, footer
- **Flex**: Direction, justify, align, sizing utilities
- **Grid**: 12-column grid system
- **Position**: Relative, absolute, center utilities
- **Safe Area**: Top, bottom, horizontal, all

## Utility Functions

### Spacing Utilities
```javascript
import { createMargin, createPadding, getSpacing } from './themes';

// Create custom spacing
const customMargin = createMargin('lg', 'md', 'lg', 'md'); // top, right, bottom, left
const customPadding = createPadding('sm', 'lg');

// Get spacing value
const spacing16 = getSpacing('lg'); // returns 16
```

### Typography Utilities
```javascript
import { createTextStyle, responsiveTextSize } from './themes';

// Create custom text style
const customText = createTextStyle(18, 'semibold', 24, 'wide');

// Responsive text (for future tablet/desktop support)
const responsiveText = responsiveTextSize(16, 1.25);
```

### Component Utilities
```javascript
import { combineStyles, getComponentStyle } from './themes';

// Combine multiple styles
const combinedStyle = combineStyles(
  theme.componentStyles.button.base,
  theme.componentStyles.button.variants.primary,
  { marginTop: 10 }
);

// Get component style with options
const buttonStyle = getComponentStyle('button', 'outline', 'large', 'pressed');
```

### Layout Utilities
```javascript
import { createGrid, createGridItem, createLayout } from './themes';

// Create custom grid
const gridContainer = createGrid(3, 16); // 3 columns, 16px gap
const gridItem = createGridItem(2, 3, 16); // spans 2 of 3 columns

// Combine layout styles
const customLayout = createLayout([
  theme.layout.flex.row,
  theme.layout.flex.justifyBetween,
  { padding: 20 }
]);
```

## Theme Variants (Light/Dark Mode)

```javascript
import { getTheme, createThemeVariant } from './themes';

// Get theme variant
const lightTheme = getTheme('light');
const darkTheme = getTheme('dark');

// Create custom theme variant
const customTheme = createThemeVariant(lightTheme, {
  primary: '#custom-color',
  background: '#custom-background'
});
```

## Advanced Features

### Shadows
```javascript
import { shadows } from './themes';

// Apply predefined shadows
shadowStyle: shadows.medium
```

### Animations
```javascript
import { animations } from './themes';

// Use animation durations
duration: animations.duration.normal // 250ms
```

### Global Styles
```javascript
import { globalStyles } from './themes';

// Common screen patterns
<View style={globalStyles.screenContainer}>
  <Text style={globalStyles.screenTitle}>Screen Title</Text>
</View>
```

## Best Practices

1. **Consistent Usage**: Always use theme values instead of hardcoded values
2. **Component Variants**: Use predefined component styles and extend them when needed
3. **Spacing Scale**: Stick to the spacing scale for consistent layouts
4. **Semantic Colors**: Use semantic colors (success, error, warning) for appropriate contexts
5. **Typography Hierarchy**: Use the typography scale to maintain visual hierarchy
6. **Layout Utilities**: Leverage layout utilities for common patterns

## Example Component

```javascript
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { theme, getComponentStyle, combineStyles } from './themes';

const ExampleCard = ({ title, subtitle, onPress, variant = 'default' }) => {
  const cardStyle = combineStyles(
    theme.componentStyles.card.base,
    variant === 'highlighted' && { backgroundColor: theme.colors.primary[50] }
  );

  const buttonStyle = getComponentStyle('button', 'primary', 'medium');

  return (
    <View style={cardStyle}>
      <Text style={theme.typography.textStyles.h4}>{title}</Text>
      <Text style={[theme.typography.textStyles.body2, { color: theme.colors.text.secondary }]}>
        {subtitle}
      </Text>
      <TouchableOpacity style={[buttonStyle, { marginTop: theme.spacing.md }]} onPress={onPress}>
        <Text style={{ color: theme.colors.text.inverse }}>Action</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ExampleCard;
```

This theme system provides a solid foundation for consistent, maintainable, and scalable styling across your React Native application.