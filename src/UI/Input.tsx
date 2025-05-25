import React, { type ComponentProps } from 'react'

type IInput = ComponentProps<"input">


function Input({children,className,...rest}:IInput ) {
  return (
    <input className={className} {...rest}>{children}</input>
  )
}

export default Input