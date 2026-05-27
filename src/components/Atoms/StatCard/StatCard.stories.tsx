import type { Meta, StoryObj } from '@storybook/react';
import { StatCard } from './index';

const meta = {
  title: 'Atoms/StatCard',
  component: StatCard,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text' },
    label: { control: 'text' },
    accent: { control: 'boolean' },
  },
} satisfies Meta<typeof StatCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 'R$10M+',
    label: 'Negócios gerados',
  },
};

export const Accent: Story = {
  args: {
    value: '3.000+',
    label: 'Lideranças',
    accent: true,
  },
};

export const Dashboard: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px' }}>
      <StatCard value="R$10M+" label="Negócios gerados" />
      <StatCard value="3.000+" label="Lideranças" accent />
      <StatCard value="50+" label="Corporações" />
      <StatCard value="4.500" label="Inscritos/seletiva" />
    </div>
  ),
};
