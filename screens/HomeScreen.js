import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#2d6cba]">
      <View className="flex-1 flex justify-around my-4 ">
        <Text>Let's get Started</Text>
      </View>
    </SafeAreaView>
  );
}
