import React from 'react';
import { View } from 'react-native';

interface CardProps {
  children?: React.ReactNode;
  variant?: 'default' | 'elevated';
}

export function Card({ children, variant = 'default' }: CardProps) {
  return (
    <View className={`p-4 rounded-lg ${
      variant === 'elevated' 
        ? 'bg-white shadow-lg' 
        : 'bg-gray-50'
    }`}>
      {children}
    </View>
  );
}