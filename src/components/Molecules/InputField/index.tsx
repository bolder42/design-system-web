import React from 'react';
import type { IInputFieldProps } from './types';
import './InputField.css';

const InputField: React.FC<IInputFieldProps> = ({
  label,
  className = '',
  id,
  ...rest
}: IInputFieldProps) => {
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

export { InputField };
