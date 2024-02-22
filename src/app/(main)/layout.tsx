import ContactUs from "@/components/ContactUs"
import Header from "@/components/Header"
import Info from "@/components/Info"

export default function MainLayout(props: {
  children: React.ReactNode
  modal: React.ReactNode}) {
    return (<div className="flex flex-col md:flex-row justify-between">

        <Header/>
            {props.modal}
      <main className="flex-1">
            {props.children}
      </main>
          <ContactUs/>
        <Info styles="relative bg-primary-600 py-4 text-primary-50 text-base text-center md:hidden my-4"/>
    </div> ) 
  }