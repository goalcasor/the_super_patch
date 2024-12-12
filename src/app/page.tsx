'use client'

import { useOwner } from "@/context/OwnersContext";

import HeroSection from "@/componets/home_sections/HeroSection";
import SectionOne from "@/componets/home_sections/SectionOne";
import VideoSection from "@/componets/home_sections/VideoSection";
import PatchsSection from "@/componets/home_sections/PatchsSection";
import Faqs from "@/componets/home_sections/FAQSection";
import PacksPromo from "@/componets/home_sections/PacksPromo";
import BeneficiosSection from '@/componets/home_sections/BeneficiosSection';
import FormSection from "@/componets/home_sections/FormSection";
import TestimonySection from "@/componets/home_sections/TestimonySection";

export default function Home() {

  const { owners, selectedOwner } = useOwner();
  if (owners === null || selectedOwner === null){
    return (<><p>Un momento...</p></>)
  }
  console.log(owners, selectedOwner)
  return (
    <main >
        <HeroSection />
        <SectionOne />
        <PacksPromo />
        <PatchsSection />
        <BeneficiosSection />
        <SectionOne />
        <FormSection />
        <TestimonySection />
        <Faqs />  
    </main>
  );
}
