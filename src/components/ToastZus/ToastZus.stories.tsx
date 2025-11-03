import type { Meta } from '@storybook/react-vite';
import ToastZus from './ToastZus';
import { useZusToast } from './toastsStore';

const meta = {
  component: ToastZus,
  title: 'Zus/ZusToast',
} satisfies Meta<typeof ToastZus>;

export default meta;

export const Demo = () => {
  const { addToast } = useZusToast();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'start' }}>
      <button onClick={() => addToast({ message: 'Success', type: 'success', duration: 6000 })}>
        Show Success Toast
      </button>
      <button onClick={() => addToast({ message: 'Error', type: 'error' })}>
        Show Error Toast
      </button>
      <button onClick={() => addToast({ message: 'Warning', type: 'warning' })}>
        Show Warning Toast
      </button>
      <button onClick={() => addToast({ message: 'Info', type: 'info' })}>Show Info Toast</button>
      <ToastZus />
    </div>
  );
};
