import { Metadata } from "next"
import "../styles/globals.css"

export const metadata: Metadata = {
  title: 'MW-VISAS  -  Expertos migratorios - Colombia',
  description: 'Encuentra asesoría y acompañamiento de expertos para obtener tu visa Americana o Canadiense',
  openGraph:{
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
    <html lang="en">
      {/* <CldOgImage src="mw-visas/bu8xqyolckasxaeaaaec" alt={"MW-VISAS  - Expertos migratorios - Colombia"}/> */}
      <body>
        {children}
      </body>
    </html>
  )
}