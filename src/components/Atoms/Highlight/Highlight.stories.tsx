import type { Meta, StoryObj } from '@storybook/react';
import { Highlight } from './index';

const meta = {
  title: 'Atoms/Highlight',
  component: Highlight,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
} satisfies Meta<typeof Highlight>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'PESSOAS',
  },
};

export const InContext: Story = {
  render: () => (
    <div style={{
      fontFamily: "var(--b42-font-mono)",
      fontSize: '18px',
      textTransform: 'uppercase',
      letterSpacing: '0.02em',
      lineHeight: 1.35,
      color: '#fff',
    }}>
      O novo jogo da inovação se ganha com{' '}
      <Highlight>PESSOAS</Highlight> que executam{' '}
      <Highlight>RÁPIDO</Highlight>.
    </div>
  ),
};
