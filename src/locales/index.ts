const dictionaries = {
  en: () => import("./en.json").then((module) => module.default),
  am: () => import("./am.json").then((module) => module.default),
};
export type DictionaryType = keyof typeof dictionaries;

export const getDictionary = async (locale: DictionaryType) => {
  return dictionaries[locale]();
};
