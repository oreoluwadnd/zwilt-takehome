import Image from "next/image";
import React from "react";

export default function JourneySection() {
  return (
    <section>
      <div className="px-14 py-44 -mt-24 bg-white slanted-both flex flex-col relative gap-16 container">
        <div className="flex w-full">
          <div className="flex w-1/2 v flex-col gap-10">
            <div className="flex w-[40%] justify-center flex-col gap-9">
              <h1 className="max-w-96 text-black text-[3.375rem] tracking-tight font-bold leading-[1.185em]">
                Why choose Zwilt?
              </h1>
              <p className="text-xl max-w-72 text-black ">
                We take complex hiring processes - and simplify them. Connecting
                you to the world’s highly qualified talent pool.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="shadow-2xl">
              <div className="slanted-edge shadow-2xl  border-2 border-[#F2F4F8] w-96 h-96">
                ;olkkdlskdffffffffffffffffffffffffffffffffffffffffffffffffffnmfffassssfffffffffffkkkkkkkkkkkkkk
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
