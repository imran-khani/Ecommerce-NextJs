import { client } from "@/app/lib/sanity";

const getData = async () => {
  const query = `
        *[_type == 'product' && slug.current == "winter-coat-for-men"][0]{
            _id,
              images,
              price,
              name,
              "slug":slug.current,
              "category":category->name
          }`;
  const data = await client.fetch(query);
  return data;
};
