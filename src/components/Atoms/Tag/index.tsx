import React from 'react';
import type { ITagProps } from './types';
import './Tag.css';

const Tag: React.FC<ITagProps> = ({
  children,
  variant = 'default',
  className = '',
  ...rest
}: ITagProps) => {
  const classes = [
    'b42-tag',
    variant !== 'default' ? `b42-tag--${variant}` : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <span className={classes} {...rest}>
      {variant === 'live' && <span className="b42-tag__dot" />}
      {children}
    </span>
  );
};

export { Tag };
