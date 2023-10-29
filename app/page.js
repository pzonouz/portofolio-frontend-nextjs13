import Carousel from "@/app/components/Carousel";
import Hero from "@/app/components/Hero";
import axios from "axios";
import { BACKEND_URL } from "./Constants/Constants";

export default function RootPage() {
  window.axios.defaults.baseURL = BACKEND_URL;
  return (
    <main>
      <Hero />
      <Carousel />
    </main>
  );
}
