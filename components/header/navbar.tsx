import { Button } from "@/components/ui/button";
import { PenToolIcon, Rabbit } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavbarRoutes from "./navbar-routes";
import { MobileSidebar } from "./mobile-navbar";

export default function Navbar() {
  return (
    <nav className="w-full sticky p-3 md:p-6 inset-x-0 top-0 z-30 bg-white">
      <div className="container bg-[#525AA0] rounded-3xl shadow-2xl flex justify-between py-3 px-1 md:px-2">
        <Link href={"/"} className="flex items-center">
          <div className="flex ml-4 gap-1 items-center justify-center">
            <Image src="/zwilt.png" alt="logo" width={90} height={90} />
            <Image src="/vector.png" alt="logo" width={40} height={40} />
          </div>
        </Link>
        <NavbarRoutes />
        <div className="ml-auto lg:ml-2 gap-1 lg:flex hidden justify-center items-center">
          <Button
            variant="link"
            className="text-white items-center font-medium text-base"
          >
            Log In
          </Button>
          <Button className=" text-black py-6 rounded-2xl font-medium text-base hover:text-gray-900 bg-white">
            Join Now
          </Button>
        </div>
        <div className="lg:hidden flex">
          <MobileSidebar />
        </div>
      </div>
    </nav>
  );
}
