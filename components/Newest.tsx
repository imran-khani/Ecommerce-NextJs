import { client } from "@/app/lib/sanity";
import { ProductTypes } from "@/lib/interface";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const getData = async () => {
  const query = `*[_type=='product'][0...4] | order(_createdAt asc) {
            _id,
              name,
              price,
              "slug":slug.current,
              "category":category->name,
              "imageUrl":images[0].asset->url
          }`;
  const data = await client.fetch(query);
  return data;
};

const Newest = async () => {
  const products: ProductTypes[] = await getData();
  //   console.log("products: ", products);

  return (
    <div className="bg-white">
      <div className="mx-auto py-16 sm:px-6 sm:py-24 max-w-2xl px-4 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Newest Products
          </h2>
          <Link
            className="text-primary flex items-center gap-x-1"
            href="/products"
          >
            See All <ArrowRight size={20} />
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-4 gap-x-6 gap-y-10 sm:grid-cols-2 xl:gap-x-8"></div>
      </div>
    </div>
  );
};

export default Newest;
