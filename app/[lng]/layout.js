import { dir } from 'i18next'
import { languages } from '../i18n/settings.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Footer } from './Components/Footer/Footer.jsx'
import { Navbar } from './Components/Navbar/navbar.jsx'
import Content from './Home/page.jsx'

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
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>
        <Navbar lng={lng}/>
        {children}

        <Footer lng={lng}/>
      </body>
    </html>
  )
}