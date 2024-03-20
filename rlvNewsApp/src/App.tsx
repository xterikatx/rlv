import { Text, View } from 'react-native';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <View className="flex-1 items-center bg-black">
        <Text className="mt-7 text-lg text-white">Ola mundo</Text>
      </View>
    </QueryClientProvider>
  );
}
