import React from 'react';
import type { IButtonProps } from './types';

const Button: React.FC<IButtonProps> = ({ children }: IButtonProps) => {
  return (
    <button
      type="button"
    >
      {children}
    </button>
  );
};

export { Button };