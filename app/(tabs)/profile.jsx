import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { getAuth, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

const profile = () => {
  const [userEmail, setUserEmail] = useState(null);
  const router = useRouter();
  const auth = getAuth();
  useEffect(() => {
    const fetchUserEmail = async () => {
      const email = await AsyncStorage.getItem("userEmail");
      setUserEmail(email);
    };
    fetchUserEmail();
  }, []);

  const handleLogOut = async () => {
    try {
      await signOut(auth);
      await AsyncStorage.removeItem("userEmail");
      setUserEmail(null);
      Alert.alert("Logged Out", "You have been logged out successfully.");
      router.push("/login");
    } catch (error) {
      Alert.alert("Can't Log out", "Error while logging out");
    }
  };
  const handleSignUp = () => {
    router.push("/signup");
  };

  return (
    <View className="flex-1 justify-center items-center bg-[#2b2b2b]">
      <Text className="text-[#6B8E23] text-xl">User profile</Text>
      {userEmail ? (
        <>
          <Text className="text-white text-lg mg-6">Email:{userEmail}</Text>
          <TouchableOpacity
            onPress={handleLogOut}
            className="p-4 my-2 bg-[#6B8E23] text-black rounded-lg mt-10"
          >
            <Text className="text-xl font-semibold text-center">Log out</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TouchableOpacity
            onPress={handleSignUp}
            className="p-4 my-2 bg-[#6B8E23] text-black rounded-lg mt-10"
          >
            <Text className="text-xl font-semibold text-center">Sign Up</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default profile;
