import type { Meta, StoryObj } from '@storybook/react';
import { Pillars } from './Pillars';

const meta = {
  title: 'Organisms/Pillars',
  component: Pillars,
  parameters: { layout: 'centered', backgrounds: { default: 'dark' } },
  tags: ['autodocs'],
} satisfies Meta<typeof Pillars>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { title: 'Técnica', subtitle: 'Competências práticas', body: 'Formação técnica e product.' },
      { title: 'Organizacional', subtitle: 'Processos & práticas', body: 'Estrutura e governança.' },
      { title: 'Humana', subtitle: 'Liderança', body: 'Cultura e desenvolvimento de pessoas.' },
    ],
  },
};
