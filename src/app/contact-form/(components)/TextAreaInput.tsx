import React from 'react'
import { useFormContext } from 'react-hook-form'

const TextAreaInput = () => {
    const { register } = useFormContext()
    return (
        <div className='flex flex-col'>
            <label htmlFor="detalles" className="m-1 font-bold">Detalles</label>
            <textarea {...register("details") } 
            className="h-32 text-primary-950 outline-none border-4 border-transparent focus-visible:border-primary-500 p-3"
            id='detalles' placeholder='Aquí puedes dejarnos tus dudas o contarnos más a detalle tus planes migratorios para asesorarte de la mejor manera. '/>
        </div>
    )
}

export default TextAreaInput