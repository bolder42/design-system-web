import type { Meta, StoryObj } from '@storybook/react';
import { InputField } from './index';

const meta = {
  title: 'Molecules/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Label with // prefix' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Nome',
    placeholder: 'seu_nome',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Nome',
    defaultValue: 'Andrea Suman',
  },
};

export const WithoutLabel: Story = {
  args: {
    placeholder: 'voce@dominio.com',
  },
};

export const Disabled: Story = {
  args: {
    label: 'E-mail',
    defaultValue: 'contato@b42.com.br',
    disabled: true,
  },
};

export const FormLayout: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', width: '360px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <InputField label="Nome" defaultValue="Andrea Suman" />
        <InputField label="Empresa" placeholder="sua_empresa" />
      </div>
      <InputField label="E-mail" placeholder="voce@dominio.com" />
    </div>
  ),
};
