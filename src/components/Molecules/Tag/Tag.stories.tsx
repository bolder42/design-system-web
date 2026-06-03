import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './index';

const meta = {
  title: 'Molecules/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'accent', 'magenta', 'live'],
    },
    children: { control: 'text' },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: 'Strategy' },
};

export const Accent: Story = {
  args: { variant: 'accent', children: 'IA & Dados' },
};

export const Magenta: Story = {
  args: { variant: 'magenta', children: 'Hot' },
};

export const Live: Story = {
  args: { variant: 'live', children: 'Live' },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Tag>Strategy</Tag>
      <Tag variant="accent">IA &amp; Dados</Tag>
      <Tag variant="magenta">Hot</Tag>
      <Tag variant="live">Live</Tag>
    </div>
  ),
};
