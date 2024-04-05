import Image from "next/image";
import React, { useCallback } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

import Autoplay, { AutoplayType } from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import {
  usePrevNextButtons,
  PrevButton,
  NextButton,
} from "./EmblaCarouselArrowButton";
import { cn } from "@/lib/utils";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const options: EmblaOptionsType = { dragFree: false, loop: true };
const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());

export default function CarouselSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay as AutoplayType;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options?.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  );

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <section>
      <div className="pl-14 py-44 -mt-24 bg-gradient-to-t from-[#D8D2FF]/50 flex flex-col relative gap-16 container">
        <div className="flex w-full">
          <div className="flex w-[40%] justify-center flex-col gap-9">
            <h1 className="max-w-96 text-black text-[3.375rem] tracking-tight font-bold leading-[1.185em]">
              Why choose Zwilt?
            </h1>
            <p className="text-xl max-w-72 text-black ">
              We take complex hiring processes - and simplify them. Connecting
              you to the world’s highly qualified talent pool.
            </p>
          </div>
          <div className="w-[60%] justify-center">
            <div className="overflow-hidden  rounded-sm w-full" ref={emblaRef}>
              <div className="flex touch-pan-y w-full ml--1">
                <div className="flex-none gap-2 flex-shrink-0 w-full min-w-0 ">
                  <div className=" shadow-xl rounded-md ml-2 bg-white p-14 font-semibold flex items-center h-[652px]">
                    <div className="flex mt-4 flex-col gap-4">
                      <h1 className="max-w-96 text-black text-[3.375rem] tracking-tight font-bold leading-[1.185em]">
                        Onboard without the risk.
                      </h1>
                      <ul className="flex flex-col gap-4">
                        <li className="flex items-center  gap-2">
                          <div className="h-2 max-w-72 bg-[#50589F] rounded-lg w-4" />
                          <p className="text-sm">
                            We pick the best for you to select.
                          </p>
                        </li>
                        <li className="flex items-center  gap-2">
                          <div className="h-2 max-w-72 bg-[#50589F] rounded-lg w-4" />
                          <p className="text-sm">
                            Thousands of vetted candidates in dozens of{" "}
                            <br></br>
                            categories. Risk-free resource swapping for the best
                            fit.
                          </p>
                        </li>
                        <li className="flex items-center  gap-2">
                          <div className="h-2 max-w- bg-[#50589F] rounded-lg w-4" />
                          <p className="text-sm">
                            Risk-free resource swapping for the best fit.
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="relative  h-full w-full">
                      <Image
                        src="/carosuel.png"
                        alt="onboard"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-none gap-2 flex-shrink-0 w-full min-w-0 ">
                  <div className=" shadow-xl rounded-md ml-2 bg-white p-14 font-semibold flex items-center h-[652px]">
                    <div className="flex mt-4 flex-col gap-4">
                      <h1 className="max-w-96 text-black text-[3.375rem] tracking-tight font-bold leading-[1.185em]">
                        Onboard without the risk.
                      </h1>
                      <ul className="flex flex-col gap-4">
                        <li className="flex items-center  gap-2">
                          <div className="h-2 max-w-72 bg-[#50589F] rounded-lg w-4" />
                          <p className="text-sm">
                            We pick the best for you to select.
                          </p>
                        </li>
                        <li className="flex items-center  gap-2">
                          <div className="h-2 max-w-72 bg-[#50589F] rounded-lg w-4" />
                          <p className="text-sm">
                            Thousands of vetted candidates in dozens of{" "}
                            <br></br>
                            categories. Risk-free resource swapping for the best
                            fit.
                          </p>
                        </li>
                        <li className="flex items-center  gap-2">
                          <div className="h-2 max-w- bg-[#50589F] rounded-lg w-4" />
                          <p className="text-sm">
                            Risk-free resource swapping for the best fit.
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="relative  h-full w-full">
                      <Image
                        src="/carousel2.png"
                        alt="onboard"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-none gap-2 flex-shrink-0 w-full min-w-0 ">
                  <div className=" shadow-xl rounded-md ml-2 bg-white p-14 font-semibold flex items-center h-[652px]">
                    <div className="flex mt-4 flex-col gap-4">
                      <h1 className="max-w-96 text-black text-[3.375rem] tracking-tight font-bold leading-[1.185em]">
                        Onboard without the risk.
                      </h1>
                      <ul className="flex flex-col gap-4">
                        <li className="flex items-center  gap-2">
                          <div className="h-2 max-w-96 bg-[#50589F] rounded-lg w-4" />
                          <p className="text-sm">Stay in the loop.</p>
                        </li>
                        <li className="flex items-center  gap-2">
                          <div className="h-2 max-w-72 bg-[#50589F] rounded-lg w-4" />
                          <p className="text-sm">
                            Thousands of vetted candidates in dozens of{" "}
                            <br></br>
                            categories. Risk-free resource swapping for the best
                            fit.
                          </p>
                        </li>
                        <li className="flex items-center  gap-2">
                          <div className="h-2 max-w-72 bg-[#50589F] rounded-lg w-4" />
                          <p className="text-sm">
                            Risk-free resource swapping for the best fit.
                          </p>
                        </li>
                        <li className="flex items-center  gap-2">
                          <div className="cursor-pointer">
                            <Image
                              src="/footimage.png"
                              alt="Person Icon"
                              width={60}
                              height={60}
                              className="mr-4"
                            />
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="relative  h-full w-full">
                      <Image
                        src="/carousel3.png"
                        alt="onboard"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 
              <div className="grid grid-cols-[auto , 1fr] justify-between gap-4">
                <div className="grid grid-col-2 gap-2 items-center">
                  <PrevButton
                    onClick={onPrevButtonClick}
                    disabled={prevBtnDisabled}
                  />
                  <NextButton
                    onClick={onNextButtonClick}
                    disabled={nextBtnDisabled}
                  />
                </div>

                <div className="flex flex-wrap justify-end items-center mr-[calc((2.6rem -1.4rem) / 2* -1)">
                  {scrollSnaps.map((_, index) => (
                    <DotButton
                      key={index}
                      onClick={() => onDotButtonClick(index)}
                      className={cn(
                        " appearance-none bg-transparent touch-manipulation inline-flex items-center justify-center cursor-pointer border-0 p-0 m-0 w-10 h-10 rounded-full",
                        index === selectedIndex
                          ? "shadow-inner-[inset 0 0 0 0.2rem var(--text-body)]"
                          : ""
                      )}
                    />
                  ))}
                </div>
              </div> */}
            {/* </section> */}
          </div>
        </div>
      </div>
    </section>
  );
}
