import Head from 'next/head';
import Hero from '@/componets/landing-info-components/Hero';
import About from '@/componets/landing-info-components/About';
import Products from '@/componets/landing-info-components/Products';
import Testimonials from '@/componets/landing-info-components/Testimonials';
import Contact from '@/componets/landing-info-components/Contact';
import Resources from '@/componets/landing-info-components/Resources';

export default function InfoLanding() {
  return (
    <div>
      <Head>
        <title>Super Patch Company - El Futuro del Bienestar</title>
        <meta name="description" content="Descubre la tecnología de neurociencia 100% natural de Super Patch para aliviar el dolor, mejorar el sueño, reducir el estrés y aumentar tu energía." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <About />
        <Testimonials />
        <Products />
        <Contact />
        <Resources />
      </main>
    </div>
  );
}