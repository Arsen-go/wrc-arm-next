import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
} from "@material-tailwind/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LanguageMenu({ lang }: any) {
  const router = useRouter();

  const [language, setLanguage] = useState(lang);

  const changeLanguage = (lang: string) => {
    localStorage.setItem("lang", lang);
    setLanguage(lang);
    // Split the path by "/"
    const pathSegments = window.location.pathname.split("/");

    // Get the part after the second "/"
    const result = pathSegments.slice(2).join("/");
    router.push(`${lang + "/" + result}`);
  };

  return (
    <Menu>
      <MenuHandler>
        <IconButton placeholder={undefined} variant="text">
          <i className="fas fa-language" />
          {language}
        </IconButton>
      </MenuHandler>
      <MenuList placeholder={undefined} className="flex flex-col gap-2">
        <MenuItem
          onClick={() => changeLanguage("en")}
          className="text-sm h-8 px-4"
          placeholder={undefined}
        >
          English
        </MenuItem>
        <MenuItem
          onClick={() => changeLanguage("am")}
          className="text-sm h-8 px-4"
          placeholder={undefined}
        >
          Հայերեն
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
