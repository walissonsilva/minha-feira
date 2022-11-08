import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../../firebaseConfig";

export interface ShoppingListItem {
  id: number;
  title: string;
  amount: number;
  price: number;
  checked: boolean;
}

export interface ShoppingList {
  id: number;
  title: string;
  items: ShoppingListItem[];
}

const db = getFirestore(app);

export async function createShoppingList(
  id: number,
  title: string
): Promise<ShoppingList | undefined> {
  try {
    const newShoppingList = {
      id,
      title,
      items: [],
    };

    const docRef = await addDoc(
      collection(db, "shoppingList"),
      newShoppingList
    );

    console.log("New shopping list created in Firebase with success!");

    return newShoppingList;
  } catch (e) {
    console.error("Error adding shopping list on Firebase: ", e);
  }
}

export async function loadAllShoppingLists() {
  const querySnapshot = await getDocs(collection(db, "shoppingList"));
  const data: ShoppingList[] = [];
  querySnapshot.forEach((doc) => data.push(doc.data() as ShoppingList));

  return data;
}
