# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Architecture

This is a monorepo with shared React/React Native components using:
- **Turborepo**: Manages the monorepo build system and task orchestration
- **pnpm**: Package manager with workspace configuration
- **NativeWind**: Shared Tailwind CSS styling across mobile and web platforms
- **React 19**: Unified React version across all apps with overrides in root package.json

### Apps Structure
- `apps/mobile/`: Expo React Native app with NativeWind styling
- `apps/web/`: Next.js app with react-native-web integration for component sharing

### Key Integrations
- **React Native Web**: Enables sharing components between mobile and web
- **NativeWind**: Provides consistent Tailwind styling across platforms
- **Expo Router**: File-based routing for the mobile app
- **Next.js 15**: Web app with custom webpack config for RN compatibility

## Development Commands

Run from root directory using Turbo:
```bash
pnpm dev          # Start all apps in development mode
pnpm build        # Build all apps  
pnpm lint         # Lint all apps
pnpm check-types  # Type check all apps
```

Individual app commands:
```bash
# Mobile app (from apps/mobile/)
pnpm dev          # expo start
pnpm ios          # expo start --ios
pnpm android      # expo start --android
pnpm web          # expo start --web

# Web app (from apps/web/)  
pnpm dev          # next dev
pnpm build        # next build
pnpm start        # next start
```

## Configuration Notes

- **Package Overrides**: React 19, React Native 0.79.5, and Tailwind 3.4.17 versions are enforced at root level
- **Next.js Config**: Custom webpack configuration transpiles react-native packages for web compatibility
- **Tailwind**: Both apps use NativeWind preset for cross-platform styling
- **TypeScript**: Configured with NativeWind types in mobile app

## Cross-Platform Development

When working with shared components:
- Use NativeWind classes for styling (works on both platforms)  
- Place shared components in appropriate locations for import by both apps
- Test changes on both mobile and web platforms
- Be aware of platform-specific extensions (.web.tsx, .native.tsx)