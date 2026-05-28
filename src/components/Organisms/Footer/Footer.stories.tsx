import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

const meta = {
  title: 'Organisms/Footer',
  component: Footer,
  parameters: { layout: 'centered', backgrounds: { default: 'dark' } },
  tags: ['autodocs'],
  argTypes: { brandText: { control: 'text' } },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { links: [{ label: 'Política de privacidade' }, { label: 'Contato' }], brandText: 'B_' },
};

export const Columns: Story = {
  args: { links: [], brandText: 'B42' },
};

export const LinksWithHref: Story = {
  args: { links: [{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }], brandText: 'B_' },
};

export const CustomBrand: Story = {
  args: { brandText: 'MyBrand' },
};
