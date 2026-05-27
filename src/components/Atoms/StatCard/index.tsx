import React from 'react';
import type { IStatCardProps } from './types';
import './StatCard.css';

const StatCard: React.FC<IStatCardProps> = ({
  value,
  label,
  accent = false,
  className = '',
  ...rest
}: IStatCardProps) => {
  const classes = [
    'b42-stat',
    accent ? 'b42-stat--accent' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} {...rest}>
      <div className="b42-stat__value">{value}</div>
      <div className="b42-stat__label">{label}</div>
    </div>
  );
};

export { StatCard };
