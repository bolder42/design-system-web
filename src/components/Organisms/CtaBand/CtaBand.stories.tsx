import type { Meta, StoryObj } from '@storybook/react';
import { CtaBand } from './CtaBand';
import { Button } from '../../Atoms/Button';

const meta = {
  title: 'Organisms/CtaBand',
  component: CtaBand,
  parameters: { layout: 'centered', backgrounds: { default: 'dark' } },
  tags: ['autodocs'],
} satisfies Meta<typeof CtaBand>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    kicker: 'Pronto para conversar?',
    children: <span>Conecte com o nosso time</span>,
  },
  render: (args) => (
    <CtaBand {...args}>
      <Button variant="ghost">Ver cases</Button>
    </CtaBand>
  ),
};
