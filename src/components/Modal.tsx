'use client'
import { useRouter } from 'next/navigation'
import React, { ReactElement } from 'react'

const Modal = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter()

    return (
        <div className='backdrop-blur-sm backdrop-brightness-50 fixed top-0 left-0 h-screen w-screen z-30 grid items-center' >
            <div className='absolute w-full h-full top-0 left-0 -z-10' onClick={() => router.back()}/>
            <div className='grid justify-center items-center self-center z-0'>
                {children}
            </div>
        </div>
    )
}

export default Modal