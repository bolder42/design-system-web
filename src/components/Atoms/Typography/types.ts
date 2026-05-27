export type TypographyVariant =
  | 'hero'
  | 'display'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'body'
  | 'small'
  | 'caption'
  | 'num';

export interface ITypographyProps extends React.HTMLAttributes<HTMLElement> {
  /** Typography scale variant */
  variant?: TypographyVariant;
  /** HTML tag to render as */
  as?: keyof React.JSX.IntrinsicElements;
  /** Whether to apply gradient text effect */
  gradient?: boolean;
  /** Content */
  children: React.ReactNode;
}
