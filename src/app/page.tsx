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
        videoUrl={'/videos/presentacion_corta_v_paisa.mp4'}
        vert={true}
      />
      <SectionOne />
      <PacksPromo />
      <PatchsSection />
      <BeneficiosSection />
      <SectionOne />
      <FormSection />
      <TestimonySection />

      <VideoSection 
        videoUrl={'https://firebasestorage.googleapis.com/v0/b/mdc-guide.appspot.com/o/sp-media%2FCONOCE%20SUPER%20PATCH%20COMPANY%20.mp4?alt=media&token=ccd486d1-ec0b-480c-91c6-5d22d82ba4e9'}
        vert={false}
      />

      <Faqs />

      {!isVisible && ( <PrincipalVideo 
        
      
      /> )}

      <CookieBanner 
        searchParams={searchParams}
        setIsVisible={setIsVisible}
        isVisible={isVisible}
      />
    </main>
  );
}