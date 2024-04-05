import Image from "next/image";
import React from "react";

export default function FaqSection() {
  return (
    <section>
      <div className="py-36 bg-[#F3F3F3] flex flex-col relative gap-16 container">
        <h1 className="max-w-2xl  mx-auto text-[3.375rem] text-center tracking-tight font-bold leading-[1.185em]">
          Frequently asked questions
        </h1>
        <div className="flex w-full flex-col">
          <div className="h-28 border-y">
            <div className="flex h-full items-center">
              <div className="w-56 border-r flex justify-center items-center h-full">
                <h2 className="text-2xl font-semibold">General</h2>
              </div>
              <div className="w-full flex items-center justify-center">
                <p className="text-xl leading-6">
                  I want to work part-time, is that possible
                </p>
              </div>
            </div>
          </div>

          <div className="h-28 border-y">
            <div className="flex h-full items-center">
              <div className="w-56 border-r opacity-0 flex justify-center items-center h-full">
                <h2 className="text-2xl font-semibold">General</h2>
              </div>
              <div className="w-full flex items-center justify-center">
                <p className="text-xl leading-6">
                  How long are the average projects?
                </p>
              </div>
            </div>
          </div>

          <div className="h-28 bg-[#D6D6D6] border-y">
            <div className="flex h-full items-center">
              <div className="w-56 border-r opacity-0 flex justify-center items-center h-full">
                <h2 className="text-2xl font-semibold">General</h2>
              </div>
              <div className="w-full  flex items-center justify-center">
                <p className="text-xl leading-6">How does the payment works?</p>
              </div>
              <div className="w-10 h-5 mr-7  relative">
                <Image src="/vector.png" className="" alt="233" fill />
              </div>
            </div>
          </div>

          <div className="h-28 border-y">
            <div className="flex h-full items-center">
              <div className="w-56 border-r opacity-0 flex justify-center items-center h-full"></div>
              <div className="w-full flex items-center justify-center">
                <p className="text-xl leading-6">How much can I earn?</p>
              </div>
            </div>
          </div>

          <div className="h-28 border-y">
            <div className="flex h-full items-center">
              <div className="w-56 bg-[#D6D6D6] border-r flex justify-center items-center h-full">
                <h2 className="text-2xl font-semibold">General</h2>
              </div>
              <div className="w-56 border-r flex justify-center items-center text-center h-full">
                <h2 className="text-2xl font-semibold">Joining Process</h2>
              </div>
              <div className="w-full flex items-center justify-center">
                <p className="text-xl -ml-36 leading-6">
                  I want to work part-time, is that possible
                </p>
              </div>
            </div>
          </div>

          <div className="h-28 border-y">
            <div className="flex h-full items-center">
              <div className="w-56 border-r opacity-0  flex justify-center items-center h-full"></div>
              <div className="w-full flex items-center justify-center">
                <p className="text-xl leading-6">
                  How long are the average projects?
                </p>
              </div>
            </div>
          </div>

          <div className="h-28 border-y">
            <div className="flex h-full items-center">
              <div className="w-56 border-r opacity-0 flex justify-center items-center h-full"></div>
              <div className="w-full flex items-center justify-center">
                <p className="text-xl leading-6">
                  How long are the average projects?
                </p>
              </div>
            </div>
          </div>
          <div className="h-28 border-y">
            <div className="flex h-full items-center">
              <div className="w-56 opacity-0 border-r flex justify-center items-center h-full"></div>
              <div className="w-full flex items-center justify-center">
                <p className="text-xl leading-6">How much can I earn?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
