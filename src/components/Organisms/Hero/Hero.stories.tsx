import type { Meta, StoryObj } from '@storybook/react';
import { Hero } from './Hero';

const meta = {
  title: 'Organisms/Hero',
  component: Hero,
  parameters: { layout: 'centered', backgrounds: { default: 'dark' } },
  tags: ['autodocs'],
  argTypes: {
    kicker: { control: 'text' },
    title: { control: 'text' },
    body: { control: 'text' },
  },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    kicker: "// HUB BOLDER + 42 RIO · 2025",
    body: 'Consultoria de estratégia, tecnologia de ponta e formação das próximas lideranças de tech — na mesma mesa.',
  },
};
