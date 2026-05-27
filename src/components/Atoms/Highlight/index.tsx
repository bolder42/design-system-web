import React from 'react';
import type { IHighlightProps } from './types';
import './Highlight.css';

const Highlight: React.FC<IHighlightProps> = ({
  children,
  className = '',
  ...rest
}: IHighlightProps) => {
  return (
    <span
      className={['b42-highlight', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </span>
  );
};

export { Highlight };
