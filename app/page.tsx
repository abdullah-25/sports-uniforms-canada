import AboutUs from '@/components/ui/about-us';
import ModernHeaderHero from '@/components/ui/header-hero'
import InGameGallery from '@/components/ui/in-game-gallery';
import OurProducts from '@/components/ui/our-products';
import Testimonials from '@/components/ui/testimonials';
import TrustedByCarousel from '@/components/ui/trusted-by';

export default function Home() {
  return (
    <main>
      <ModernHeaderHero />
      {/* <QuickActions /> */}
      <InGameGallery />
      <OurProducts />
      <TrustedByCarousel />
      <Testimonials />
      <AboutUs />
    </main>
  );
}
