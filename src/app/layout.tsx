import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import '@/styles/globals.scss';
import WhatsAppButton from "@/componets/buttons/WhatsAppButton";

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
      <Script id='fb-pixel' strategy='afterInteractive'>
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL}');
          fbq('track', 'PageView');
        `}
      </Script>
      <body className={inter.className}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
