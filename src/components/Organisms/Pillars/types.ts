export interface IPillarItem {
  title: string;
  subtitle?: string;
  body?: string;
}

export interface IPillarsProps {
  items?: IPillarItem[];
}
