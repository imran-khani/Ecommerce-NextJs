import { client } from "../lib/sanity";

const getData = async (category: string) => {
  try {
    const query = `
    *[_type=='product' && category->name =='${category}']{
        _id,
        "imageUrl":images[0].asset->url,
          "slug":slug.current,
          "categoryName":category->name
      }`;
    const res = client.fetch(query);
    if (!res) {
      throw new Error("category fetching failed.");
    }
    return res;
  } catch (error: any) {
    throw new Error(error);
  }
};

const Category = async ({ params }: { params: { category: string } }) => {
  const data = await getData(params.category);
  return (
    <div className="">Hello</div>
  )
};

export default Category;
