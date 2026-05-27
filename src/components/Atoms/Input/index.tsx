import React from 'react';
import type { IInputProps } from './types';
import './Input.css';

const Input: React.FC<IInputProps> = ({
  label,
  className = '',
  id,
  ...rest
}: IInputProps) => {
  const inputId = id || (label ? `input-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);

  return (
    <div className="b42-input-field">
      {label && (
        <label className="b42-input-label" htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={['b42-input', className].filter(Boolean).join(' ')}
        {...rest}
      />
    </div>
  );
};

export { Input };
