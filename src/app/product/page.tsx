import React from "react";
import {client} from "@/lib/sanityClient"
import { Image as IImage } from "sanity";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";

export const getProductData = async () => {
    const res = await client.fetch(`*[_type=="product"]{
        price,
        _id,
        tirtle,
        image,
        category -> {
            name
        }
        
    }`);
    return res
}

interface IProduct {
    title: string,
    decription: string,
    image: IImage
    category: {
        name: string
    }
    
}
   

export default async function home() {

    const data: IProduct[] = await getProductData()
    

     
  return (
    <div>
        {data.map((item) => (
            <div>
                <Image src={urlForImage } alt="product" />
            </div>
        ))}
    </div>
  );
}
