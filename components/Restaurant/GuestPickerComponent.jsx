import { Text, TouchableOpacity, View } from "react-native";

const GuestPickerComponent = ({ selectedNumber, setSelectedNumber }) => {
  const decrementGuest = () => {
    if (selectedNumber > 1) setSelectedNumber(selectedNumber - 1);
  };
  const incrementGuest = () => {
    if (selectedNumber < 15) setSelectedNumber(selectedNumber + 1);
  };
  return (
    <View className="flex flex-row items-center rounded-lg text-white text-base">
      <TouchableOpacity onPress={decrementGuest} className="rounded">
        <Text className="text-white text-lg border border-[#6B8E23] rounded-l-lg px-3">
          -
        </Text>
      </TouchableOpacity>
      <Text className="px-3 text-white bg-[#474747] text-lg font-semibold ">
        {selectedNumber}
      </Text>
      <TouchableOpacity onPress={incrementGuest} className="rounded">
        <Text className="text-white text-lg border border-[#6B8E23] rounded-r-lg px-3">
          +
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default GuestPickerComponent;
