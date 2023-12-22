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

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <ImageGallery images={product.images} />
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <p className="text-gray-500">{product.description}</p>
            <p className="text-gray-500">Price: {product.price}</p>
            <button
              className="bg-gray-900 text-white px-4 py-2 rounded-lg"
              id="checkout-button"
              role="link"
            >
              Checkout
            </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
