import Image from "next/image";
import React from "react";

export default function JourneySection() {
  return (
    <section>
      <div className="px-14 py-44 -mt-24 bg-white slanted-both flex flex-col relative gap-16 container">
        <div className="flex w-full">
          <div className="flex w-1/2 v flex-col gap-10">
            <div className="flex w-1/2 justify-center flex-col gap-9">
              <h1 className="w-[570px] text-black text-[3.375rem] tracking-tight font-bold leading-[1.185em]">
                How we ensure you’re in good hands.
              </h1>
              <p className="text-xl w-[646px] text-black ">
                With our comprehensive screening process, we hand-pick highly
                skilled candidates so you can onboard them in a matter of days.
              </p>
              <div className="grid gap-3 h-64 grid-col-1">
                <div className="h-20 flex justify-center gap-3 bg-[#ECECEC] w-[635px]">
                  <div className="rounded  w-full p-3">
                    <div className="relative w-full  h-full">
                      {/* <Image
                        src="/play.png"
                        alt="play-img"
                        fill
                        className="object-contain"
                      /> */}
                    </div>
                  </div>
                </div>
                <div className="h-20 bg-[#ECECEC] w-[635px]">
                  <div className="rounded w-full p-3">
                    <div className="relative w-full  h-full">
                      <Image
                        src="/play.png"
                        alt="play-img"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="h-20 bg-[#ECECEC] w-[635px]">
                  <div className="rounded w-full p-3">
                    <div className="relative w-full  h-full">
                      <Image
                        src="/play.png"
                        alt="play-img"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="h-20 bg-[#ECECEC] w-[635px]">
                  <div className="rounded w-full p-3">
                    <div className="relative w-full  h-full">
                      <Image
                        src="/play.png"
                        alt="play-img"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-20 w-full justify-center">
            <div className="slanted-edge w-full relative h-[565px] ">
              <Image
                alt="/slantedimage.png"
                fill
                className="object-contain"
                src="/slantedimage.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
