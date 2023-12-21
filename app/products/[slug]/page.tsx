import { client } from "@/app/lib/sanity";
import ImageGallery from "@/components/ImageGallery";
import { ProductPageTypes } from "@/lib/interface";

async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0] {
          _id,
            images,
            price,
            name,
            description,
            "slug": slug.current,
            "categoryName": category->name,
            price_id
        }`;

  const data = await client.fetch(query);

  return data;
}

const Product = async ({ params }: { params: { slug: string } }) => {
  const product: ProductPageTypes = await getData(params.slug);
  console.log("product: ", product);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <ImageGallery images={product.images} />
        </div>
      </div>
    </div>
  );
};

export default Product;
