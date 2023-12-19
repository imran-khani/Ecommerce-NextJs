"use client";

import { NAVIGATION } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className="mb-8 border-2">
      <div className="flex justify-between max-w-2xl mx-auto px-4 lg:max-w-7xl sm:px-6 items-center py-3">
        <Link href="/">
          <h1 className="text-4xl font-bold">
            <span className="text-primary">E-</span>COMMERCE
          </h1>
        </Link>

        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
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
                  isActive ? "text-white bg-primary" : "text-gray-700"
                }  hover:text-gray-900`}
              >
                {nav.name}
              </Link>
            );
          })}
        </nav>
        <div className="flex divide-x border-r sm:border-l">
          <Button className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 md:h-24 md:w-24 rounded-none">
            Cart
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
