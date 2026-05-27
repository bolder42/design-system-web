export type DividerVariant = 'signature' | 'hairline' | 'solid';

export interface IDividerProps extends React.HTMLAttributes<HTMLHRElement> {
  /** Visual style of the divider */
  variant?: DividerVariant;
}
