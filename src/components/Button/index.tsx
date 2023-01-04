import React, { ReactNode } from 'react';
import './button.css';


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children:ReactNode;
}

export function Button({children,...rest}:ButtonProps){
  return (
      <button {...rest}>{children}</button>
  )
}