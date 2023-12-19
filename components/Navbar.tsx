import Link from "next/link";

const Navbar = () => {
  return (
    <header className="mb-8 border-2">
      <div className="flex justify-between max-w-2xl mx-auto px-4 lg:max-w-7xl sm:px-6 items-center">
        <Link href="/" >
            <h1 className="text-4xl font-bold">E-COMMERCE</h1>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
