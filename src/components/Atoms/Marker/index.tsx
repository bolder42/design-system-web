import React from 'react';
import type { IMarkerProps } from './types';
import './Marker.css';

const Marker: React.FC<IMarkerProps> = ({
  children,
  className = '',
  ...rest
}: IMarkerProps) => {
  return (
    <span
      className={['b42-marker', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </span>
  );
};

export { Marker };
