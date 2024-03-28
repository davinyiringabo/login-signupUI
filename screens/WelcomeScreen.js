import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
export default function WelcomeScreen() {
    const [fontsLoaded] = useFonts({
        'Montserrat-Black': require('../assets/fonts/Montserrat-Black.ttf'),
      });
  const navigation = useNavigation();
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <SafeAreaView className="flex-1 bg-[#a169da]" onLayout={onLayoutRootView}>
      <View className="flex-1 flex justify-around my-10 ">
        <Text className="text-white font-bold text-4xl text-center" style={{fontFamily: "Montserrat-Black"}}>
          Let's Get Started
        </Text>
        <View className="flex-row justify-center h-[350px] items-center">
          <Image
            source={require("../assets/welcome.png")}
            width={300}
            height={300}
          />
        </View>
        <View className="space-y-4">
          <TouchableOpacity
            onPress={() => navigation.navigate("Signup")}
            className="py-3 bg-yellow-400 mx-7 rounded-xl"
          >
            <Text className="text-xl font-bold text-center text-gray-700">
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <Text className="text-white font-semibold">
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text className="font-semibold text-yellow-400"> Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
