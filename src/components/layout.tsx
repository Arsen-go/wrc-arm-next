"use client";
import React from "react";
import "../styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";

export function Layout({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default Layout;
