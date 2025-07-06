import { collection, doc, setDoc } from "firebase/firestore";
import { slots } from "../app/store/restaurants"; // Adjust path if needed
import { db } from "./firebaseConfig"; // Adjust path if needed

const restaurantData = slots;

const uploadData = async () => {
  try {
    const collectionRef = collection(db, "slots");

    for (let i = 0; i < restaurantData.length; i++) {
      const restaurant = restaurantData[i];
      const docRef = doc(collectionRef, `slot_${i + 1}`);
      await setDoc(docRef, restaurant);
    }

    console.log("Data successfully uploaded");
  } catch (e) {
    console.log("Error while uploading data", e);
  }
};

export default uploadData;
