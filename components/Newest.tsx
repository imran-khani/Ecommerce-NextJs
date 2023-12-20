import { client } from "@/app/lib/sanity";

const getData = async () => {
  const query = `*[_type=='product'][0...4]{
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
  const products = await getData();
  console.log("products: ", products);

  return <div>Newest</div>;
};

export default Newest;
