import Carousel from "@/app/components/Carousel";
import Hero from "@/app/components/Hero";
import Brands from "./components/Brands";

export default function RootPage() {
  return (
    <main>
      <Hero />
      <Carousel />
      <Brands />
    </main>
  );
}
