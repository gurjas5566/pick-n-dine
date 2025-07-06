import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { Alert, FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const history = () => {
  const [userEmail, setUserEmail] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const db = getFirestore();

  useEffect(() => {
    const fetchUserEmail = async () => {
      const email = await AsyncStorage.getItem("userEmail");
      setUserEmail(email);
    };
    fetchUserEmail();
  }, []);

  const fetchBookings = async () => {
    if (userEmail) {
      try {
        const bookingCollection = collection(db, "bookings");
        const bookingQuery = query(
          bookingCollection,
          where("email", "==", userEmail)
        );
        const bookingSnapshot = await getDocs(bookingQuery);
        const bookingList = bookingSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBookings(bookingList);
      } catch (error) {
        Alert.alert("Error", "Unable to fetch bookings");
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBookings();
  }, [userEmail]);

  if (loading) {
    return (
      <SafeAreaView className="flex-1 bg-[#2b2b2b] justify-center items-center">
        <Text className="text-white text-lg font-semibold">Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-[#2b2b2b] px-4">
      {userEmail ? (
        bookings.length > 0 ? (
          <FlatList
            data={bookings}
            keyExtractor={(item) => item.id}
            onRefresh={fetchBookings}
            refreshing={loading}
            renderItem={({ item }) => (
              <View className="bg-[#333] p-4 my-2 rounded-xl border border-[#6B8E23] shadow-md shadow-black">
                <Text className="text-[#6B8E23] text-sm font-semibold mb-1">
                  Restaurant:{" "}
                  <Text className="text-white font-normal">
                    {item.restaurant}
                  </Text>
                </Text>
                <Text className="text-[#6B8E23] text-sm font-semibold mb-1">
                  Date:{" "}
                  <Text className="text-white font-normal">{item.date}</Text>
                </Text>
                <Text className="text-[#6B8E23] text-sm font-semibold mb-1">
                  Time Slot:{" "}
                  <Text className="text-white font-normal">{item.slot}</Text>
                </Text>
                <Text className="text-[#6B8E23] text-sm font-semibold mb-1">
                  Guests:{" "}
                  <Text className="text-white font-normal">{item.guests}</Text>
                </Text>
                <Text className="text-[#6B8E23] text-sm font-semibold mb-1">
                  Email:{" "}
                  <Text className="text-white font-normal">{item.email}</Text>
                </Text>
              </View>
            )}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        ) : (
          <View className="flex-1 justify-center items-center">
            <Text className="text-white text-lg">No bookings found.</Text>
          </View>
        )
      ) : (
        <View className="flex-1 justify-center items-center">
          <Text className="text-white text-lg mb-4">
            Please sign in to view your history
          </Text>
          <TouchableOpacity
            onPress={() => router.push("/login")}
            className="px-6 py-3 bg-[#6B8E23] rounded-xl"
          >
            <Text className="text-black font-semibold text-base">Log In</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default history;
