'use client'

import Link from 'next/link'
import { View, Text } from 'react-native'

export default function Page() {
  return (
    <View className="fixed inset-0 flex items-center justify-center bg-gray-50 px-4">
      <View className="bg-white rounded-2xl shadow-lg p-8 items-center w-full max-w-xs">
        <Text className="text-3xl font-extrabold mb-2 text-blue-600">NativeWind</Text>
        <Text className="text-base text-gray-600 mb-6 text-center">
          This page demonstrates NativeWind styling in a Next.js app.
        </Text>
        <Link href="/">
          <Text className="text-blue-600 font-semibold text-lg">Go Home</Text>
        </Link>
      </View>
    </View>
  )
}