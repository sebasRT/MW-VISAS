'use client'
import { ChangeEvent, useEffect, useState } from "react"
import { useFormContext } from "react-hook-form"
// import { ProcedureType } from "../page"

export type ProcedureType = "us-visa" | "ca-visa" | "pasaporte" | "renovación" | ""
type acVisaType = "trabajo" | "estudio" | "turismo" | "transito"
type usVisaType = "trabajo" | "estudio" | "turismo" | "transito" | "emergencia" | "tripulante"

const ProcedureInput = () => {

    const { register, setValue, getValues } = useFormContext();
    const [procType, setProcedure] = useState(getValues("procedure.type"))
    const [proc, setSub] = useState(getValues("procedure.proc"))

    useEffect(() => {
      setValue("procedure.type", procType)
      setValue("procedure.proc", proc)
    }, [procType, proc])

    return (
        <div>
                <input type="text" hidden  {...register("procedure.type")}/>
                <input type="text" hidden  {...register("procedure.proc")}/>
            <label htmlFor="tramite" className="m-1 font-bold">Tramite</label>

            <div className="grid grid-flow-col auto-cols-fr gap-3 text-primary-950">
                <select id="tramite" value={procType} onChange={e=>setProcedure(e.target.value)}>
                    <option value="" disabled >Elige un tramite</option>
                    <option value="us-visa" >Visa Estadounidense</option>
                    <option value="ca-visa" >Visa Canadiense</option>
                    <option value="renovación" >Renovación de Visa</option>
                    <option value="pasaporte" >Pasaporte</option>
                </select>

                {
                    (() => {
                        switch (procType) {
                            case "us-visa":
                                return <select className="" defaultValue="disabled" onChange={e=>setSub(e.target.value)} value={proc}>
                                    <option value="disabled" disabled>Tipo de visa</option>
                                    <option value="turismo">Turismo</option>
                                    <option value="estudio">Estudio</option>
                                    <option value="trabajo">Trabajo</option>
                                    <option value="tripulante">Tripulante</option>
                                    <option value="transito">Transito</option>
                                    <option value="emergencia">Cita de emergencia</option>
                                </select>

                            case "ca-visa":
                                return <select className="" defaultValue="disabled" onChange={e=>setSub(e.target.value)} value={proc}>
                                    <option value="disabled" disabled>Tipo de visa</option>
                                    <option value="turismo">Turismo</option>
                                    <option value="estudio">Estudio</option>
                                    <option value="trabajo">Trabajo</option>
                                    <option value="transito">Transito</option>
                                </select>

                            case "renovación":
                                return <select defaultValue="disabled" onChange={e=>setSub(e.target.value)} value={proc}>
                                    <option value="disabled" disabled>Tipo de visa</option>
                                    <option value="estadounidense">Estadounidense</option>
                                    <option value="canadiense">Canadiense</option>
                                </select>

                            case "pasaporte":
                                return <select defaultValue="disabled" onChange={e=>setSub(e.target.value)} value={proc}>
                                    <option value="disabled" disabled>Tipo de tramite</option>
                                    <option value="nuevo">Nuevo</option>
                                    <option value="renovación">Renovación</option>
                                </select>

                        }
                    })()
                }
            </div>
        </div>
    )
}

export default ProcedureInput