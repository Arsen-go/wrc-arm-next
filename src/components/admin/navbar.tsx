import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/navigation";

const navListMenuItems = [
  {
    title: "Priority Areas",
    icon: SquaresPlusIcon,
    href: "/priorityAreas",
  },
  {
    title: "About Us",
    icon: UserGroupIcon,
    href: "/about",
  },
  {
    title: "Publications",
    icon: Bars4Icon,
    href: "/publications",
  },
  {
    title: "Contact",
    icon: PhoneIcon,
    href: "/contact",
  },
  {
    title: "News",
    icon: NewspaperIcon,
    href: "/news",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const router = useRouter();

  //   router.push("/")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(({ icon, title, href }, key) => (
    <Link href="#" key={key}>
      <MenuItem
        placeholder={undefined}
        className="flex items-center gap-3 rounded-lg"
      >
        <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
          {" "}
          {React.createElement(icon, {
            strokeWidth: 2,
            className: "h-6 text-gray-900 w-6",
          })}
        </div>
        <div>
          <Typography
            placeholder={undefined}
            variant="h6"
            color="blue-gray"
            className="flex items-center text-sm font-bold"
          >
            {title}
          </Typography>
        </div>
      </MenuItem>
    </Link>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography
            placeholder={undefined}
            as="div"
            variant="small"
            className="font-medium"
          >
            <ListItem
              placeholder={undefined}
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Resources
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList
          placeholder={undefined}
          className="hidden max-w-screen-xl rounded-xl lg:block"
        >
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List
      placeholder={undefined}
      className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1"
    >
      <NavListMenu />

      <Typography
        placeholder={undefined}
        as="a"
        href="/"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem
          placeholder={undefined}
          className="flex items-center gap-2 py-2 pr-4"
        >
          Home
        </ListItem>
      </Typography>

      <Typography
        placeholder={undefined}
        as="a"
        href="/admin/login"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem
          placeholder={undefined}
          className="flex items-center gap-2 py-2 pr-4"
        >
          Log out
        </ListItem>
      </Typography>
    </List>
  );
}

export default function MegaMenuWithHover() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar
      placeholder={undefined}
      className="mx-auto max-w-screen-xl px-4 py-2"
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          placeholder={undefined}
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2"
        >
          WRC Admin
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          placeholder={undefined}
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
