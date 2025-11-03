import type { Meta, StoryObj } from '@storybook/react-vite';
import Toast from './Toast';
import css from './Toast.module.css';

const meta = {
  component: Toast,
  decorators: [
    (Story) => (
      <div className={css.toastContainer}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Succes: Story = {
  args: {
    message: 'Succesed toast',
    type: 'success',
  },
};
