import type { Meta, StoryObj } from '@storybook/react';
import { Cursor } from './index';

const meta = {
  title: 'Atoms/Cursor',
  component: Cursor,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Cursor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const InContext: Story = {
  render: () => (
    <div style={{
      fontFamily: "var(--b42-font-mono)",
      fontSize: '16px',
      color: '#fff',
    }}>
      <span style={{ color: 'rgba(255,255,255,0.55)' }}>&gt;</span> hello<Cursor />
    </div>
  ),
};
