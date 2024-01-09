import React from 'react'
import "./Button.css"

const Button = ({className, onClick, type, texto}) => {
  return (
    <button 
    className={className}
    onClick={onClick}
    type={type}
    >
    {texto}
    </button>
  )
}

export default Button
