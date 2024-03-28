import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

export default function SignupScreen() {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-[#a169da]">
      <SafeAreaView className="flex my-2">
        <View className="flex-row justify-start">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
          >
            <ArrowLeftIcon size={20} color={"black"} />
          </TouchableOpacity>
        </View>
        <View className="flow-row justify-center items-center mb-3">
          <Image
            source={require("../assets/signup.png")}
            width={4}
            height={4}
            className="w-[120px] h-[120px]"
          />
        </View>
      </SafeAreaView>

      <View
        className="flex-1 bg-white px-5 pt-5"
        style={{ borderTopLeftRadius: 30, borderTopRightRadius: 30 }}
      >
        <View className="form space-y-1">
          <Text className="text-gray-700 ml-1">Email Address</Text>
          <TextInput
            className="p-3 bg-gray-100 text-gray-700 rounded-xl mb-2"
            placeholder="Enter Email"
          />
          <Text className="text-gray-700 ml-1">Password</Text>
          <TextInput
          secureTextEntry
            className="p-3 bg-gray-100 text-gray-700 rounded-xl mb-2"
            placeholder="Enter Password"
          />
          <TouchableOpacity className="py-3 bg-yellow-400 rounded-xl">
            <Text className="font-xl font-bold text-center text-gray-700">Sign Up</Text>
          </TouchableOpacity>
        </View>
        <Text className="text-md text-gray-700 font-bold text-center py-2">Or</Text>
        <View className="flex flex-row justify-between px-4">
            <TouchableOpacity className="w-10 h-10 flex justify-center items-center bg-gray-50 rounded-2xl">
                <Image source={require("../assets/google.png")} className="w-5 h-5"/>
            </TouchableOpacity>
            <TouchableOpacity className="w-10 h-10 flex justify-center items-center bg-gray-50 rounded-2xl">
                <Image source={require("../assets/apple-logo.png")} className="w-6 h-6"/>
            </TouchableOpacity>
            <TouchableOpacity className="w-10 h-10 flex justify-center items-center bg-gray-50 rounded-2xl">
                <Image source={require("../assets/facebook.png")} className="w-5 h-5"/>
            </TouchableOpacity>
        </View>
        <View className="flex-row justify-center pt-2">
          <Text className="text-gray-500 font-semibold">
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text className="font-semibold text-yellow-400"> Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
