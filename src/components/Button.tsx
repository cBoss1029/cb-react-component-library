import React from 'react';

export interface ButtonProps extends React.DetailedHTMLProps<React.
ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
  backgroundColor?: string;
  color?: string;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, backgroundColor, color } = props;
  let _style: React.CSSProperties = {};

  /** Override defaults */
  // TODO: Add support for other CSS properties
  _style.backgroundColor ??= backgroundColor;
  _style.color ??= color;
  return (
    <button style={_style} {...props}>
      {children}
    </button>
  );
}