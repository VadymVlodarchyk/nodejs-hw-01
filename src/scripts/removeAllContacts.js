import { writeContacts } from "../utils/writeContacts.js";

export const removeAllContacts = async () => {
  try {
    await writeContacts([]); // записуємо порожній масив у файл
    console.log("🗑️ Усі контакти видалено.");
  } catch (error) {
    console.error("❌ Помилка при видаленні всіх контактів:", error.message);
  }
};

removeAllContacts();
