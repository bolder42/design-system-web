import React from 'react';
import type { ICursorProps } from './types';
import './Cursor.css';

const Cursor: React.FC<ICursorProps> = ({
  tone = 'primary',
  className = '',
  ...rest
}: ICursorProps) => {
  return (
    <span
      className={['b42-cursor', `b42-cursor--${tone}`, className].filter(Boolean).join(' ')}
      aria-hidden="true"
      {...rest}
    />
  );
};

export { Cursor };
