import React from "react";
import { Sora } from "next/font/google";
import Image from "next/image";
import Event1 from "../../public/event1.png";
import Event2 from "../../public/event2.png";
import Event3 from "../../public/event3.png";

const sora = Sora({ subsets: ["latin"] });

export default function page() {
  return (
    <div>
      <main className={sora.className}>
        <div className="px-[128px] py-[64px]">
          <div className="flex flex-col text-xl gap-4 mb-8 text-center ">
            <p className="font-bold text-xs leading-4 text-[#0062f5]">
              PROMOTIONS
            </p>
            <h1 className=" text-[32px] text-[#212121] font-bold ">
              Our Promotions Events
            </h1>
          </div>

          {/* pictures  */}
          <div className="flex justify-between gap-y-[32px] gap-x[32px] ">
            {/* left banner  */}
            <div className="flex flex-col gap-x-4 gap-y-4">
              {/* picture 1 */}
              <div className="flex items-center bg-[#d6d6d8] w-[485px] h-[200px] px-[32px] tracking-wider">
                <div className="">
                  <h3 className=" text-[28px] font-bold  text-[#212121] tracking-[0.8px] leading-9">
                    GET UP TO{" "}
                    <span className=" text-[36px] font-extrabold leading-[45px]">
                      60%
                    </span>
                  </h3>
                  <p className=" text-lg font-normal">For the summer season</p>
                </div>
                <Image
                  src={Event1}
                  alt="event1"
                  className="w-[258.703px] h-[200px]"
                />
              </div>
              {/* picture 2 */}
              <div className=" flex text-center text-white flex-col pt-[48px] px-[32px] pb-[32px] bg-[#212121]">
                <h3 className=" text-4xl font-extrabold leading-[45px] tracking-wide mb-4">
                  GET 30% Off
                </h3>
                <p className=" text-sm font-normal leading-5 tracking-wide">
                  USE PROMO CODE
                </p>
                <button className="flex justify-center tracking-[4.25px] bg-[#474747] text-lg font-bold mt-[5px] rounded-lg px-10 py-2">
                  DINEWEEKENDSALE
                </button>
              </div>
            </div>
            {/* right banner  */}
            <div className="flex  gap-4 justify-between items-center ">
              <div className="pt-[24px] bg-[#efe1c7]">
                <div className="ml-[40px]">
                  <p className="text-[15px] font-normal tracking-[0.45px] leading-6">
                    Flex Sweatshirt
                  </p>
                  <div className="flex">
                    <p className="leading-6">$100.00</p>
                    <p className="text-lg leading-6 font-semibold ml-[10px]">
                      $75.00
                    </p>
                  </div>
                </div>
                <Image
                  src={Event2}
                  alt="event2"
                  className="pt-[16px]  w-[280px] h-[340px]"
                />
              </div>
              <div className="right2 pt-[24px] bg-[#d7d7d9]">
                <div className="ml-[40px]">
                  <p className="text-[15px] font-normal tracking-[0.45px] leading-6">
                    Flex Push Button Bomber
                  </p>
                  <div className="flex">
                    <p className="leading-6">$225.00</p>
                    <p className="text-lg leading-6 font-semibold ml-[10px]">
                      $190.00
                    </p>
                  </div>
                </div>

                <Image
                  className="pt-[16px] w-[282px] h-[340px]"
                  src={Event3}
                  alt="event3"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
