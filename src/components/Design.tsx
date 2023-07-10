import React from "react";
import Feature from "../../public/feature.png";
import { Sora } from "next/font/google";
import Image from "next/image";

const sora = Sora({ subsets: ["latin"] });

export default function page() {
  return (
    <div>
      <main className={sora.className}>
        <div className="bg-[#fbfcff]">
          <div className=" mt-16">
            <div className="title flex justify-end pb-8 px-32">
              <h1 className=" text-[44px] w-[45%] text-[#212121] font-bold tracking-[0.03em] leading-[55px]">
                Unique and Authentic Vintage Designer Jewellery
              </h1>
            </div>
          </div>

          <div className="flex flex-row mx-32 mb-16 w-[1200px] h-[414px]">
            {/* left dev */}
            <div className="w-[546.5px] h-[350px] py-7">
              {/* bg text */}
              <div className=" absolute text-[#212121] text-[110px] leading-[110px] font-extrabold opacity-[0.07] w-[382.547px] h-[330px]">
                Different from others
              </div>

              {/*  col div /first div */}
              <div className="flex gap-20">
                {/* first column */}
                {/* row div */}
                <div className="flex flex-col gap-14">
                  {/* row1 */}
                  <div className="">
                    <h1 className=" text-[#212121] w-[191.266px] text-lg tracking-[0.03em] leading-5 mb-4 font-semibold">
                      Using Good Quality Materials
                    </h1>
                    <p className="text-[#212121] w-[191.266px] font-light text-base leading-[22px] tracking-[0.8px]">
                      Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                    </p>
                  </div>
                  {/* row2 */}
                  <div className="">
                    <h1 className=" text-[#212121] w-[191.266px] text-lg tracking-[0.03em] leading-5 mb-4 font-semibold">
                      Modern Fashion Design
                    </h1>
                    <p className="text-[#212121] w-[191.266px] font-light text-base leading-[22px] tracking-[0.8px]">
                      Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                {/* right div / second column  */}
                <div className="flex flex-col gap-14">
                  {/* row1 */}
                  <div className="">
                    <h1 className=" text-[#212121] w-[191.266px] text-lg tracking-[0.03em] leading-5 mb-4 font-semibold">
                      100% Handmade Products
                    </h1>
                    <p className="text-[#212121] w-[191.266px] font-light text-base leading-[22px] tracking-[0.8px]">
                      Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                    </p>
                  </div>
                  {/* row2 */}
                  <div className="">
                    <h1 className=" text-[#212121] w-[191.266px] text-lg tracking-[0.03em] leading-5 mb-4 font-semibold">
                      Discount for Bulk Orders
                    </h1>
                    <p className="text-[#212121] w-[191.266px] font-light text-base leading-[22px] tracking-[0.8px]">
                      Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* right div  */}
            <div className="flex h-[350px] w-[546.5px] gap-[40px]">
              <div>
                <Image
                  src={Feature}
                  alt="image"
                  className="w-[300px] h-[350px]"
                />
              </div>
              <div className="flex flex-col gap-y-8">
                <p className=" text-base text-[#212121] font-light pt-3 leading-[26px] text-justify w-[222.125px] h-[234px]">
                  This piece is ethically crafted in our small family-owned
                  workshop in Peru with unmatched attention to detail and care.
                  The Natural color is the actual natural color of the fiber,
                  undyed and 100% traceable.
                </p>
                <a href="/">
                  <button className=" py-[10px] px-[10px] h-[60px] w-[50%] bg-[#212121] text-white text-sm font-semibold leading-[18px] tracking-normal">
                    See All Product
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
