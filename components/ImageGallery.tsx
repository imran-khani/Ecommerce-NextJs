"use client";
import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import { useState } from "react";

interface ImageGalleryTypes {
  images: any;
}

const ImageGallery = ({ images }: ImageGalleryTypes) => {
  const [bgImage, setBgImage] = useState(images[0]);

  const changeImageOnClickAndHover = (image: any) => {
    setBgImage(image);
  };

  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image: any, index: number) => (
          <div key={index} className="flex-1">
            <Image
              src={urlFor(image).url()}
              alt={"product IMges"}
              width={200}
              height={200}
              onClick={() => changeImageOnClickAndHover(image)}
              className="h-full w-full cursor-pointer object-cover object-center transition-all"
            />
          </div>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
        <Image
          src={urlFor(bgImage).url()}
          alt={"product IMges"}
          width={500}
          height={500}
          className="h-full w-full cursor-pointer object-cover object-center"
        />
      </div>
    </div>
  );
};

export default ImageGallery;
