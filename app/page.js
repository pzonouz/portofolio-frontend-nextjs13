import Brands from "./components/Brands";
import { EmblaCarousel } from "./components/EmblaCarousel";
import Features from "./components/Features";
import Achievements from "./components/Achievements";
import ProductBanners from "./components/ProductBanners";
import { ProjectBanners } from "./components/ProjectBanners";
import AtOneGlance from "./components/AtOneGlance";
import Events from "./components/Events";
import Suppliers from "./components/suppliers";
import VisitCards from "./components/VisitCards";
import Footer from "./components/Footer";

export default async function RootPage() {
  const EmblaCarouselRes = await fetch(
    `${process.env.BACKEND_URL}/products/carousel/`
  );
  const carousel = await EmblaCarouselRes.json();

  const bannerRes = await fetch(`${process.env.BACKEND_URL}/products/banners/`);
  const banners = await bannerRes.json();

  const brandsRes = await fetch(`${process.env.BACKEND_URL}/products/brands/`);
  const brands = await brandsRes.json();

  const projectsRes = await fetch(`${process.env.BACKEND_URL}/projects/`);
  const projects = await projectsRes.json();

  const eventsRes = await fetch(`${process.env.BACKEND_URL}/events/`);
  const events = await eventsRes.json();

  const suppliersRes = await fetch(
    `${process.env.BACKEND_URL}/products/brands`
  );
  const suppliers = await suppliersRes.json();

  return (
    <main className=" grid grid-cols-1 md:grid-cols-2">
      <EmblaCarousel carousel={carousel} />
      <ProductBanners banners={banners} />
      <Features />
      <Brands brands={brands} />
      <Achievements />
      <ProjectBanners projects={projects} />
      <AtOneGlance />
      <Events events={events} />
      <Suppliers suppliers={suppliers} />
      <VisitCards />
      <Footer />
    </main>
  );
}
