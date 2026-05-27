import React from 'react';
import type { IButtonProps } from './types';
import './Button.css';

const Button: React.FC<IButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...rest
}: IButtonProps) => {
  const classes = [
    'b42-btn',
    `b42-btn--${variant}`,
    `b42-btn--${size}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      type="button"
      className={classes}
      {...rest}
    >
      {children}
    </button>
  );
};

export { Button };