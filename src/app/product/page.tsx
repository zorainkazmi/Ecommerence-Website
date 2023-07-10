import Image from "next/image";
import React from 'react'
import { client} from "@/lib/sanityClient"
import { Image as IImage } from 'sanity'
import { urlForImage } from "../../../sanity/lib/image";

 const getProductData = async () => {
    const res = await client.fetch(`*[_type=="product"]{
      price,
        _id,
        title,
        image,
        category ->{
          name,
          _id
        }
    }`)
    return res
}
interface IProduct{
  title: string,
  description: string,
  image: IImage,
  price: number,
  category:{
    
  }
}
export default async function page() {
    const data: IProduct[] = await getProductData()
    // console.log(data) 
return (
  <div className="grid grid-cols-[repeat(3,auto)] justify-center gap-x-10">
    {data.map((item : any ,index) => (
      <div key={index}>
         {item.image && (
  <Image src={urlForImage(item.image).url()} alt={''} height={300} width={200} 
  className="max-h-[200px] object-cover object-top"/>)}
 <h2>{item.title}</h2>
 <h3>${item.price}</h3>
 <button className="border py-2 px-6 rounded bg-blue-600 text-white">Add to Cart </button>
        </div>
    ))}
  </div>
)
}