import type { ToastType } from '../../types';
import css from './Toast.module.css';

interface Props {
  message: string;
  type: ToastType;
  duration?: number;
}

const Toast = ({ message, type }: Props) => {
  const icons = {
    success: '✅',
    error: '❌',
    info: 'ℹ️',
    warning: '⚠️',
  };

  return (
    <div className={`${css.toast}  ${css[type]}`}>
      <div className="toastIcon">{icons[type]}</div>
      <p className="toastMessage">{message}</p>
    </div>
  );
};

export default Toast;
