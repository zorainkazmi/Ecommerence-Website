import React from "react";
import Image from "next/image";
import { Sora } from "next/font/google";
import Header from "../../public/header.png";
import Featured1 from "../../public/Featured1.png";
import Featured2 from "../../public/Featured2.png";
import Featured3 from "../../public/Featured3.png";
import Featured4 from "../../public/Featured4.png";

const sora = Sora({ subsets: ["latin"] });

export default function Page() {
  return (
    <div>
      <main className={sora.className}>
        <div className="mx-32 flex flex-wrap flex-row gap-x-16 mr-0 my-16">
          <div className="flex flex-wrap flex-col gap-y-10  w-[448px] gap-x-10 ">
            <span className="flex justify-center items-center rounded-md bg-[#e1edff] text-[#0000ff] h-[40px] w-[120px] font-semibold">
              Sale 70%
            </span>
            <h1 className="text-5xl font-bold text-[#212121] tracking-widest">
              An Industrial Take on Streetwear
            </h1>
            <p className="text-[#666] w-[70%] h-[72px] font-normal leading-6 text-base">
              Anyone can beat you but no one can beat your outfit as long as you
              wear Dine outfits.
            </p>
            <button
              className="flex p-4 w-[35%] h-[72px] bg-[#212121] gap-2 text-white items-center font-semibold justify-center text-base"
              type="button"
            >
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="26"
                width="26"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.79166 2H1V4H4.2184L6.9872 16.6776H7V17H20V16.7519L22.1932 7.09095L22.5308 6H6.6552L6.08485 3.38852L5.79166 2ZM19.9869 8H7.092L8.62081 15H18.3978L19.9869 8Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z"
                  fill="currentColor"
                ></path>
              </svg>{" "}
              Start Shopping
            </button>
            <div className="flex gap-x-4">
              <Image
                src={Featured1}
                alt="BAZAAR"
                className="flex flex-col h-[35px] w-[100px]"
                height={35}
                width={100}
              />

              <Image
                src={Featured2}
                alt="BAZAAR"
                className="flex h-[35px] w-[100px]"
              />

              <Image
                src={Featured3}
                alt="BAZAAR"
                className="flex h-[35px] w-[100px]"
              />

              <Image
                src={Featured4}
                alt="BAZAAR"
                className="flex h-[35px] w-[100px]"
              />
            </div>
          </div>

          <div className="flex flex-wrap relative ">
            <div className="flex absolute w-[570px] h-[570px] bg-[#ffece3] rounded-full top-7 left-3"></div>
            <Image
              src={Header}
              className="relative w-[650] h-[650]"
              alt="Image"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
