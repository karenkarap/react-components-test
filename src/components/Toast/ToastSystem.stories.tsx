import type { Meta } from '@storybook/react-vite';
import Toast from './Toast';
import ToastProvider from './ToastProvider';
import { useToast } from './useToast';

const meta = {
  component: Toast,
  title: 'Components/Toast',
} satisfies Meta<typeof Toast>;

export default meta;

const Demo = () => {
  const { addToast } = useToast();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'start' }}>
      <button onClick={() => addToast('Success!', 'success', 3000)}>Show Success Toast</button>
      <button onClick={() => addToast('Success!', 'error', 3000)}>Show Error Toast</button>
      <button onClick={() => addToast('Success!', 'warning', 3000)}>Show Warning Toast</button>
      <button onClick={() => addToast('Success!', 'info', 3000)}>Show Info Toast</button>
    </div>
  );
};

export const InteractiveAllToasts = {
  render: () => (
    <ToastProvider>
      <Demo />
    </ToastProvider>
  ),
};
