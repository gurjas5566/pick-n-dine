import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { Formik } from "formik";
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
import logo from "../../assets/images/logo.png";
import validationSchema from "../../utils/authSchema";

const Signup = () => {
  const router = useRouter();
  const auth = getAuth();
  const db = getFirestore();
  const handleGuest = async () => {
    await AsyncStorage.setItem("isGuest", "true");
    router.push("/home");
  };
  const handleLogin = async (values) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const user = userCredentials.user;

      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists()) {
        console.log("User Data:", userDoc.data());
        await AsyncStorage.setItem("userEmail", values.email);
        await AsyncStorage.setItem("isGuest", "false");
        router.push("/home");
      } else {
        console.log("No such document");
      }
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        Alert.alert("Login failed", "Incorrect password,please try again.", [
          { text: "OK" },
        ]);
      } else {
        Alert.alert(
          "Login Error",
          "An unexpected error occured,please try again later.",
          [{ text: "OK" }]
        );
      }

      //console.log(error);
    }
  };
  return (
    <SafeAreaView className={`bg-[#2b2b2b]`}>
      <StatusBar barStyle={"light-content"} backgroundColor={"#2b2b2b"} />
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="m-2 flex justify-center items-center">
          <Image source={logo} style={{ width: 200, height: 150 }} />
          <Text className="text-2xl text-center text-white font-bold mb-10">
            Welcome Back!
          </Text>
          <View className="w-5/6">
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={handleLogin}
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
                  <Text className="text-[#6B8E23] font-semi-bold mt-2 mb-2">
                    Password
                  </Text>
                  <TextInput
                    className="h-12 border border-white text-white rounded px-2"
                    secureTextEntry
                    onChangeText={handleChange("password")}
                    value={values.password}
                    onBlur={handleBlur("password")}
                  />
                  {touched.password && errors.password && (
                    <Text className="text-red-500 text-xs mb-2">
                      {errors.password}
                    </Text>
                  )}
                  <TouchableOpacity
                    onPress={handleSubmit}
                    className="p-4 my-2 bg-[#6B8E23] text-black rounded-lg mt-10"
                  >
                    <Text className="text-xl font-semibold text-center">
                      Log In
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>
            <View>
              <TouchableOpacity
                className="flex flex-row items-center justify-center my-5"
                onPress={() => router.push("/signup")}
              >
                <Text className="text-white font-semibold text-xl ">
                  New User?{" "}
                </Text>
                <Text className="text-xl font-semibold text-[#6B8E23] text-center">
                  Sign Up
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
