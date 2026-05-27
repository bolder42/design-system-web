import type { Meta, StoryObj } from '@storybook/react';
import { Marker } from './index';

const meta = {
  title: 'Atoms/Marker',
  component: Marker,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
} satisfies Meta<typeof Marker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: 'Diferenciais' },
};

export const Multiple: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Marker>Diferenciais</Marker>
      <Marker>Nossa Abordagem</Marker>
      <Marker>Contexto</Marker>
      <Marker>Time</Marker>
    </div>
  ),
};
