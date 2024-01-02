import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function NotificationsMenu() {
  const { i18n } = useTranslation();

  const [language, setLanguage] = useState("en");

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
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
