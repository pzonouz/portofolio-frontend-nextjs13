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

export default function RootPage() {
  return (
    <main>
      <EmblaCarousel />
      <ProductBanners />
      <Features />
      <Brands />
      <Achievements />
      <ProjectBanners />
      <AtOneGlance />
      <Events />
      <Suppliers />
      <VisitCards />
      <Footer />
    </main>
  );
}
