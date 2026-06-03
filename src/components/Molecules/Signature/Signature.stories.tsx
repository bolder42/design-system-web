import type { Meta, StoryObj } from '@storybook/react';
import { Signature } from './index';

const meta = {
  title: 'Molecules/Signature',
  component: Signature,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text', description: 'Text before the blinking cursor' },
  },
} satisfies Meta<typeof Signature>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { text: 'B42' },
};

export const CustomText: Story = {
  args: { text: 'B' },
};

export const Large: Story = {
  args: { text: 'B42' },
  render: (args) => (
    <div style={{ fontSize: '32px' }}>
      <Signature {...args} />
    </div>
  ),
};
