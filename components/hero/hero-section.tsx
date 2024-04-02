import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import { ArrowRightIcon, CheckCircle } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section className="w-full py-4 md:py-10 lg:py-10 xl:py-10">
      <div className="container px-4 md:px-6 flex justify-center">
        <div className=" max-w-4xl flex flex-col items-center space-y-8">
          <div className="flex ">
            <h1 className="text-5xl font-bold">Finding the right fit&nbsp;</h1>
            <div className="flex items-center">
              <Image
                src="/avatar.png"
                alt="Person Icon"
                width={90}
                height={90}
                className="mr-4"
              />
              <p className="text-5xl font-bold">has</p>
            </div>
            <p className="text-5xl font-bold">never been easier.</p>
          </div>

          <div className="bg-white flex-col p-5 shadow-lg rounded-lg  flex space-x-4 mt-4  border border-slate-200 ">
            {/* <div className="flex flex-col md:flex-row w-full gap-2">
              <Input
                type="email"
                className="text-lg focus:ring-blue-500 focus:ring-offset-red-500 focus:shadow-md focus:outline-none focus:ring-offset-2 "
                placeholder="your@email.com"
              />
              <Button
                variant="default"
                className="bg-[#E63E21]  hover:opacity-80 hover:bg-[#ff5233] text-white"
              >
                Start my free month
                <ArrowRightIcon className="w-6 h-6 ml-1" />
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
