import Hero from '@/app/components/sections/Hero';
import Marquee from '@/app/components/sections/Marquee';
import AboutIntro from '@/app/components/sections/AboutIntro';
import Offers from '@/app/components/sections/Offers';
import Stats from '@/app/components/sections/Stats';
import CommunityChoice from '@/app/components/sections/CommunityChoice';
import GallerySection from '@/app/components/sections/GallerySection';
import TestimonialsSection from '@/app/components/sections/TestimonialsSection';
import FollowCommunity from '@/app/components/FollowCommunity';
import MapSection from '@/app/components/sections/MapSection';
import FinalCTA from '@/app/components/sections/FinalCTA';

export default function Home() {
  return (
    <div className="bg-black">
      <Hero />
      <Marquee />
      <AboutIntro />
      <Offers />
      <Stats />
      <CommunityChoice />
      <GallerySection />
      <TestimonialsSection />
      <FollowCommunity />
      <MapSection />
      <FinalCTA />
    </div>
  );
}