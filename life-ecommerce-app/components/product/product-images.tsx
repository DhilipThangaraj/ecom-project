"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const ProductImages = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="space-y-4">
      <Image
        src={
          images[current]?.full ||
          "https://life-cdn.lifepharmacy.com/images/products/final-1024x1024-1024x1024.jpg"
        }
        alt="product image"
        width={1000}
        height={1000}
        className="min-h-[300px] object-cover object-center"
      />
      <div className="flex">
        {images.map((image, index) => {
          return (
            <div
              key={image}
              onClick={() => setCurrent(index)}
              className={cn(
                "border mr-2 cursor-pointer hover:border-orange-600",
                current === index && "border-orange-500"
              )}
            >
              <Image
                src={
                  image?.thumbnail ||
                  "https://life-cdn.lifepharmacy.com/images/products/final-1024x1024-1024x1024.jpg"
                }
                alt={"image"}
                height={100}
                width={100}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductImages;
