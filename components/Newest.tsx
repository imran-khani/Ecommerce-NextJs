import { client } from "@/app/lib/sanity";
import { ProductTypes } from "@/lib/interface";

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
  console.log("products: ", products);

  return(
    <div className="bg-white">
        <div className="mx-auto py-16 sm:px-6 sm:py-24 max-w-2xl px-4 lg:max-w-7xl lg:px-8">
            <div className="flex justify-between items-center">
                
            </div>
        </div>
    </div>
  )
};

export default Newest;
