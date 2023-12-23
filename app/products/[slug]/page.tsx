import { client } from "@/app/lib/sanity";
import AddToCart from "@/components/AddToCart";
import BuyNOw from "@/components/BuyNow";
import ImageGallery from "@/components/ImageGallery";
import { ProductPageTypes } from "@/lib/interface";
import Link from "next/link";

async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0] {
          _id,
            images,
            price,
            name,
            description,
            "slug": slug.current,
            "category": category->name,
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
            <p className="mb-2 text-gray-500">{product.description}</p>
            <Link href={`/${product.category}`}>
              <p className="font-bold text-gray-500">
                Category: {product.category}
              </p>
            </Link>
            <p className="font-bold text-gray-500">Price: ${product.price}</p>
            <div className="flex gap-5 ">
              <BuyNOw
                currency="$"
                description={product.description}
                image={product.images[0]}
                name={product.name}
                price={product.price}
                price_id={product.price_id}
                key={product._id}
              />
              <AddToCart
                name={product.name}
                price={product.price}
                description={product.description}
                image={product.images[0]}
                currency="$"
                key={product._id}
                price_id={product.price_id}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
