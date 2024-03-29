import { dir } from 'i18next'
import { languages } from '../i18n/settings.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Footer } from './Components/Footer/Footer.jsx'
import { Navbar } from './Components/Navbar/navbar.jsx'
import Head from 'next/head.js'
import "../globals.css";

export const metadata = {
  title: 'One supplier for your all industry needs',
  description: 'Generated by One Chemics Developer team',
}
export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function RootLayout({
  children,
  params: {
    lng
  }
}) {
  return (
    <>
      <html lang={lng} dir={dir(lng)}>
         <head>
          <meta name="google-site-verification" content='_PHjsOL7LdGVWlH70oMXMnRpbJF6yosUUHbSQKVlKmM' />
          <script dangerouslySetInnerHTML={{
      __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-W3XWCTPM');`,
    }} />
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=G-B596SND2Y9`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-B596SND2Y9');
        `,
      }}
    />

      {/* Yandex.Metrika counter */}
      <script
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

          ym(96194530, "init", {
               clickmap:true,
               trackLinks:true,
               accurateTrackBounce:true,
               webvisor:true,
               ecommerce:"dataLayer"
          });
        `,
      }}
    />
    <noscript>
      <div>
        <img src="https://mc.yandex.ru/watch/96194530" style={{ position: 'absolute', left: '-9999px' }} alt="" />
      </div>
    </noscript>
    {/* /Yandex.Metrika counter */}
          </head>       
        <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16 32x32"/>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
            crossorigin="anonymous" />
            
        </Head>
        {/* <head /> */}
        <body>
            <Head>
                {/* Other head elements */}
                <meta name="google-site-verification" content="_PHjsOL7LdGVWlH70oMXMnRpbJF6yosUUHbSQKVlKmM" />
                {/* Add more meta tags as needed */}
            </Head>
          <Navbar lng={lng} />
          {children}
          <Footer lng={lng} />
        </body>
      </html>
    </>
  )
}