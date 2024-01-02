import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  XMarkIcon,
  Bars3Icon,
  AcademicCapIcon,
  ArchiveBoxIcon,
  CalendarIcon,
} from "@heroicons/react/24/solid";
import { MenuCustomList } from "./priorityAreasNavbarItem";
import { NavItem } from "./navItem";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import InputWithDropdown from "../languageSwitcher";

const NAV_MENU = [
  {
    name: "aboutUs",
    icon: RectangleStackIcon,
    href: "/about",
  },
  {
    name: "priorityAreas",
    icon: CommandLineIcon,
    href: "/priorityAreas",
  },
  {
    name: "news",
    icon: ArchiveBoxIcon,
    href: "/news",
  },
  {
    name: "publications",
    icon: UserCircleIcon,
    href: "/publications",
  },
  {
    name: "supporters",
    icon: AcademicCapIcon,
    href: "/supporters",
  },
  {
    name: "contactUs",
    icon: CalendarIcon,
    href: "/contact",
  },
];

export function Navbar() {
  const { t } = useTranslation();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar
      shadow={false}
      fullWidth
      className="border-0 sticky top-0 z-50"
      color="white"
      placeholder={undefined}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          as="a"
          href="/"
          target="_self"
          color="blue-gray"
          className="text-lg font-bold"
          placeholder={undefined}
        >
          {t("webPageName")}
        </Typography>
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ name, href }) => {
            return href === "/priorityAreas" ? (
              <MenuCustomList
                href={href}
                name={t("navbar." + name)}
                key={name}
              />
            ) : (
              <NavItem key={name} href={href}>
                {t("navbar." + name)}
              </NavItem>
            );
          })}
        </ul>
        <div className="hidden items-center gap-2 lg:flex">
          <Link href="/donate" target="_self">
            <Button color="gray" placeholder={undefined}>
              {t("navbar.donate")}
            </Button>
          </Link>
        </div>

        {/* <div className="hidden items-center gap-2 lg:flex">
          <InputWithDropdown />
        </div> */}
        <InputWithDropdown />
        <IconButton
          variant="text"
          placeholder={undefined}
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>

      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, icon: Icon }) => (
              <NavItem key={name}>
                <Icon className="h-5 w-5" />
                {t("navbar." + name)}
              </NavItem>
            ))}
          </ul>
          <div className="mt-6 mb-4 flex items-center gap-2">
            <Link href="/donate" target="_self">
              <Button color="gray" placeholder={undefined}>
                {t("navbar.blocks")}
              </Button>
            </Link>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
