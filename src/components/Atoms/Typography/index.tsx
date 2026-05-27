import React from 'react';
import type { ITypographyProps } from './types';
import './Typography.css';

const defaultTagMap: Record<string, keyof React.JSX.IntrinsicElements> = {
  hero: 'h1',
  display: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  body: 'p',
  small: 'p',
  caption: 'span',
  num: 'span',
};

const Typography: React.FC<ITypographyProps> = ({
  children,
  variant = 'body',
  as,
  gradient = false,
  className = '',
  ...rest
}: ITypographyProps) => {
  const Tag = (as || defaultTagMap[variant] || 'span') as React.ElementType;

  const classes = [
    `b42-typo--${variant}`,
    gradient ? 'b42-typo--gradient' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
};

export { Typography };
