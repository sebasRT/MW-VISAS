import ContactUs from "@/components/ContactUs"
import Header from "@/components/Header"
import Info from "@/components/Info"

export default function MainLayout(props: {
  children: React.ReactNode
  modal: React.ReactNode}) {
    return (<div className="flex flex-col md:flex-row">

        <Header/>
            {props.modal}
      <main>
            {props.children}
      </main>
          <ContactUs/>
        <Info styles="relative text-primary-700 text-base text-center md:hidden my-4"/>
    </div> ) 
  }