import { Text, View, ScrollView, Pressable } from "react-native";
import { Card } from "ui";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50" edges={['top', 'left', 'right']}>
      <ScrollView
        className="flex-1 px-4"
        showsVerticalScrollIndicator={false}
        contentContainerClassName="py-6"
      >
        {/* Hero Section */}
        <View className="items-center mb-8">
          <View className="w-16 h-16 bg-blue-600 rounded-2xl items-center justify-center mb-4">
            <Text className="text-2xl">🚀</Text>
          </View>
          <Text className="text-3xl font-bold text-gray-900 text-center mb-3">
            React Native Monorepo
          </Text>
          <Text className="text-lg text-gray-600 text-center px-4 mb-6">
            Cross-platform template with shared UI components
          </Text>

          {/* Social Links */}
          <View className="flex-row items-center gap-3 px-4">
            <Text className="text-xs text-gray-500">⭐ Star repo</Text>
            <Text className="text-xs text-gray-400">•</Text>
            <Text className="text-xs text-gray-500">📝 Read guide</Text>
            <Text className="text-xs text-gray-400">•</Text>
            <Text className="text-xs text-gray-500">🐦 Follow</Text>
          </View>
        </View>


        {/* Tech Stack */}
        <View className="mb-8">
          <Text className="text-xl font-semibold text-gray-900 mb-4 text-center">
            Tech Stack
          </Text>
          <View className="gap-3">
            <Card variant="elevated">
              <View className="flex-row items-center gap-3">
                <View className="w-10 h-10 bg-blue-600 rounded-lg items-center justify-center">
                  <Text className="text-white text-lg">📱</Text>
                </View>
                <View className="flex-1">
                  <Text className="text-base font-medium text-gray-900">Expo</Text>
                  <Text className="text-sm text-gray-600">React Native</Text>
                </View>
              </View>
            </Card>

            <Card variant="elevated">
              <View className="flex-row items-center gap-3">
                <View className="w-10 h-10 bg-black rounded-lg items-center justify-center">
                  <Text className="text-white text-sm font-bold">N</Text>
                </View>
                <View className="flex-1">
                  <Text className="text-base font-medium text-gray-900">Next.js 15</Text>
                  <Text className="text-sm text-gray-600">React framework</Text>
                </View>
              </View>
            </Card>

            <Card variant="elevated">
              <View className="flex-row items-center gap-3">
                <View className="w-10 h-10 bg-cyan-500 rounded-lg items-center justify-center">
                  <Text className="text-white text-lg">🎨</Text>
                </View>
                <View className="flex-1">
                  <Text className="text-base font-medium text-gray-900">Tailwind v3</Text>
                  <Text className="text-sm text-gray-600">NativeWind</Text>
                </View>
              </View>
            </Card>

            <Card variant="elevated">
              <View className="flex-row items-center gap-3">
                <View className="w-10 h-10 bg-red-500 rounded-lg items-center justify-center">
                  <Text className="text-white text-sm font-bold">T</Text>
                </View>
                <View className="flex-1">
                  <Text className="text-base font-medium text-gray-900">Turborepo</Text>
                  <Text className="text-sm text-gray-600">Monorepo</Text>
                </View>
              </View>
            </Card>
          </View>
        </View>

        {/* What's Included */}
        <View className="mb-8">
          <Text className="text-xl font-semibold text-gray-900 mb-4 text-center">
            What&apos;s Included
          </Text>
          <Card variant="elevated">
            <View className="gap-3">
              <View className="flex-row items-center gap-3">
                <Text className="text-green-600 text-sm">✓</Text>
                <Text className="text-gray-700 flex-1">Shared UI package</Text>
              </View>
              <View className="flex-row items-center gap-3">
                <Text className="text-green-600 text-sm">✓</Text>
                <Text className="text-gray-700 flex-1">TypeScript setup</Text>
              </View>
              <View className="flex-row items-center gap-3">
                <Text className="text-green-600 text-sm">✓</Text>
                <Text className="text-gray-700 flex-1">Cross-platform styling</Text>
              </View>
              <View className="flex-row items-center gap-3">
                <Text className="text-green-600 text-sm">✓</Text>
                <Text className="text-gray-700 flex-1">Development scripts</Text>
              </View>
              <View className="flex-row items-center gap-3">
                <Text className="text-green-600 text-sm">✓</Text>
                <Text className="text-gray-700 flex-1">Build configuration</Text>
              </View>
              <View className="flex-row items-center gap-3">
                <Text className="text-green-600 text-sm">✓</Text>
                <Text className="text-gray-700 flex-1">Clean architecture</Text>
              </View>
            </View>
          </Card>
        </View>

        {/* Quick Start */}
        <View className="mb-8">
          <Card>
            <View className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
              <Text className="text-lg font-semibold text-gray-900 mb-3 text-center">
                Quick Start
              </Text>
              <View className="bg-gray-900 rounded p-3 mb-3">
                <Text className="text-green-400 font-mono text-sm">pnpm install</Text>
                <Text className="text-green-400 font-mono text-sm">pnpm dev</Text>
              </View>
              <Text className="text-sm text-gray-600 text-center">
                Starts both web and mobile apps with hot reload
              </Text>
            </View>
          </Card>
        </View>

        {/* Demo */}
        <View className="items-center">
          <Card variant="elevated">
            <View className="items-center p-2">
              <Text className="text-lg font-semibold text-gray-900 mb-2 text-center">
                Demo
              </Text>
              <Text className="text-sm text-gray-600 text-center mb-4">
                Shared components working across platforms
              </Text>

              <Link href="/(tabs)/demo" asChild>
                <Pressable className="bg-blue-600 px-6 py-2 rounded-lg active:opacity-80">
                  <View className="flex-row items-center gap-2">
                    <Text className="text-white text-sm">🎨</Text>
                    <Text className="text-white font-medium text-sm">View Components</Text>
                    <Text className="text-white text-sm">→</Text>
                  </View>
                </Pressable>
              </Link>
            </View>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
