# System Patterns: InuKings UI Kit

## System Architecture

The InuKings UI Kit is structured as a component library with the following architectural patterns:

1. **Component-Based Architecture**: The system is organized around individual, reusable UI components, each with its own directory, implementation, and type definitions.

2. **Atomic Design Principles**: Components follow a hierarchy of complexity, from basic elements (Text, Button) to more complex compounds (Card, ButtonMenu).

3. **Type-Driven Development**: TypeScript is used extensively to define component interfaces, props, and theme types, ensuring type safety across the library.

4. **Themeable Design System**: Components leverage a centralized theme object for styling, enabling consistent design and theming capabilities.

## Key Technical Decisions

1. **React + TypeScript**: Built with React and TypeScript for component-based development with strong typing.

2. **Styled Components**: Uses styled-components for component styling, which enables theme-based styling and CSS-in-JS.

3. **Styled System**: Leverages styled-system for prop-based styling and consistent theme access.

4. **Storybook Integration**: Components are documented and showcased using Storybook, enabling visual testing and documentation.

5. **Jest Testing**: Unit tests are implemented using Jest and React Testing Library.

6. **Rollup Bundling**: Uses Rollup for package bundling with support for ES modules and CommonJS.

## Design Patterns

1. **Compound Components**: Some components like Card use the compound component pattern (Card, CardHeader, CardBody) for flexible composition.

2. **Prop Spreading**: Components often accept and pass through HTML attributes to the underlying elements.

3. **Variant Pattern**: Components like Button implement variants (primary, secondary, etc.) for different visual styles.

4. **Responsive Props**: Many components support responsive props through styled-system for adaptive layouts.

5. **Theme Context**: Components access theme values through ThemeContext for consistent styling.

6. **Higher-Order Components**: Used in some cases to add shared functionality to components.

7. **Render Props**: Used for flexible component composition and behavior customization.

## Component Relationships

1. **Theme Integration**: All components consume the theme through ThemeProvider and styled-components.

2. **Component Composition**: Complex components are built by composing simpler components:

   - ButtonMenu uses Button components
   - Card composes CardHeader, CardBody, and CardFooter

3. **Shared Types**: Common type definitions are shared across components:

   - Size variants (sm, md, lg)
   - Color variants (primary, secondary, etc.)
   - Common props like margin and padding

4. **Hooks Integration**: Some components use custom hooks for specific behaviors:

   - useMatchBreakpoints for responsive designs
   - useParticleBurst for effects

5. **Icon System**: SVG components are used consistently across the library for icons.

## Directory Structure

```
src/
├── components/       # Individual UI components
│   ├── Alert/        # Each component has its own directory
│   ├── Button/
│   └── ...
├── hooks/            # Custom React hooks
├── theme/            # Theme definitions and types
├── widgets/          # Complex component compositions
└── util/             # Utility functions
```

Each component directory typically contains:

- Main component implementation (.tsx)
- Type definitions (.ts)
- Stories for Storybook (.stories.tsx)
- Theme-specific styling and variants
- Index file for exports
