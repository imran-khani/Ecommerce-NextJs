"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useShoppingCart } from "use-shopping-cart";

const ShoppingCartModal = () => {
  const { cartCount, handleCartClick, shouldDisplayCart } = useShoppingCart();
  return (
    <Sheet open={shouldDisplayCart} onOpenChange={handleCartClick}>
      <SheetContent className="w-[98vw] sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        <div className="flex h-full flex-col justify-between">
          <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="my-6 divide-y divide-gray-200">
              {cartCount === 0 ? (
                <div>
                  No Items <br /> add some items in the cart
                </div>
              ) : (
                <h1>items</h1>
              )}
            </ul>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCartModal;
