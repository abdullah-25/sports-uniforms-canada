import AboutUs from '@/components/ui/about-us';
import AIDesignerFeature from '@/components/ui/ai-design-feature';
import Faq from '@/components/ui/faq';
import FreeInGameContent from '@/components/ui/free-ingame';
import ModernHeaderHero from '@/components/ui/header-hero'
import InGameGallery from '@/components/ui/in-game-gallery';
import OurProducts from '@/components/ui/our-products';
import ProductCarousel from '@/components/ui/product-carousel';
import ProductFeatures from '@/components/ui/product-features';
import Testimonials from '@/components/ui/testimonials';
import TrustedByCarousel from '@/components/ui/trusted-by';

export default function Home() {
  return (
    <main>
      <ModernHeaderHero />
      {/* <QuickActions /> */}
      {/* <ProductCarousel /> */}
      <OurProducts />
      <ProductFeatures />
      <AIDesignerFeature />
      <FreeInGameContent />

      <InGameGallery />

      <TrustedByCarousel />
      <Testimonials />
      {/* <Faq /> */}


    </main>
  );
}
