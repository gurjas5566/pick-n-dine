import Ionicons from "@expo/vector-icons/Ionicons";
import { useLocalSearchParams } from "expo-router";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Linking,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DatePickerComponent from "../../components/Restaurant/DatePickerComponent";
import FindSlots from "../../components/Restaurant/FindSlots";
import GuestPickerComponent from "../../components/Restaurant/GuestPickerComponent";
import { db } from "../../config/firebaseConfig";

const Restaurant = () => {
  const { restaurant } = useLocalSearchParams();
  const windowWidth = Dimensions.get("window").width;
  const flatListRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [restaurantData, setRestaurantData] = useState({});
  const [carouselImages, setCarouselImages] = useState([]);
  const [slotsData, setSlotsData] = useState([]);
  const [date, setDate] = useState(new Date());
  const [selectedNumber, setSelectedNumber] = useState(2);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleNextImage = () => {
    if (carouselImages.length === 0) return;

    const nextIndex =
      currentIndex < carouselImages.length - 1 ? currentIndex + 1 : 0;

    setCurrentIndex(nextIndex);
    flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
  };

  const handlePrevImage = () => {
    if (carouselImages.length === 0) return;

    const prevIndex =
      currentIndex > 0 ? currentIndex - 1 : carouselImages.length - 1;

    setCurrentIndex(prevIndex);
    flatListRef.current?.scrollToIndex({ index: prevIndex, animated: true });
  };

  const renderCarouselItem = ({ item }) => (
    <View
      style={{ width: windowWidth - 2 }}
      className="h-64 relative rounded-[25px]"
    >
      <View
        style={{
          position: "absolute",
          top: "50%",
          backgroundColor: "rgba(0,0,0,0.6)",
          borderRadius: 50,
          padding: 5,
          zIndex: 10,
          right: "6%",
        }}
      >
        <Ionicons
          onPress={handleNextImage}
          name="arrow-forward"
          size={24}
          color="white"
        />
      </View>

      <View
        style={{
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          left: "50%",
          transform: [{ translateX: -0.5 * Dimensions.get("window").width }],
          zIndex: 10,
          bottom: 15,
        }}
      >
        {carouselImages.length > 0 &&
          carouselImages[0].images?.map((_, i) => (
            <View
              key={i}
              style={{
                marginHorizontal: 4,
                borderRadius: 999,
                backgroundColor: "white",
                width: i === currentIndex ? 12 : 8,
                height: i === currentIndex ? 12 : 8,
              }}
            />
          ))}
      </View>

      <View
        style={{
          position: "absolute",
          top: "50%",
          backgroundColor: "rgba(0,0,0,0.6)",
          borderRadius: 50,
          padding: 5,
          zIndex: 10,
          left: "2%",
        }}
      >
        <Ionicons
          onPress={handlePrevImage}
          name="arrow-back"
          size={24}
          color="white"
        />
      </View>
      <Image
        source={{ uri: item }}
        className="h-64 rounded-[20px]"
        style={{
          opacity: 0.9,
          backgroundColor: "black",
          marginHorizontal: 10,
          borderRadius: 25,
        }}
      />
    </View>
  );
  const handleLocation = async () => {
    const url = "https://maps.app.goo.gl/c2w9H2fNfbT4FXx4A";
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log("Can't Open URL", url);
    }
  };
  const getRestaurantData = async () => {
    try {
      const restaurantQuery = query(
        collection(db, "restaurants"),
        where("name", "==", restaurant)
      );
      const restaurantSnapshot = await getDocs(restaurantQuery);

      if (restaurantSnapshot.empty) {
        console.log("No restaurant found");
        return;
      }

      const doc = restaurantSnapshot.docs[0];
      const restaurantInfo = doc.data();
      setRestaurantData(restaurantInfo);

      // Fetch Carousel Images
      const carouselQuery = query(
        collection(db, "carousel"),
        where("res_id", "==", doc.ref)
      );
      const carouselSnapshot = await getDocs(carouselQuery);
      const images = [];

      carouselSnapshot.forEach((carouselDoc) => {
        const data = carouselDoc.data();
        if (Array.isArray(data.images)) {
          images.push(...data.images); // Merge images from all matching docs
        } else if (data.image) {
          images.push(data.image); // Support for single image fallback
        }
      });

      setCarouselImages(images);

      // Fetch Slots
      const slotsQuery = query(
        collection(db, "slots"),
        where("ref_id", "==", doc.ref)
      );
      const slotsSnapshot = await getDocs(slotsQuery);
      const slots = slotsSnapshot.docs.map((slotDoc) => slotDoc.data());

      setSlotsData(slots[0]?.slot);
    } catch (error) {
      console.error("Error while fetching data:", error);
    }
  };

  useEffect(() => {
    getRestaurantData();
  }, [restaurant]);

  return (
    <SafeAreaView
      style={[
        { backgroundColor: "#2b2b2b" },
        Platform.OS === "android" && { paddingBottom: 40 },
      ]}
    >
      <ScrollView className="h-full">
        {/* Header */}
        <View className="flex-1 my-2 p-2">
          <Text className="text-xl text-[#6B8E23] mr-2 font-semibold">
            {restaurant}
          </Text>
          <View className="border-b border-[#6B8E23]" />
        </View>

        {/* Carousel */}
        <View className="h-64 max-w-[98%] mx-2 rounded-[25px]">
          <FlatList
            ref={flatListRef}
            data={carouselImages}
            renderItem={renderCarouselItem}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            scrollEnabled={false}
            showsHorizontalScrollIndicator={false}
            style={{ borderRadius: 25 }}
          />
        </View>
        <View className="flex-1 flex-row mt-2 p-2">
          <Ionicons name="location-sharp" size={24} color="#6B8E23" />
          <Text className="max-w-[75%] text-white">
            {restaurantData?.address} |{"  "}
            <Text
              onPress={handleLocation}
              className="underline text-[#6B8E23] italic font-semibold"
            >
              Location
            </Text>
          </Text>
        </View>
        <View className="flex-1 flex-row mt-2 p-2">
          <Ionicons name="time" size={24} color="#6B8E23" />
          <Text className="max-w-[75%] text-white font-semibold">
            {restaurantData?.opening} - {restaurantData?.closing}
          </Text>
        </View>
        <View className="flex-1 border p-1 border-[#6B8E23] rounded-lg">
          <View className="flex-1 flex-row m-2 p-2 justify-end items-center">
            <View className="flex-1 flex-row">
              <Ionicons name="calendar" size={20} color="#6B8E23" />
              <Text className="text-white mx-2 text-lg ">
                Select booking date
              </Text>
            </View>
            <DatePickerComponent date={date} setDate={setDate} />
          </View>
          <View className="flex-1 flex-row  bg-[#474747] rounded-lg m-2 p-2 justify-end items-center">
            <View className="flex-1 flex-row">
              <Ionicons name="people" size={20} color="#6B8E23" />
              <Text className="text-white mx-2 text-base ">
                Select number of guests
              </Text>
            </View>
            <GuestPickerComponent
              selectedNumber={selectedNumber}
              setSelectedNumber={setSelectedNumber}
            />
          </View>
        </View>
        <View className="flex-1">
          <FindSlots
            restaurant={restaurant}
            date={date}
            selectedNumber={selectedNumber} //For number of Guests
            slots={slotsData}
            selectedSlot={selectedSlot}
            setSelectedSlot={setSelectedSlot}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Restaurant;
