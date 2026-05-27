export type ButtonVariant = 'primary' | 'accent' | 'ghost' | 'magenta';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant?: ButtonVariant;
  /** Size of the button */
  size?: ButtonSize;
  /** Content inside the button */
  children: React.ReactNode;
}