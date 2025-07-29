import React from 'react'

const Button = ({text,bg,border,hover}:any) => {
    return (
      

<button className={`${bg} ${border} px-1 rounded-sm hover:bg-red-600 border border-gray-600  transition transform`}>{text}</button>
      



    )
}

export default Button

Button