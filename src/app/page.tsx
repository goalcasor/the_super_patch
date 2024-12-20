'use client'

import { useOwner } from "@/context/OwnersContext";
import Cookies from 'js-cookie';

import HeroSection from "@/componets/home_sections/HeroSection";
import SectionOne from "@/componets/home_sections/SectionOne";
import VideoSection from "@/componets/home_sections/VideoSection";
import PatchsSection from "@/componets/home_sections/PatchsSection";
import Faqs from "@/componets/home_sections/FAQSection";
import PacksPromo from "@/componets/home_sections/PacksPromo";
import BeneficiosSection from '@/componets/home_sections/BeneficiosSection';
import FormSection from "@/componets/home_sections/FormSection";
import TestimonySection from "@/componets/home_sections/TestimonySection";
import PrincipalLoader from "@/componets/loaders/PrincipalLoader";
import CookieBanner from "@/componets/cookies/CookieBanner";
import PrincipalVideo from "@/componets/home_sections/PrincipalVideo";
import { useState } from "react";

export default function Home({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {

  const { loading, ownersValid, selectedOwnerValid } = useOwner();
  const [isVisible, setIsVisible] = useState(false); 

  if (loading) {
    return <PrincipalLoader/>;
  }
  if (!ownersValid || !selectedOwnerValid) {
    return <PrincipalLoader/>;
  }

  return (
    <main> 
      <HeroSection />
      <VideoSection 
        videoUrl={'https://firebasestorage.googleapis.com/v0/b/mdc-guide.appspot.com/o/sp-media%2Fsp%2Fsuper_patch.mp4?alt=media&token=b510b4d1-c939-4304-a6f7-cc6b311ae6d3'}
        vert={true}
      />
      <SectionOne />
      <PacksPromo />
      <PatchsSection />
      <BeneficiosSection />
      <SectionOne />
      <FormSection />
      <TestimonySection />
      <Faqs />
      <CookieBanner 
        searchParams={searchParams}
        setIsVisible={setIsVisible}
        isVisible={isVisible}
      />
    </main>
  );
}