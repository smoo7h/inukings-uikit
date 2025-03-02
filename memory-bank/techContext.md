# Technical Context: Inukings UIKit

## Technology Stack

The Inukings UIKit is built using the following core technologies:

### Primary Technologies

- **React**: Core UI library for component development (v18.2.0 supported)
- **TypeScript**: For type-safe development (v4.0.3)
- **Styled Components**: For component styling (v5.2.0)
- **Styled System**: Utility for theme-based styling

### Build & Bundling

- **Rollup**: Module bundler for creating distributable package
- **Babel**: JavaScript transpiler

### Development Tools

- **Storybook**: Component development and documentation environment
- **ESLint & Prettier**: Code quality and formatting
- **CommitLint**: Enforces conventional commit messages

### Testing Framework

- **Jest**: Test runner (v26.6.3)
- **React Testing Library**: Component testing utilities
- **Jest Styled Components**: Testing utilities for styled-components

## Project Configuration

### TypeScript Configuration

The project uses TypeScript with the following key configurations:

- Target: ES5
- JSX: React
- Strict type checking enabled
- Module system: ESNext with Node resolution

### Package Structure

- **Main entry point**: dist/index.cjs.js (CommonJS)
- **Module entry point**: dist/index.esm.js (ESM)
- **Types**: dist/index.d.ts

### Build Process

The build process:

1. Bundles components using Rollup
2. Generates TypeScript declarations
3. Creates both ESM and CommonJS outputs

## Dependencies

### Core Dependencies

- **lodash**: Utility library
- **react-transition-group**: For component transitions
- **styled-system**: For theme-based styling

### Peer Dependencies

- **react**: ^17.0.1
- **react-dom**: ^17.0.1
- **react-router-dom**: ^5.2.0
- **styled-components**: ^5.2.0

## Development Environment

### Setup Requirements

- Node.js and Yarn package manager
- Git for version control
- IDE with TypeScript support recommended (e.g., VS Code)

### Development Workflow

1. Component development in Storybook
2. Testing with Jest
3. Building with Rollup
4. Release process via np

## Delivery Mechanism

The package is delivered as:

- npm package (@pancakeswap-libs/uikit)
- GitHub repository (https://github.com/smoo7h/inukings-uikit)

## Technical Constraints

- Must maintain backward compatibility with existing implementations
- Bundle size should be optimized for production use
- Components must be tree-shakeable
- TypeScript types must be accurate and comprehensive
- Must function correctly in various React application setups
