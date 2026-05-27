import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './index';

const meta = {
  title: 'Atoms/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['dark', 'white', 'accent'],
      description: 'Surface variant',
    },
    children: { control: 'text' },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const CardContent = ({ dark = true }: { dark?: boolean }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '280px' }}>
    <div style={{
      fontFamily: "var(--b42-font-mono)",
      fontSize: '11px',
      letterSpacing: '0.08em',
      textTransform: 'uppercase' as const,
      opacity: 0.7,
    }}>
      <span style={{ color: dark ? '#C9A5E8' : '#893B96', marginRight: '0.5ch' }}>//</span>
      Diferenciais
    </div>
    <div style={{
      fontFamily: "var(--b42-font-mono)",
      fontSize: '20px',
      fontWeight: 500,
      textTransform: 'uppercase' as const,
      letterSpacing: '0.02em',
      lineHeight: 1.15,
    }}>
      Visão<br />sistêmica
    </div>
    <div style={{
      fontFamily: "var(--b42-font-sans)",
      fontSize: '14px',
      lineHeight: 1.55,
      opacity: 0.85,
    }}>
      Interseção entre técnico, organizacional e humano — sempre com visão de negócio.
    </div>
  </div>
);

export const Dark: Story = {
  args: {
    variant: 'dark',
    children: undefined,
  },
  render: (args) => (
    <Card {...args}>
      <CardContent />
    </Card>
  ),
};

export const White: Story = {
  args: {
    variant: 'white',
    children: undefined,
  },
  render: (args) => (
    <Card {...args}>
      <CardContent dark={false} />
    </Card>
  ),
};

export const Accent: Story = {
  args: {
    variant: 'accent',
    children: undefined,
  },
  render: (args) => (
    <Card {...args}>
      <CardContent />
    </Card>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '14px' }}>
      <Card variant="dark"><CardContent /></Card>
      <Card variant="white"><CardContent dark={false} /></Card>
      <Card variant="accent"><CardContent /></Card>
    </div>
  ),
};
