import { collection, getDocs, getFirestore, doc, updateDoc, getDoc, addDoc } from "firebase/firestore";
import app from "./init";

const firestore = getFirestore(app);

export async function addData(collectionName: string, newData: any) {
  try {
    await addDoc(collection(firestore, collectionName), newData);
    return true;
  } catch (error) {
    throw error;
  }
}

export async function getData(collectionName: string) {
  try {
    const snapshot = await getDocs(collection(firestore, collectionName));

    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getDataByNewDate(collectionName: string) {
  try {
    const querySnapshot = await getDocs(collection(firestore, collectionName));

    const sortedDocs = querySnapshot.docs.sort((a, b) => {
      const aDate = new Date(a.data().date);
      const bDate = new Date(b.data().date);
      return bDate.getTime() - aDate.getTime();
    });

    const latestDoc = sortedDocs[0];

    if (latestDoc) {
      const latestData = {
        id: latestDoc.id,
        ...latestDoc.data(),
      };
      return latestData;
    } else {
      throw new Error("No data found");
    }
  } catch (error) {
    throw error;
  }
}

export async function getDataById(collectionName: string, id: string) {
  try {
    const snapshot = await getDoc(doc(firestore, collectionName, id));
    const data = snapshot.data();
    return data;
  } catch (error) {
    return null;
  }
}

export async function getDataByField(collectionName: string, fieldName: string, value: string) {
  try {
    const querySnapshot = await getDocs(collection(firestore, collectionName));
    const data = querySnapshot.docs
      .filter((doc) => doc.data()[fieldName] === value)
      .map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    return data;
  } catch (error) {
    throw error;
  }
}

export async function updateDataById(collectionName: string, data: any, revenue: number) {
  const id = data.id;
  try {
    const docRef = doc(firestore, collectionName, id);

    const existingData = await getDataById(collectionName, id);

    if (existingData) {
      delete data.id;
      Object.keys(data).forEach((key) => {
        if (existingData.hasOwnProperty(key)) {
          existingData[key] += parseInt(data[key]);
          if (key === "gallonFill") {
            existingData["volume"] -= parseInt(data[key]) * 19;
          } else if (key === "gallonSell") {
            existingData.revenue["grossProfit"] += revenue;
          }
        } else {
          existingData[key] = parseInt(data[key]);
        }
      });
      await updateDoc(docRef, existingData);
    } else {
      new Error("Data not found");
    }

    return true;
  } catch (error) {
    throw error;
  }
}
export async function updateDataSpendingById(collectionName: string, data: any) {
  const id = data.id;
  try {
    const docRef = doc(firestore, collectionName, id);

    const existingData = await getDataById(collectionName, id);

    if (existingData) {
      delete data.id;
      delete data.spending;
      Object.keys(data).forEach((key) => {
        if (existingData.spending.hasOwnProperty(key)) {
          existingData.spending[key] += parseInt(data[key]);
        } else {
          existingData.spending[key] = parseInt(data[key]);
        }
      });
      await updateDoc(docRef, existingData);
    } else {
      new Error("Data not found");
    }

    return true;
  } catch (error) {
    throw error;
  }
}
