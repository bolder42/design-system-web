import React from 'react';
import type { ICardProps } from './types';
import './Card.css';

const Card: React.FC<ICardProps> = ({
  children,
  variant = 'dark',
  className = '',
  ...rest
}: ICardProps) => {
  const classes = [
    'b42-card',
    variant !== 'dark' ? `b42-card--${variant}` : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export { Card };
