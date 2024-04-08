import Image from "next/image";
import React from "react";

export default function JourneySection() {
  return (
    <section>
      <div className="px-14 py-44 -mt-24 flex flex-col relative container">
        <h2 className="text-center text-[3.375rem] font-bold">
          Start your journey today.
        </h2>

        <div className="slanted-both justify-between items-center flex bg-[#EDEFFF] px-6 py-16">
          <div className="flex gap-5">
            <span className="h-fit bg-clip-text text-transparent bg-gradient-to-b from-[#A387D1] to-[#D1C4E275] font-semibold text-8xl">
              1
            </span>

            <div className="max-w-md">
              <h3 className="font-semibold text-[34px] leading-[44px]">
                Find your next star performer.
              </h3>
              <p className="mt-5">
                Explore the vast Zwilt marketplace to find the candidate that
                meets your needs.
              </p>

              <button className="mt-6 flex items-center gap-2" type="button">
                <Image
                  src="/footimage.png"
                  alt="Person Icon"
                  width={60}
                  height={60}
                  className="-rotate-90"
                />
                Join Now
              </button>
            </div>
          </div>
          <div></div>
        </div>

        <div className="slanted-both justify-between items-center flex bg-[#FFF7E1] px-6 py-16">
          <div className="flex gap-5">
            <span className="h-fit bg-clip-text text-transparent bg-gradient-to-b from-[#FFBE2EC2] to-[#FFBE2E00] font-semibold text-8xl">
              2
            </span>

            <div className="max-w-xs">
              <h3 className="font-semibold text-[34px] leading-[44px]">
                Evaluate to your heart’s content.
              </h3>
              <p className="mt-5">
                Assess the candidate through work history, transparent tests and
                video interviews.
              </p>

              <button className="mt-6 flex items-center gap-2" type="button">
                <Image
                  src="/footimage.png"
                  alt="Person Icon"
                  width={60}
                  height={60}
                  className="-rotate-90"
                />
                Browse More
              </button>
            </div>
          </div>
          <div></div>
        </div>

        <div className="slanted-both justify-between items-center flex bg-[#F3F3F3] px-6 py-16">
          <div className="flex gap-5">
            <span className="h-fit bg-clip-text text-transparent bg-gradient-to-b from-black/80 to-black/15 font-semibold text-8xl">
              3
            </span>

            <div className="max-w-sm">
              <h3 className="max-w-72 font-semibold text-[34px] leading-[44px]">
                Start building your team.
              </h3>
              <p className="mt-5">
                Onboard your candidate right away and start creating the next
                big thing.
              </p>

              <button className="mt-6 flex items-center gap-2" type="button">
                <Image
                  src="/footimage.png"
                  alt="Person Icon"
                  width={60}
                  height={60}
                  className="-rotate-90"
                />
                Join Now
              </button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
