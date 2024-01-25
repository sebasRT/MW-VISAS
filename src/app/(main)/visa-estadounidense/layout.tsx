import React, { ReactNode } from 'react'

const layout = ({children, modal}:{children: ReactNode, modal: ReactNode}) => {
  return (
    <>
    {modal}
    {children}
    </>
  )
}

export default layout