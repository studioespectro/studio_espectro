import "./globals.css";
import Script from "next/script";
import {
  FilsonPro,
  NewOrder,
  LeagueSpartan,
  HeadLineA,
  YellowTail,
} from "./helpers/fonts";
import { ContextProvider } from "./hooks/Context";

export const metadata = {
  title: "Studio Espectro",
  description:
    "Studio Espectro - small trainig group | O teu studio de treino favorito!",
  icons: {
    icon: "/assets/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <meta
        name="facebook-domain-verification"
        content="ugxw5pa7vnyw1iqdch6xp0ccnu7khh"
      />
      {/* <!-- Meta Pixel Code --> */}
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        !function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1638861453554103');
fbq('track', 'PageView');`,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style="display:none"
          src="https://www.facebook.com/tr?id=1638861453554103&ev=PageView&noscript=1"
        />
      </noscript>
      {/* <!-- End Meta Pixel Code --> */}
      <body
        className={`${FilsonPro.variable} ${LeagueSpartan.variable} ${HeadLineA.variable} ${YellowTail.variable} ${NewOrder.variable}`}
      >
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
