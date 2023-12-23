import { client } from "@/app/lib/sanity";
import { ProductTypes } from "@/lib/interface";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const getData = async () => {
  const query = `*[_type=='product'][0...4] | order(_createdAt asc) {
            _id,
              name,
              price,
              "slug":slug.current,
              "category":category->name,
              "imageUrl":images[0].asset->url
          }`;
  const data = await client.fetch(query, { next: { fetch: 4 } });
  return data;
};

const Newest = async () => {
  const products: ProductTypes[] = await getData();
  //   console.log("products: ", products);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Newest Products
          </h2>
          <Link
            className="flex items-center gap-x-1 text-primary"
            href="/products"
          >
            See All <ArrowRight size={20} />
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product._id} className="group relative">
              <div className=" h-72  w-full rounded-md bg-gray-200 transition-all duration-100 group-hover:opacity-75 lg:h-72 xl:h-80">
                <Image
                  src={product.imageUrl}
                  alt={"product.name"}
                  className="h-full w-full object-cover  object-center"
                  width={500}
                  height={500}
                />
              </div>
              <div className="mt-4 flex flex-wrap items-center justify-between px-1">
                <h3 className=" text-sm text-gray-700">
                  <Link href={`/products/${product.slug}`}>
                    <span
                      aria-hidden="true"
                      className="absolute inset-0"
                    ></span>
                    {product.name}
                  </Link>
                </h3>
                <p className="mt-1 text-sm font-bold text-gray-900">
                  ${product.price}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="mt-1 text-sm font-bold text-gray-900">
                  {product.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Newest;
