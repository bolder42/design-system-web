export type TagVariant = 'default' | 'accent' | 'magenta' | 'live';

export interface ITagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Visual variant of the tag */
  variant?: TagVariant;
  /** Content of the tag */
  children: React.ReactNode;
}
