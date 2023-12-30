import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import moduleName from "../../../public/image/reproductive-rights.jpg";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Card,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

const menuItems = [
  {
    title: "Feminist Safe Space",
    description:
      "Courses and discussions, Volunteering, Psychological assistance, Legal advice.",
    href: "priorityAreas/feminist",
  },
  {
    title: "Sexual and Reproductive Health and Rights",
    description:
      "Individual counseling, Awareness raising, Informational campaigns.",
    href: "priorityAreas/rights",
  },
  {
    title: "Women’s Rights Advocacy",
    description: "The Women’s Resource Center is affiliated with...",
    href: "priorityAreas/advocacy",
  },
];

export function MenuCustomList({ href }: { href: string }) {
  const [openMenu, setOpenMenu] = React.useState(false);
  const router = useRouter();

  return (
    <Menu open={openMenu} handler={setOpenMenu} allowHover>
      <MenuHandler>
        <Button
          placeholder={undefined}
          variant="text"
          className="flex items-center gap-3 text-base font-normal capitalize tracking-normal"
        >
          Priority Areas
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3.5 w-3.5 transition-transform ${
              openMenu ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList
        placeholder={undefined}
        className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid"
      >
        <Card
          placeholder={undefined}
          shadow={false}
          className="col-span-3 flex h-full w-full items-center justify-center rounded-2xl p-4"
        >
          <Image
            width={180}
            height={180}
            onClick={(e) => router.push("priorityAreas")}
            src={
              "https://nawl.ca/wp-content/uploads/2022/09/reproductive-rights.jpg"
            }
            alt={""}
          />
        </Card>
        <ul className="col-span-4 flex w-full flex-col gap-1">
          {menuItems.map(({ title, description, href }) => (
            <Link href={href} key={title}>
              <MenuItem placeholder={undefined}>
                <Typography
                  placeholder={undefined}
                  variant="h6"
                  color="blue-gray"
                  className="mb-1"
                >
                  {title}
                </Typography>
                <Typography
                  placeholder={undefined}
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  {description}
                </Typography>
              </MenuItem>
            </Link>
          ))}
        </ul>
      </MenuList>
    </Menu>
  );
}
