export type CursorTone = 'primary' | 'lavender';

export interface ICursorProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color tone of the cursor character */
  tone?: CursorTone;
}
