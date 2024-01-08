import ContactUs from "@/components/ContactUs"
import Header from "@/components/Header"
import Info from "@/components/Info"

export default function MainLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (<div className="flex flex-col md:flex-row">
        <Header/>
            {children}
          <ContactUs/>
        <Info styles="text-blue-primary text-base text-center md:hidden"/>
    </div> ) 
  }