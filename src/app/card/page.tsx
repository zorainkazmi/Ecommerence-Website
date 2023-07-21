import React from "react";
import Image from "next/image";
import { Sora } from "next/font/google";
import Footer from "@/components/Footer";
import Card from "../../../public/card.png";

const sora = Sora({ subsets: ["latin"] });

export default function page() {
  return (
    <main className={sora.className}>
      <div className=" px-32 py-16 bg-[#fcfcfc]">
        <div className="flex gap-x-8 gap-y-8 flex-grow-2 flex-shrink-1">
          <div>
            <Image src={Card} alt="cardpic" className="w-[100px] h-[100px]" />
          </div>
          <div>
            <Image
              src={Card}
              alt="cardpic"
              className="w-[582.938px] h-[625.672px]"
            />
          </div>
          <div className="flex mt-16 gap-10 flex-col">
            <div>
              <h3 className="text-[#212121] text-[26px] font-normal leading-[33px] tracking-wider">
                Flex Push Button Bomber
              </h3>
              <span className="text-[20.8px] font-semibold opacity-[0.3]">
                Jackets
              </span>
            </div>

            <div>
              <p className=" text-[#212121] font-bold text-[14.4px] tracking-[0.72px] leading-4">
                SELECT SIZE
              </p>
              <ul className="flex mt-4 gap-4 ">
                <li className="w-[40px] h-[40px] text-[#666] rounded-[50%] text-base font-bold leading-4 tracking-wider ">
                  XS
                </li>
                <li className="w-[40px] h-[40px] text-[#666] rounded-[50%] text-base font-bold leading-4 tracking-wider ">
                  S
                </li>
                <li className="w-[40px] h-[40px] text-[#666] rounded-[50%] text-base font-bold leading-4 tracking-wider ">
                  M
                </li>
                <li className="w-[40px] h-[40px] text-[#666] rounded-[50%] text-base font-bold leading-4 tracking-wider ">
                  L
                </li>
                <li className="w-[40px] h-[40px] text-[#666] rounded-[50%] text-base font-bold leading-4 tracking-wider ">
                  XL
                </li>
              </ul>
            </div>

            <div className="flex gap-8">
              <h4 className="font-bold">Quantity: </h4>
              <div className="flex">
                <span className="bg-[#f1f1f1] w-auto h-auto border-[#f1f1f1] border-[2px] border-solid rounded-[50%] px-2 py-[5px] mr-[10px]">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path>
                  </svg>
                </span>

                <span>1</span>

                <span className="bg-[#f1f1f1] border-[#000] border-[2px] border-solid rounded-[50%] px-2 py-[5px] ml-[10px]">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    // t="1551322312294"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs></defs>
                    <path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"></path>
                    <path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"></path>
                  </svg>
                </span>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <button className="flex border-[2px] py-[10px] bg-[#212121] text-[#fff] text-sm justify-center border-black font-semibold w-[40%] h-[44px] leading-[18px] gap-2">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="20"
                  width="20"
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
                </svg>
                Add to Cart
              </button>
              <p className=" text-2xl leading-[30px] tracking-widest text-[#212121] font-bold ">
                $225.00
              </p>
            </div>
          </div>
        </div>

        {/* overview */}
        <div>
          <div className="flex flex-col gap-8 mt-16 px-16 pt-8 pb-24 bg-[#fff]">
            <div className="flex relative border-b-[2px] border-solid items-center border-[#c4c4c4]">
              <div className="flex text-[120px] text-[#f2f3f7] font-extrabold leading-[151px] opacity-[0.7]">
                Overview
              </div>
              <h2 className="absolute bottom-3 text-[1.4rem] text-[#212121] font-bold leading-[25px] tracking-wider pb-12">
                Product Information
              </h2>
            </div>
            <div className="flex">
              <h3 className="text-[#666] text-base w-[321.672px]  leading-[19px] tracking-wider font-bold">
                PRODUCT DETAILS
              </h3>
              <p className="text-[#212121] text-base w-[643.328px] leading-[26px] tracking-wider font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="flex">
              <h3 className="text-[#666] text-base w-[321.672px] leading-[19px] tracking-wider font-bold">
                PRODUCT CARE
              </h3>
              <ul>
                <li className=" text-base list-inside font-semibold leading-[26px] tracking-wider list-disc">
                  Hand wash using cold water.
                </li>
                <li className=" text-base list-inside font-semibold leading-[26px] tracking-wider list-disc">
                  Do not using bleach.
                </li>
                <li className=" text-base list-inside font-semibold leading-[26px] tracking-wider list-disc">
                  Hang it to dry.
                </li>
                <li className=" text-base list-inside font-semibold leading-[26px] tracking-wider list-disc">
                  Iron on low temperature.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
