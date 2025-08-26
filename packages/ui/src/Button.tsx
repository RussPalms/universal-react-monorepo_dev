import React from 'react';
import { Pressable, Text } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export function Button({ title, onPress, variant = 'primary', disabled = false }: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      className={`px-6 py-3 rounded-lg active:opacity-80 ${
        variant === 'primary' 
          ? 'bg-blue-600' 
          : 'bg-gray-200'
      } ${disabled ? 'opacity-50' : ''}`}
    >
      <Text
        className={`text-center font-semibold ${
          variant === 'primary' ? 'text-white' : 'text-gray-900'
        }`}
      >
        {title}
      </Text>
    </Pressable>
  );
}