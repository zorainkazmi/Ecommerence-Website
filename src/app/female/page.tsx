"use client";
import Image from "next/image";
import React from "react";
import { client } from "@/lib/sanityClient";
import { Image as IImage, SanityClient } from "sanity";
import { urlForImage } from "../../../sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// const builder = imageUrlBuilder(client);
// function urlFor(source: SanityImageSource) {
//   return builder.image(source)
// }

const getProductData = async () => {
  const res = await client.fetch(`*[_type=="product" && category->name == 'Female']{
    price,
      name,
      image,
      description,
      category ->{
        name
        
      }
  }`);
  return res;
};
interface IProduct {
  title: string;
  description: string;
  image: IImage;
  price: number;
  category: {};
}
export default async function page() {
  const data: IProduct[] = await getProductData();
  console.log("sanity data is===========================", data);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 px-32 py-16 gap-y-16">
        {data.map((item: any, index) => (
          <div key={index}>
            {item.image && (
              <Image
                src={urlForImage(item.image).url()}
                alt={""}
                height={300}
                width={200}
                className="max-h-[200px] object-cover object-top"
              />
            )}
            <h2 className='text-[1.05rem] mt-2 font-semibold leading-6 tracking-[0.03em] text-[#212121]'>{item.name}</h2>
            <p className="font-semibold text-[15px] leading-[15px] text-[#888] mt-2">
              {item.description}
            </p>
            <h3 className="text-xl mt-4 font-semibold leading-6 tracking-[0.03em] text-[#212121]">${item.price}</h3>
        
          </div>
        ))}
      </div>
    </div>
  );
}

function imageUrlBuilder(client: SanityClient) {
  throw new Error("Function not implemented.");
}
