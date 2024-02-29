import React from 'react'
import "./Input.css"

const Input = ({type, placeholder, className,value,onChange,onKeyDown,name,id,autoComplete,required}) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={className}
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            name={name}
            id={id}
            autoComplete={autoComplete}
            required = {required}
        />
    )
}

export default Input