"use client";
import { Button, Typography } from "@material-tailwind/react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Card,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { DictionaryType } from "@/locales";

const menuItems = [
  {
    key: "feministSafeSpace",
    title: "Feminist Safe Space",
    description:
      "Courses and discussions, Volunteering, Psychological assistance, Legal advice.",
    href: "/priorityAreas/feminist",
  },
  {
    key: "healthAndRights",
    title: "Sexual and Reproductive Health and Rights",
    description:
      "Individual counseling, Awareness raising, Informational campaigns.",
    href: "/priorityAreas/rights",
  },
  {
    key: "rightsAdvocacy",
    title: "Women’s Rights Advocacy",
    description: "The Women’s Resource Center is affiliated with...",
    href: "/priorityAreas/advocacy",
  },
];

interface PriorityAreaNavbarMenuProps {
  href: string;
  name: string;
  lang: DictionaryType;
  locales: any;
}

export default function PriorityAreaNavbarMenu({
  href,
  name,
  lang,
  locales,
}: PriorityAreaNavbarMenuProps) {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const router = useRouter();

  return (
    <Menu open={openMenu} handler={setOpenMenu} allowHover>
      <MenuHandler>
        <Button
          placeholder={undefined}
          variant="text"
          className="flex items-center gap-3 text-base font-normal capitalize tracking-normal"
        >
          {name}
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
            onClick={(e) => router.push(href)}
            src={
              "https://nawl.ca/wp-content/uploads/2022/09/reproductive-rights.jpg"
            }
            alt={""}
          />
        </Card>
        <ul className="col-span-4 flex w-full flex-col gap-1">
          {menuItems.map(
            ({ href, key }: { href: string; key: string }, index: number) => {
              return (
                <Link href={"/" + lang + href} key={index}>
                  <MenuItem placeholder={undefined}>
                    <Typography
                      placeholder={undefined}
                      variant="h6"
                      color="blue-gray"
                      className="mb-1"
                    >
                      {locales[key + "Title"]}
                    </Typography>
                    <Typography
                      placeholder={undefined}
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      {locales[key + "Desc"]}
                    </Typography>
                  </MenuItem>
                </Link>
              );
            }
          )}
        </ul>
      </MenuList>
    </Menu>
  );
}
