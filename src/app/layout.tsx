import { Metadata } from "next"
import "../styles/globals.css"

export const metadata: Metadata = {
  metadataBase: new URL('http://www.mwvisas.co'),
  title: 'MW-VISAS  -  Expertos migratorios - Colombia',
  description: 'Encuentra asesoría y acompañamiento de expertos en multiples tramites migratorios como Visa Estadounidense, Visa Canadiense, pasaporte, postulaciones laborales, etc.',
  openGraph:{
    images: '/opengraph-image.png',
    title: 'MW-VISAS  -  Expertos migratorios - Colombia',
    description: 'Encuentra asesoría y acompañamiento de expertos para obtener tu visa Americana o Canadiense'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">z
      <body className="scroll-smooth">
        {children}
      </body>
    </html>
  )
}