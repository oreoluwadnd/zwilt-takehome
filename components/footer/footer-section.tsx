import React from "react";
import { Separator } from "../ui/separator";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <section className="w-full container">
      <div className="bg-gradient-to-b pt-24 from-[#0C0C0C]/100 to-[#0C0C0C]/95 slanted-top  w-full slanted-top">
        <div className="px-12">
          <div className="slanted-both justify-center items-center flex bg-[#525AA0]">
            <div className="max-w-lg py-28 gap-4 items-center flex flex-col text-white text-4xl font-bold text-center">
              <h2>Need a job done, and done well? Get started</h2>
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
          <div className="flex py-5 gap-16">
            <div className="flex flex-col items-start gap-5 text-white/80 max-w-80">
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
                <div className="flex gap-2">
                  <Button className="bg-[#292B34] p-6 rounded-2xl">
                    Hire now
                  </Button>
                  <Button className="bg-[#292B34] p-6 rounded-2xl">
                    Apply now
                  </Button>
                </div>
              </div>
            </div>

            <div className="">
              <h2 className="text-white text-4xl font-bold">
                Connecting the right people to the right businesses.
              </h2>
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
