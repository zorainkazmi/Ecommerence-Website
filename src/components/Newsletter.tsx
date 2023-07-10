import React from "react";
import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"] });

export default function page() {
  return (
   
      <main className={sora.className}>
        <div className="relative px-32 py-40 ">
          <h1 className="absolute right-[325.500px] left-[325.516px] text-center  text-[7.5rem] justify-center items-center leading-[151px] opacity-[0.05]">Newsletter</h1>
          <h1 className="text-center text-[32px] text-[#212121] font-bold leading-10 tracking-[0.096px] mb-4 ">Subscribe Our Newsletter</h1>
          <p className="text-center text-base text-[#212121] font-light leading-[26px] mb-8 ">Get the latest information and promo offers directly</p>
          <form action="click" className="text-center">
            <input type="email" placeholder="Input email address" className="border border-[#808080] bg-[#fcfcfc] font-normal text-[13.3333px] py-[10px] pr-[120px] pl-[20px]"/>
            <button type="submit" className=" font-semibold ml-[10px] border-2 py-[10px] px-[20px] text-white bg-black">Get Started</button>
          </form>
        </div>
      </main>
    
  );
}
