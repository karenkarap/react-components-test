import type { Meta, StoryObj } from '@storybook/react-vite';
import Input from './Input';

const meta = {
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    clearable: true,
    type: 'password',
  },
};

export const Second: Story = {
  args: {
    clearable: true,
    type: 'text',
  },
};

export const Third: Story = {
  args: {
    clearable: false,
    type: 'number',
  },
};
