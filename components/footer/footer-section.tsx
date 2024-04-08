import React from "react";
import { Separator } from "../ui/separator";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <section className="w-full slanted-top -mt-24  container">
      <div className="bg-gradient-to-b pt-36   from-[#0C0C0C]/100 to-[#0C0C0C]/95 w-full ">
        <div className="px-12">
          <div className="slanted-both justify-center items-center flex bg-[#525AA0]">
            <div className="max-w-3xl py-28 gap-4 items-center flex flex-col text-white text-4xl font-bold text-center">
              <h1 className="max-w-3xl mx-auto text-[3.375rem] text-center tracking-tight font-bold leading-[1.185em]">
                Need a job done, and done well? Get started
              </h1>
              <div className="cursor-pointer">
                <Image
                  src="/footimage.png"
                  alt="Person Icon"
                  width={60}
                  height={60}
                  className="mr-4"
                />
              </div>
            </div>
          </div>
          <div className="flex my-28 gap-16">
            <div className="flex flex-col items-start gap-7 text-white/80 max-w-80">
              <div className="flex gap-1 items-center justify-center">
                <Image src="/zwilt.png" alt="logo" width={60} height={60} />
                <Image src="/vector.png" alt="logo" width={30} height={30} />
              </div>
              <p className="font-light">
                We take complex hiring processes - and simplify them. Connecting
                you to the world’s highly qualified talent pool.
              </p>
              <div className="flex flex-col gap-4">
                <p className="font-medium text-sm">LINKS AND REDIRECTS</p>
                <div className="flex gap-4">
                  <Button className="bg-[#292B34] px-12 py-6 text-sm rounded-2xl">
                    Hire now
                  </Button>
                  <Button className="bg-[#292B34] px-12  py-6 text-sm rounded-2xl">
                    Apply now
                  </Button>
                </div>
              </div>
            </div>

            <div className="gap-14 flex flex-col">
              <h1 className="max-w-3xl mx-auto text-[3.375rem] text-left text-white tracking-tight font-bold leading-[1.185em]">
                Connecting the right people to the right businesses.
              </h1>
              <div className="grid gap-12 grid-cols-4">
                <ul className="flex flex-col gap-6">
                  <li className="text-white/50 text-sm">PLATFORM</li>
                  <li className="text-white text-lg">Find Work</li>
                  <li className="text-white text-lg">Find Talent</li>
                  <li className="text-white text-lg">Articles</li>
                  <li className="text-white text-lg">About Us</li>
                </ul>
                <ul className="flex flex-col gap-6">
                  <li className="text-white/50 text-sm">CATEGORIES</li>
                  <li className="text-white text-lg">Data Science</li>
                  <li className="text-white text-lg ">IT & Networking</li>
                  <li className="text-white text-lg">Web & Mobile</li>
                  <li className="text-white text-lg">About Us</li>
                </ul>
                <ul className="flex flex-col gap-6">
                  <li className="text-white/50  text-sm">HELP</li>
                  <li className="text-white text-lg">Contact Us</li>
                </ul>
                <ul className="flex flex-col gap-6">
                  <li className="text-white/50 text-sm">GET IN TOUCH @</li>
                  <li className="text-white text-lg">Instagram</li>
                  <li className="text-white text-lg">Linkedln</li>
                  <li className="text-white text-lg">Twitter</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Separator className="bg-gradient-to-r  from-[#595b60] to-transparent/100" />
        <div className="flex px-11 py-2 text-sm text-white justify-between">
          <p>All rights reserved by Zwilt</p>
          <div className="flex text-white/60  gap-3 underline">
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </section>
  );
}
