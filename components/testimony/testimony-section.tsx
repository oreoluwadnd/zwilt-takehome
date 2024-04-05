import Image from "next/image";
import React from "react";

export default function TestimonySection() {
  return (
    <section>
      <div className="px-14 py-44 -mt-24 bg-[#202229] slanted-both flex flex-col relative gap-16 container">
        <div className="flex w-full">
          <div className="flex w-1/2 v flex-col gap-10">
            <h1 className="max-w-96 text-white text-[3.375rem] tracking-tight font-bold leading-[1.185em]">
              <span>How it worked for Jason </span>{" "}
              <span className="inline-flex items-center">
                <Image
                  src="/jason.png"
                  alt="Person Icon"
                  width={57}
                  className="rounded-full"
                  height={57}
                />
              </span>{" "}
              <span className="inline-block"> at</span>
              <Image
                src="/groovehq.png"
                alt="Person Icon"
                width={192}
                className="mt-4"
                height={50}
              />
            </h1>
            <p className="text-xl max-w-96 text-white/50 ">
              Zwilt enabled us to deliver on time and they’ve been heavy hitters
              in our corner since.
            </p>
            <div className="flex gap-2">
              <div className="bg-white px-3 py-4 rounded-2xl flex items-center justify-center ">
                <Image
                  src="/testimony02.png"
                  alt="Person Icon"
                  width={25}
                  className="rounded-full"
                  height={20}
                />
              </div>
              <div className="bg-white px-3 py-4 flex items-center justify-center rounded-2xl">
                <Image
                  src="/testimony01.png"
                  alt="Person Icon"
                  width={25}
                  className="rounded-full"
                  height={20}
                />
              </div>
            </div>
          </div>
          <div className="flex mt-16 flex-col border-3 justify-center">
            <div className="max-w-[499px] gap-14 flex flex-col">
              <div className="flex gap-4">
                <div className="w-24 h-24 relative">
                  <Image
                    src="/Frame.png"
                    className="object-contain"
                    fill
                    alt="shopify"
                  />
                </div>
                <div className="flex flex-col ">
                  <p className="font-semibold text-3xl text-white">
                    Jason Makki
                  </p>
                  <p className="font-medium text-white/50">
                    Engineer at GROOVE
                  </p>
                  <p className="font-medium text-white/50">San Francisco</p>
                </div>
              </div>
              <p className="text-xl text-white/50 leading-8">
                Zwilt enabled us to deliver on time and they’ve been heavy
                hitters in our corner since. Zwilt enabled us to deliver on time
                and they’ve been heavy hitters in our corner since.Zwilt enabled
                us to deliver on time and they’ve been heavy hitters.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0">
          <div className=" w-44 h-44">
            <Image src="/exclam.png" alt="medal-image" fill />
          </div>
        </div>
      </div>
    </section>
  );
}
