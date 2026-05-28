export interface IFooterProps {
  links?: { label: string; href?: string }[];
  brandText?: string;
  columns?: {
    heading: string;
    links: { label: string; href?: string }[];
  }[];
}
