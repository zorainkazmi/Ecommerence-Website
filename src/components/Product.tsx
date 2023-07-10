import React from "react";
import Image from "next/image";
import { Sora } from "next/font/google";
import Card1 from "../../public/card1.png";
import Card2 from "../../public/card2.png";
import Card3 from "../../public/card3.png";

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
          {/* div for cards */}
          <div className="flex ">
            <div className="">
              <Image src={Card1} alt="card1" className=" w-[380px] h-[400px]" />
              <p className="text-[17.6px] mt-2 font-semibold tracking-[0.528px] leading-[24px] text-[#212121]">
                Brushed Raglan Sweatshirt
              </p>
              <p className="text-[#212121] mt-2 font-semibold  text-[19.2px] leading-[24px]">
                $195
              </p>
            </div>
            <div className="">
              <Image src={Card2} className=" w-[380px] h-[400px]" alt="card2" />

              <p className="text-[17.6px] mt-2 font-semibold tracking-[0.528px] leading-[24px] text-[#212121]">
                Cameryn Sash Tie Dress
              </p>
              <p className="text-[#212121] mt-2 font-semibold  text-[19.2px] leading-[24px]">
                $545
              </p>
            </div>
            <div className="">
              <Image src={Card3} className=" w-[380px] h-[400px]" alt="card3" />

              <p className="text-[17.6px] mt-2 font-semibold tracking-[0.528px] leading-[24px] text-[#212121]">
                Flex Sweatshirt
              </p>
              <p className="text-[#212121] mt-2 font-semibold  text-[19.2px] leading-[24px]">
                $175
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
