"use client";

import { NAVIGATION } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";

const Navbar = () => {
  const pathname = usePathname();
  const { handleCartClick } = useShoppingCart();
  return (
    <header className="mb-8 border-2">
      <div className="mx-auto flex max-w-2xl items-center justify-between px-4 py-3 sm:px-6 lg:max-w-7xl">
        <Link href="/">
          <h1 className="text-2xl font-bold md:text-4xl">
            <span className="text-primary">E-</span>COMMERCE
          </h1>
        </Link>

        <nav className="hidden items-center gap-12 lg:flex 2xl:ml-16">
          {NAVIGATION.map((nav, i) => {
            // const isActive =  styles based on pathname
            const isActive =
              pathname.includes(nav.path) &&
              (pathname === "/" || pathname === nav.path);

            return (
              <Link
                href={nav.path}
                key={i}
                className={`text-lg font-semibold ${
                  isActive
                    ? "rounded-sm bg-primary px-3 py-1 text-white transition-all hover:text-white"
                    : "text-gray-700"
                }  hover:text-gray-900`}
              >
                {nav.name}
              </Link>
            );
          })}
        </nav>
        <div className="flex divide-x border-r sm:border-l">
          <Button
            onClick={() => handleCartClick}
            variant={"outline"}
            className="flex h-12 w-12 flex-col gap-y-1.5 rounded-none sm:h-20 md:h-24 md:w-24"
          >
            <ShoppingBag />
            <span className="hidden text-xs font-semibold text-gray-500 sm:block">
              Cart
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
