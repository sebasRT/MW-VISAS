import React from 'react'

const useEncodeWppURI = (phone:number,message:string) => {
    
    const encodedMessage = encodeURIComponent(message)

    const baseURL = `http://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`
        
  return baseURL
}

export default useEncodeWppURI