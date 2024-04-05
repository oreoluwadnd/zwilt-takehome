import Image from "next/image";
import Link from "next/link";

// import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "lucide-react";

export default function HeroSection() {
  return (
    <section>
      <div className="mt-36 relative container px-4 md:px-6">
        <h1 className="max-w-2xl mx-auto text-[3.375rem] text-center tracking-tight font-bold leading-[1.185em]">
          <span>Finding the right fit</span>{" "}
          <span className="inline-flex items-center">
            <Image src="/gif.gif" alt="Person Icon" width={68} height={43} />
          </span>
          <span className="inline-block">has</span>
          <span>never been easier.</span>
        </h1>

        <p className="max-w-xl mx-auto mt-5 text-center text-[1.375rem] leading-[32px]">
          With our rigorous pre-vetting process, you&apos;ll never have to worry
          about finding the ideal candidate ever again.
        </p>
        <div className="mt-10 relative h-20 mx-auto max-w-xl pt-4 pb-8 ">
          <Input className="h-14 text-lg" />
          <span className="absolute cursor-pointer flex rounded-xl items-center justify-center h-14 w-14  bg-[#FFBE2E] right-0 top-4">
            <Image
              src="/blackvector.png"
              className="object-contain"
              alt="Person Icon"
              width={40}
              height={40}
            />
          </span>
        </div>

        <div className="mt-10 mx-auto max-w-4xl pt-4 pb-8 rounded-2xl bg-[#F8F8F8]">
          <Tabs
            defaultValue="development"
            className="w-full flex flex-col justify-center items-center"
          >
            <TabsList className="">
              <TabsTrigger value="development">IT & Development</TabsTrigger>
              <TabsTrigger value="design">Design and Creative</TabsTrigger>
            </TabsList>

            <TabsContent value="development" className="mt-6 w-full">
              <div className="grid grid-cols-3 w-full">
                <div className="col-span-1 justify-self-center space-y-4">
                  <Link className="block" href="/">
                    Python Developer
                  </Link>
                  <Link className="block" href="/">
                    Shopify Developer
                  </Link>
                  <Link className="block" href="/">
                    MERN Stack Developer
                  </Link>
                  <Link className="block" href="/">
                    Full Stack Developer
                  </Link>
                </div>

                <div className="col-span-1 justify-self-center space-y-4">
                  <Link className="block" href="/">
                    Data Scientist
                  </Link>
                  <Link className="block" href="/">
                    Front End Developer
                  </Link>
                  <Link className="block" href="/">
                    Shopify Developer
                  </Link>
                  <Link className="block" href="/">
                    Python Developer
                  </Link>
                </div>

                <div className="col-span-1 justify-self-center space-y-4">
                  <Link className="block" href="/">
                    Shopify Developer
                  </Link>
                  <Link className="block" href="/">
                    Python Developer
                  </Link>
                  <Link className="block" href="/">
                    Full Stack Developer
                  </Link>
                  <Link className="block" href="/">
                    Explore More
                  </Link>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="design" className="mt-6 w-full">
              <div className="grid grid-cols-3 w-full">
                <div className="col-span-1 justify-self-center space-y-4">
                  <Link className="block" href="/">
                    Python Developer
                  </Link>
                  <Link className="block" href="/">
                    Shopify Developer
                  </Link>
                  <Link className="block" href="/">
                    MERN Stack Developer
                  </Link>
                  <Link className="block" href="/">
                    Full Stack Developer
                  </Link>
                </div>

                <div className="col-span-1 justify-self-center space-y-4">
                  <Link className="block" href="/">
                    Data Scientist
                  </Link>
                  <Link className="block" href="/">
                    Front End Developer
                  </Link>
                  <Link className="block" href="/">
                    Shopify Developer
                  </Link>
                  <Link className="block" href="/">
                    Python Developer
                  </Link>
                </div>

                <div className="col-span-1 justify-self-center space-y-4">
                  <Link className="block" href="/">
                    Shopify Developer
                  </Link>
                  <Link className="block" href="/">
                    Python Developer
                  </Link>
                  <Link className="block" href="/">
                    Full Stack Developer
                  </Link>
                  <Link className="block" href="/">
                    Explore More
                  </Link>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <div className="h-32 mt-20 -skew-y-[2deg] relative w-full ">
          <Image
            src="/union.png"
            alt="hero-image"
            fill
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
