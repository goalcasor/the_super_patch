import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import '@/styles/globals.scss';
import WhatsAppButton from "@/componets/buttons/WhatsAppButton";
import Footer from "@/componets/footers/Footer";
import { OwnersProvider } from "@/context/OwnersContext";
import TikTokPixel from "@/pixels/TikTokPixel";
import MetaPixel from "@/pixels/MetaPixel";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Super Patch",
  description: "En Super Patch tenemos soluciones fáciles y sin drogas para todo, desde el sueño hasta los deportes, y otros beneficios que mejoran la vida.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

 

  return (
    <html lang="en">
      <head>

          <meta
            property="og:image"
            content="https://firebasestorage.googleapis.com/v0/b/mdc-guide.appspot.com/o/sp-media%2Fbanner-principal.png?alt=media&token=d2aa3f43-fd77-4022-b15a-6d54b60a6d42"
          />

        <TikTokPixel />
        <MetaPixel />

           
      </head>
     

      <OwnersProvider >
        <body className={inter.className}>
          {children}
     {/*      <Footer /> */}
          <WhatsAppButton />
        </body>
      </OwnersProvider>

    </html>
  );
}
