import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import '@/styles/globals.scss';
import WhatsAppButton from "@/componets/buttons/WhatsAppButton";
import Footer from "@/componets/footers/Footer";
import { OwnersProvider } from "@/context/OwnersContext";
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
      <meta
        property="og:image"
        content="https://firebasestorage.googleapis.com/v0/b/mdc-guide.appspot.com/o/sp-media%2Fbanner-principal.png?alt=media&token=d2aa3f43-fd77-4022-b15a-6d54b60a6d42"
      />
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
      <Script
        id="tiktok-pixel"
        strategy="afterInteractive"
      >
        {`
          !function (w, d, t) {
            w.TiktokAnalyticsObject=t;
            var ttq=w[t]=w[t]||[];
            ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"];
            ttq.setAndDefer=function(t,e){
              t[e]=function(){
                t.push([e].concat(Array.prototype.slice.call(arguments,0)))
              }
            };
            for(var i=0;i<ttq.methods.length;i++) ttq.setAndDefer(ttq,ttq.methods[i]);
            ttq.instance=function(t){
              for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++) ttq.setAndDefer(e,ttq.methods[n]);
              return e
            };
            ttq.load=function(e,n){
              var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;
              ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};
              n=document.createElement("script");
              n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;
              e=document.getElementsByTagName("script")[0];
              e.parentNode.insertBefore(n,e)
            };
            ttq.load('CQUA813C77U2R2HQ3S40');
            ttq.page();
          }(window, document, 'ttq');
        `}
      </Script>
      <OwnersProvider >
        <body className={inter.className}>
          {children}
          <Footer />
          <WhatsAppButton />
        </body>
      </OwnersProvider>

    </html>
  );
}
