import HeroSection from "@/componets/home_sections/HeroSection";
import SectionOne from "@/componets/home_sections/SectionOne";
import VideoSection from "@/componets/home_sections/VideoSection";
import PatchsSection from "@/componets/home_sections/PatchsSection";
import Faqs from "@/componets/home_sections/FAQSection";
import PacksPromo from "@/componets/home_sections/PacksPromo";
export default function Home() {
  return (
    <main >
        <HeroSection />
        <SectionOne />
        <PacksPromo />
        <VideoSection />
        <PatchsSection />
        <Faqs />  
    </main>
  );
}
