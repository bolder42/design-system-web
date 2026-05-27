import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './index';

const meta = {
  title: 'Atoms/Divider',
  component: Divider,
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'dark' },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['signature', 'hairline', 'solid'],
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Signature: Story = {
  args: { variant: 'signature' },
};

export const Hairline: Story = {
  args: { variant: 'hairline' },
};

export const Solid: Story = {
  args: { variant: 'solid' },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '26px', width: '100%' }}>
      <div>
        <div style={{
          fontFamily: "var(--b42-font-mono)",
          fontSize: '10px',
          letterSpacing: '0.08em',
          color: 'rgba(255,255,255,0.45)',
          textTransform: 'uppercase',
          marginBottom: '10px',
        }}>
          <span style={{ color: '#C9A5E8', marginRight: '0.5ch' }}>//</span>
          Signature gradient divider — 3px
        </div>
        <Divider variant="signature" />
      </div>
      <div>
        <div style={{
          fontFamily: "var(--b42-font-mono)",
          fontSize: '10px',
          letterSpacing: '0.08em',
          color: 'rgba(255,255,255,0.45)',
          textTransform: 'uppercase',
          marginBottom: '10px',
        }}>
          <span style={{ color: '#C9A5E8', marginRight: '0.5ch' }}>//</span>
          Hairline divider — 1px @ 10% white
        </div>
        <Divider variant="hairline" />
      </div>
      <div>
        <div style={{
          fontFamily: "var(--b42-font-mono)",
          fontSize: '10px',
          letterSpacing: '0.08em',
          color: 'rgba(255,255,255,0.45)',
          textTransform: 'uppercase',
          marginBottom: '10px',
        }}>
          <span style={{ color: '#C9A5E8', marginRight: '0.5ch' }}>//</span>
          Solid rule — 1px white
        </div>
        <Divider variant="solid" />
      </div>
    </div>
  ),
};
