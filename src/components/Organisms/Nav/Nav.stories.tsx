import type { Meta, StoryObj } from '@storybook/react';
import { Nav } from './Nav';

const meta = {
  title: 'Organisms/Nav',
  component: Nav,
  parameters: { layout: 'fullscreen', backgrounds: { default: 'dark' } },
  tags: ['autodocs'],
  argTypes: {
    sections: { control: 'object' },
    brandText: { control: 'text' },
  },
} satisfies Meta<typeof Nav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { sections: ['// SECTION', 'SERVIÇOS', 'CASES'], brandText: 'B_' },
};
