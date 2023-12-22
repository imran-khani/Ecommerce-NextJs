"use client";
import { useShoppingCart } from "use-shopping-cart";
import { Button } from "./ui/button";

export interface CartProducts {
  name: string;
  description: string;
  image: any;
  currency: string;
  price: number;
}

const AddToCart = ({
  name,
  description,
  currency,
  image,
  price,
}: CartProducts) => {
  const { addItem } = useShoppingCart();
  const product = {
    name: name,
    description: description,
    currency: currency,
    image: image,
    price: price,
  };
  return <Button>Add to Cart</Button>;
};

export default AddToCart;
