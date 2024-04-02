"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { MenuIcon } from "lucide-react";
import { Button } from "../ui/button";

export const MobileSidebar = () => {
  return (
    <Button variant="ghost">
      <MenuIcon size={24} className="text-white font-extrabold" />
    </Button>
  );
};
