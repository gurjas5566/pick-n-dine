import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { Formik } from "formik";
import { useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons"; // 👈 make sure this is installed
import logo from "../../assets/images/logo.png";
import validationSchema from "../../utils/authSchema";

const Signup = () => {
  const router = useRouter();
  const auth = getAuth();
  const db = getFirestore();

  const [showPassword, setShowPassword] = useState(false); // 👁️ toggle

  const handleGuest = async () => {
    await AsyncStorage.setItem("isGuest", "true");
    router.push("/home");
  };

  const handleSignup = async (values) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const user = userCredentials.user;

      await setDoc(doc(db, "users", user.uid), {
        email: values.email,
        createdAt: new Date(),
      });

      await AsyncStorage.setItem("userEmail", values.email);
      await AsyncStorage.setItem("isGuest", "false");

      Alert.alert("Success", "Signed up successfully!", [
        { text: "OK", onPress: () => router.push("/login") },
      ]);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        Alert.alert(
          "Email Already In Use",
          "This email already exists, please use another email!",
          [{ text: "OK" }]
        );
      } else {
        Alert.alert(
          "Signup Error",
          "An unexpected error occurred, please try again later.",
          [{ text: "OK" }]
        );
      }
    }
  };

  return (
    <SafeAreaView className="bg-[#2b2b2b]">
      <StatusBar barStyle="light-content" backgroundColor="#2b2b2b" />
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="m-2 flex justify-center items-center">
          <Image source={logo} style={{ width: 200, height: 150 }} />
          <Text className="text-2xl text-center text-white font-bold mb-10">
            Let's get you started
          </Text>
          <View className="w-5/6">
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSignup}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <View className="w-full">
                  {/* Email */}
                  <Text className="text-[#6B8E23] font-semi-bold mt-2 mb-2">
                    Email
                  </Text>
                  <TextInput
                    className="h-12 border border-white text-white rounded px-2"
                    keyboardType="email-address"
                    onChangeText={handleChange("email")}
                    value={values.email}
                    onBlur={handleBlur("email")}
                  />
                  {touched.email && errors.email && (
                    <Text className="text-red-500 text-xs mb-2">
                      {errors.email}
                    </Text>
                  )}

                  {/* Password with Eye Toggle */}
                  <Text className="text-[#6B8E23] font-semi-bold mt-2 mb-2">
                    Password
                  </Text>
                  <View className="flex-row items-center border border-white rounded px-2 h-12">
                    <TextInput
                      style={{ flex: 1, color: "white" }}
                      secureTextEntry={!showPassword}
                      onChangeText={handleChange("password")}
                      value={values.password}
                      onBlur={handleBlur("password")}
                    />
                    <TouchableOpacity
                      onPress={() => setShowPassword(!showPassword)}
                    >
                      <Icon
                        name={showPassword ? "eye-off" : "eye"}
                        size={20}
                        color="white"
                      />
                    </TouchableOpacity>
                  </View>
                  {touched.password && errors.password && (
                    <Text className="text-red-500 text-xs mb-2">
                      {errors.password}
                    </Text>
                  )}

                  {/* Submit Button */}
                  <TouchableOpacity
                    onPress={handleSubmit}
                    className="p-4 my-2 bg-[#6B8E23] text-black rounded-lg mt-10"
                  >
                    <Text className="text-xl font-semibold text-center">
                      Sign Up
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>

            {/* Bottom Options */}
            <View>
              <TouchableOpacity
                className="flex flex-row items-center justify-center my-5"
                onPress={() => router.push("/login")}
              >
                <Text className="text-white font-semibold text-xl ">
                  Already a User?{" "}
                </Text>
                <Text className="text-xl font-semibold text-[#6B8E23] text-center">
                  Log In
                </Text>
              </TouchableOpacity>

              <Text className="text-center text-base font-semibold text-white">
                <View className="border-b-2 border-[#6B8E23] p-2 mb-1 w-24" />{" "}
                or{" "}
                <View className="border-b-2 border-[#6B8E23] p-2 mb-1 w-24" />
              </Text>

              <TouchableOpacity
                className="flex flex-row items-center justify-center my-5"
                onPress={handleGuest}
              >
                <Text className="text-white font-semibold text-xl ">Be a</Text>
                <Text className="text-xl font-semibold text-[#6B8E23] text-center">
                  {" "}
                  Guest User
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
