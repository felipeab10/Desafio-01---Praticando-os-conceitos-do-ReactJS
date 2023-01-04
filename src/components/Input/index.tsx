import React from 'react';
import './input.css';


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  
}

export function Input({...rest}:InputProps){
  return (
      <input {...rest}/>

  )
}