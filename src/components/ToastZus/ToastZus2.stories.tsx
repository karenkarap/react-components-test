import type { Meta, StoryObj } from '@storybook/react-vite';
import ToastZus from './ToastZus';
import { useZusToast } from './toastsStore';
import type { ToastIntarface } from '../../types';

const meta = {
  component: ToastZus,
  title: 'Zus/ZusToast2',
} satisfies Meta<typeof ToastZus>;

export default meta;

type Story = StoryObj<typeof meta>;

const Success: Story = {
  args: {
    type: 'success',
    duration: 5000,
    message: 'Success toast from zustand!!!',
  },
};

export const Demo = () => {
  const { addToast } = useZusToast();

  return (
    <>
      <button onClick={() => addToast({ ...(Success.args as ToastIntarface) })}>
        Show Success Toast
      </button>
      <ToastZus />
    </>
  );
};
