
import React from 'react'

const ErrorMessage = ({children}) => {
  return (
    <div style={{
        backgroundColor:'orange',
        color:'white',
        height:'40px',
        width:'560px',
        marginBottom:'10px',
        borderRadius:"10px",
        textAlign:"center",
        fontSize:"20px",
        paddingTop:'13px'
        
       
    }}>

      {children}
    </div>
  )
}

export default ErrorMessage
