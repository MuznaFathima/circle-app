
import HeroSection from "./HeroSection";
import BestSelling from "./BestSelling";
import TrendingProducts from "./TrendingProducts";
import Testimonials from "./Testimonials";
import Badge from "./Badge";

const LandingPage = () => {
  return (
    <>
      <HeroSection />

      <BestSelling />
      <Badge />
      <TrendingProducts />
      <Testimonials />
    </>
  );
};

export default LandingPage;
