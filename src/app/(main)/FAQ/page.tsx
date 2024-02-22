import { SlArrowRight } from "react-icons/sl";

const page = () => {

    return (
        <>
            <h1 className="text-center block font-bold text-4xl m-3 text-primary-900 ">Peguntas frecuentes</h1>
            <article className="grid gap-3 m-5">
                <FAQ title="¿Cuanto tiempo debe tener de vigencia mi pasaporte para poder viajar a Estados Unidos o Canada?" info="El pasaporte debe tener un tiempo mínimo de vigencia de 6 meses contados a partir de la fecha del viaje." />

                <FAQ title="¿Como saber que tipo de visa necesito?" info="El tipo de visa que debes utilizar es fundamental para conseguir la aprobación de tu visa, una gran mayoría de negaciones se da por que el consul determina que tu solicitud esta tipificada de forma errada.
                lo primero que debes hacer es tener claro tu objetivo de viaje, asi podrás identificar la visa que realmente requieres y si cumples con los requisitos para hacer la solicitud."/>

                <FAQ title="Si me cancelaron la visa, ¿La puedo volver a solicitar?" info="Lo primero que debes saber es en que estado migratorio te encuentras, con ello puedes saber 
                si eres admisible o que tipo de proceso debes realizar para volver a ser apto para ingresar legalmente a los Estados Unidos, recuerda que un proceso sin errores te llevara 
                a cumplir tu meta"/>

                <FAQ title="¿Qué se necesita para la entrevista consular?" info="La entrevista es muy importante para el resultado de tu solicitud por eso
                te sugerimos prepararte con anticipación, debes presentar tu pasaporte, el cual debe estar vigente y en perfectas condiciones, la hoja de
                confirmación con la que presentaste tus huellas / biometría y ser  puntuales, tener una excelente presentación personal te ayudara a conseguir el objetivo."/>

                <FAQ title="¿Qué sucede si no puedo asistir a mi cita de huellas / biometría?" info="Si presentas algún inconveniente que no te permite asistir a tu cita de 
                huellas es necesario reagendar tus citas e informar al consulado el motivo de tu inasistencia para que asi no se vea afectado tu proceso."/>

                <FAQ title="¿Puedo reagendar mis citas consulares?" info="Claro que puedes reagendar tus citas, es importante tener en cuenta que este proceso lo puedes hacer 
                durante la vigencia del pago consular, es decir un año, una vez se cumpla este tiempo el sistema no te dará la opción de cambiar la fecha por que corres el 
                riesgo de cancelar la cita y perder tu proceso."/>

                <FAQ title="¿Quien puede asegurarme la aprobación de la visa?" info="Ninguna persona o empresa puede garantizarte la aprobación de la visa ya que la decision 
                será tomada por el consul durante la entrevista y el resultado depende de tu perfil y el análisis que hagan durante tu entrevista consular. Ten presente que con 
                el acompañamiento y asesoría brindada por nuestros profesionales aumentaras el porcentaje de aprobación para tu visado."/>

            </article>
            {/* <section>
                <h2>Déjanos tu pregunta</h2>
                <span>Uno de nuestros asesores te dará claridad en tus dudas. </span>

            </section> */}

        </>
    )

}
const FAQ = ({ title, info }: { title: string, info: string }) => {
    return (
        <div className="group relative overflow-hidden text-primary-950  rounded-md border-primary-700x border-2" tabIndex={0}>
            <figure className="p-4 text-xl md:text-2xl flex flex-row justify-between items-center bg-primary-100">
                <h2 className="inline">{title}</h2>
                <SlArrowRight className="group-focus:rotate-90 transition ease-in-out" />
            </figure>
            <hr className="border-t-2 border " />
            <p className="h-0 -translate-y-full text-transparent text-lg group-focus:p-4 group-focus:translate-y-0 group-focus:h-full group-focus:text-primary-950 transition select-none">
                {info}
            </p>
        </div>
    )
}

export default page