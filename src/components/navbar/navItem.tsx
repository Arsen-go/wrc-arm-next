import React from "react";
import { Navbar as MTNavbar, Typography } from "@material-tailwind/react";
import { MenuCustomList } from "./priorityAreasNavbarItem";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

export function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={"_self"}
        variant="paragraph"
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-900"
        placeholder={undefined}
      >
        {children}
      </Typography>
    </li>
  );
}
