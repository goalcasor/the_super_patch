
import { db } from "./config";
import { collection, addDoc  } from "firebase/firestore";
import { ContactType } from "@/types/ContactType";

export default async function addContact(contact: ContactType) {
     try {
        const ownerRef = collection(db, 'contactsNavidad');
        await addDoc(ownerRef, contact);
     } catch (e) {
         console.error("Error adding document: ", e);
     }
} 