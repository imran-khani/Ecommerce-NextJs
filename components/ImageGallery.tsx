import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";

interface ImageGalleryTypes {
  images: any;
}

const ImageGallery = ({ images }: ImageGalleryTypes) => {
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
              className="h-full w-full cursor-pointer object-cover object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
