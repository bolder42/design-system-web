export type CardVariant = 'dark' | 'white' | 'accent';

export interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Surface variant */
  variant?: CardVariant;
  /** Content inside the card */
  children: React.ReactNode;
}
