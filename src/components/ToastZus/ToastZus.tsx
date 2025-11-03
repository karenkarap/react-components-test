import { useZusToast } from './toastsStore';
import css from './ToastZus.module.css';

const icons = {
  success: '✅',
  error: '❌',
  info: 'ℹ️',
  warning: '⚠️',
};

const ToastZus = () => {
  const { toasts } = useZusToast();

  return (
    <div className={css.toastContainer}>
      {toasts.map((toast) => (
        <div key={toast.id} className={`${css.toast}  ${css[toast.type]}`}>
          <div className={css.toastIcon}>{icons[toast.type]}</div>
          <p className={css.toastMessage}>{toast.message}</p>
        </div>
      ))}
    </div>
  );
};

export default ToastZus;
