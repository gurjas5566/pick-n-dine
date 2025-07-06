import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Platform, Text, TouchableOpacity, View } from "react-native";

const DatePickerComponent = ({ date, setDate }) => {
  const [show, setShow] = useState(false);

  const handlePress = () => {
    setShow(true);
  };

  const handleChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <View className="flex flex-row items-center">
      <TouchableOpacity
        onPress={handlePress}
        className="bg-[#696969] px-4 py-2 rounded-xl ml-3"
      >
        <Text className="text-[#6B8E23] text-base font-bold">
          {formattedDate}
        </Text>

        {show && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            minimumDate={new Date()}
            maximumDate={new Date(new Date().setDate(new Date().getDate() + 7))}
            onChange={handleChange}
            accentColor="#FFD580"
            textColor="#FFD580"
            style={Platform.OS === "ios" ? { backgroundColor: "white" } : {}}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default DatePickerComponent;
