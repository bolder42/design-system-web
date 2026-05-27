import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './index';

const meta = {
  title: 'Atoms/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'dark' },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['hero', 'display', 'h1', 'h2', 'h3', 'body', 'small', 'caption', 'num'],
    },
    gradient: { control: 'boolean' },
    children: { control: 'text' },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Hero: Story = {
  args: {
    variant: 'hero',
    children: 'Transformações reais',
  },
};

export const Display: Story = {
  args: {
    variant: 'display',
    children: 'Inovação com impacto',
  },
};

export const H1: Story = {
  args: {
    variant: 'h1',
    children: 'Acompanhamos o Brasil',
  },
};

export const H2: Story = {
  args: {
    variant: 'h2',
    children: 'Nossa abordagem',
  },
};

export const H3: Story = {
  args: {
    variant: 'h3',
    children: 'Visão sistêmica de verdade',
  },
};

export const Body: Story = {
  args: {
    variant: 'body',
    children: 'A gente constrói produtos digitais com IA, estratégias de negócio ancoradas em tech e formação de lideranças de ponta. Transformações reais não se contratam — se constroem juntos.',
  },
};

export const Small: Story = {
  args: {
    variant: 'small',
    children: 'Hub de inovação formado pela Bolder e 42 Rio — maior campus da rede 42 na América Latina.',
  },
};

export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'Dark surface · #1C1C1C',
  },
};

export const Num: Story = {
  args: {
    variant: 'num',
    children: 'R$10M+ · 3.000+ · 50+ · 7+',
  },
  render: (args) => (
    <Typography {...args} style={{ fontSize: '20px' }} />
  ),
};

export const GradientText: Story = {
  args: {
    variant: 'display',
    gradient: true,
    children: 'Gradient assinatura',
  },
};

export const TypeScale: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '14px' }}>
        <Typography variant="h1" style={{ flex: 1 }}>H1 — ACOMPANHAMOS O BRASIL</Typography>
        <Typography variant="caption">40px / mono 500 / +2%</Typography>
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '14px' }}>
        <Typography variant="h2" style={{ flex: 1 }}>H2 — NOSSA ABORDAGEM</Typography>
        <Typography variant="caption">24px / mono 500 / +2%</Typography>
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '14px' }}>
        <Typography variant="h3" style={{ flex: 1 }}>H3 · Visão sistêmica de verdade</Typography>
        <Typography variant="caption">18px / mono 500</Typography>
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
        <Typography variant="body" style={{ flex: 1 }}>Body — Texto de corpo com a fonte sans-serif para leitura confortável.</Typography>
        <Typography variant="caption">16px / sans / 1.55</Typography>
      </div>
    </div>
  ),
};
