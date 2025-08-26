# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Architecture

This is a Turborepo monorepo with cross-platform React/React Native components using:
- **Turborepo**: Orchestrates build tasks and dependency management across workspaces
- **pnpm**: Package manager with workspace configuration and version overrides
- **NativeWind**: Cross-platform Tailwind CSS styling system
- **React 19 + React Native 0.79.5**: Unified versions enforced via package overrides

### Workspace Structure
- `apps/mobile/`: Expo React Native app with Expo Router and NativeWind
- `apps/web/`: Next.js 15 app with react-native-web transpilation
- `packages/ui/`: Shared component library with NativeWind styling

### Cross-Platform Integration
- **React Native Web**: Enables component sharing between mobile and web via webpack aliases
- **NativeWind**: Provides consistent Tailwind styling across all platforms
- **Shared Components**: Located in `packages/ui/` with TypeScript exports
- **Platform Extensions**: Support for `.web.tsx`, `.native.tsx` file variants

## Development Commands

### Root Commands (Turborepo)
```bash
pnpm dev          # Start all apps in development mode
pnpm build        # Build all apps and packages
pnpm lint         # Lint all workspaces
pnpm check-types  # TypeScript check all workspaces
```

### Individual App Commands
```bash
# Mobile app (apps/mobile/)
pnpm dev          # expo start (Metro bundler)
pnpm ios          # expo start --ios
pnpm android      # expo start --android  
pnpm web          # expo start --web
pnpm reset-project # Reset to blank Expo project

# Web app (apps/web/)
pnpm dev          # next dev
pnpm build        # next build
pnpm start        # next start
```

## Key Configuration Details

### Package Management
- **Version Overrides**: React 19.0.0, React Native 0.79.5, React Native Web 0.20.0, Tailwind 3.4.17 enforced in root package.json
- **Workspace Dependencies**: UI package referenced as `"ui": "workspace:*"` in apps

### Next.js Configuration
- **Transpile Packages**: react-native, react-native-web, nativewind, react-native-css-interop
- **Webpack Aliases**: `react-native$` -> `react-native-web` for web compatibility
- **Platform Extensions**: Prioritizes `.web.ts`, `.web.tsx`, `.web.js` files

### Tailwind/NativeWind Setup
- **Shared Config**: Both apps include `packages/ui/src/**/*.{js,jsx,ts,tsx}` in content paths
- **NativeWind Preset**: Required for cross-platform class compatibility
- **TypeScript Types**: NativeWind types configured in mobile app

### Shared Components
- **Location**: `packages/ui/src/` with barrel exports from `index.ts`
- **Styling**: Use NativeWind classes (e.g., `className="px-6 py-3 rounded-lg"`)
- **Components**: Built with React Native primitives (View, Text, Pressable) for cross-platform compatibility