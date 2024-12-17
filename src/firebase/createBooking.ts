
import { db } from "./config";
import { collection, addDoc  } from "firebase/firestore";

export default async function createBooking(booking: {}) {
     try {
        const ownerRef = collection(db, 'event-booking');
        await addDoc(ownerRef, booking);
     } catch (e) {
         console.error("Error adding document: ", e);
     }
} 