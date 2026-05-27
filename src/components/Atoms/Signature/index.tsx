import React from 'react';
import type { ISignatureProps } from './types';
import './Signature.css';

const Signature: React.FC<ISignatureProps> = ({
  text = 'B42',
  className = '',
  ...rest
}: ISignatureProps) => {
  return (
    <span
      className={['b42-signature', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {text}
    </span>
  );
};

export { Signature };
