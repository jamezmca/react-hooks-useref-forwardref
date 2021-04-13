import React from 'react'

const Input = ({ type, onKeyDown, placeholder }, ref) => {
    return (
        <input ref={ref} 
        type={type} 
        onKeyDown={onKeyDown} 
        placeholder={placeholder} />

    )
}

const forwardInput = React.forwardRef(Input)

export default forwardInput
