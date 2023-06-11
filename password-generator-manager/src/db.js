import Dexie from "dexie";
import { useLiveQuery } from "dexie-react-hooks";

const db = new Dexie("myPasswordsDB");
db.version(1).stores({
  passwords: "++id, website, password, createdOn",
});

export const usePasswords = () => useLiveQuery(() => db.passwords.toArray());

// export const addPassword = async (website, password) => {
//   try {
//     const createdOn = new Date().toISOString();
//     await db.passwords.add({ website, password, createdOn });
//     console.log("Password saved successfully.");
//   } catch (error) {
//     console.log("Error saving password:", error);
//   }
// };

export const addPassword = async (website, password) => {
  try {
    const createdOn = new Date().toISOString();
    const existingEntry = await db.passwords.get({ website });
    if (existingEntry) {
      await db.passwords.update(existingEntry.id, { password, createdOn });
      console.log("Password updated successfully.");
    } else {
      await db.passwords.add({ website, password, createdOn });
      console.log("Password saved successfully.");
    }
  } catch (error) {
    console.log("Error saving password:", error);
  }
};

export default db;
