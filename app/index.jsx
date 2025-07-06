import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../assets/images/logo.png";
export default function Index() {
  const router = useRouter();

  const handleGuest = async () => {
    await AsyncStorage.setItem("isGuest", "true");
    router.push("/home");
  };
  return (
    <SafeAreaView className={`bg-[#2b2b2b]`}>
      <StatusBar barStyle={"light-content"} backgroundColor={"#2b2b2b"} />
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="m-2 flex justify-center items-center">
          <Image source={logo} style={{ width: 300, height: 300 }} />
          <View className="w-3/4">
            <TouchableOpacity
              onPress={() => router.push("/signup")}
              className="p-4 my-2 bg-[#6B8E23] text-black rounded-lg"
            >
              <Text className="text-xl font-semibold text-center">Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push("/home")}
              className="p-4 my-2 bg-[#2b2b2b] border border-[#6B8E23] rounded-lg max-fit"
            >
              <Text className="text-xl font-semibold text-[#6B8E23] text-center">
                Guest User
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text className="text-center text-base font-semibold my-4 text-white">
              <View className="border-b-2 border-[#6B8E23] p-2 mb-1 w-24" /> or{" "}
              <View className="border-b-2 border-[#6B8E23] p-2 mb-1 w-24" />
            </Text>

            <TouchableOpacity
              className="flex flex-row items-center"
              onPress={() => router.push("/login")}
            >
              <Text className="text-white font-semibold text-xl ">
                Already a User?{" "}
              </Text>
              <Text className="text-xl font-semibold text-[#6B8E23] text-center">
                Log In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
