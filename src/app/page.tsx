import React from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Promotion from "@/components/Promotion";
import Product from "@/components/Product";
import Design from "@/components/Design";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { Sora } from "next/font/google";
import Image from "next/image";
import Card1 from "../../public/card1.png";   

const sora = Sora({ subsets: ["latin"] });

export default function page() {
  return (
    <div>
      <Header />
      <Promotion />
      <Product />
      <Design />
      <Newsletter />
      <Footer />

      <main className={sora.className}>
        
      </main>
    </div>
  );
}
