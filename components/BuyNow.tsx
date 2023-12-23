"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "@/app/lib/sanity";
import { ProductCart } from "./AddToCart";

export default function BuyNOw({
  currency,
  description,
  image,
  name,
  price,
  price_id,
}: ProductCart) {
  const { checkoutSingleItem } = useShoppingCart();

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id,
  };

  const buyNow = (price_id:string)=>{
    checkoutSingleItem(price_id)
  }
  return (
    <Button
      onClick={() => {
        buyNow(product.price_id)
      }}
    >
     Buy Now
    </Button>
  );
}
