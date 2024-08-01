import { db } from "../firebase";
import { addDoc, collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";

// Add Admin to the Database
export async function addAdmin(adminId, admin) {
    try {
      const adminCollectionReference = collection(db, "admin", adminId,);
      const addedadminPromise = await addDoc(adminCollectionReference,);
      return addedadminPromise.id;
    } catch (error) {
      console.log('Error adding admin:', error);
      throw error;
    }
  }

// Get Admin from the Database