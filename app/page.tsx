import { Loader2Icon } from "lucide-react";
export default function Home() {
  return (
    <main className=" py-24 flex justify-center items-center text-5xl">
      <p>
        Work in progress...{" "}
        <Loader2Icon className="inline" color="blue" size={40} />
      </p>
    </main>
  );
}
