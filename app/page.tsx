import Image from "next/image";


import Hero from "@/components/Hero"
import About from "@/components/About"
import Products from "@/components/Products"

export default function Home() {
  return (
    <main className="flex-1">
      
     
      <Hero />
      <About />
      <Products />

    </main>
  );
}
