import React from 'react';
import type { IDividerProps } from './types';
import './Divider.css';

const Divider: React.FC<IDividerProps> = ({
  variant = 'hairline',
  className = '',
  ...rest
}: IDividerProps) => {
  const classes = [
    'b42-divider',
    `b42-divider--${variant}`,
    className,
  ].filter(Boolean).join(' ');

  return <hr className={classes} {...rest} />;
};

export { Divider };
