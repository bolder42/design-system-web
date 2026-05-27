export interface IStatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The numeric value to display */
  value: string;
  /** Label below the value */
  label: string;
  /** Whether to use accent color for the value */
  accent?: boolean;
}
