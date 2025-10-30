import { useState } from 'react';
import css from './Toast.module.css';
import { ToastContext } from './ToastContext';
import type { ToastIntarface, ToastType } from '../../types';
import Toast from './Toast';

interface ToastProviderProps {
  children: React.ReactNode;
}

const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toasts, setToasts] = useState<ToastIntarface[]>([]);

  const addToast = (message: string, type: ToastType, duration = 3000) => {
    const id = Math.random().toString();
    const newToast = { id, message, type, duration };

    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      removeToast(id);
    }, duration);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toasts, addToast }}>
      {children}
      <div className={css.toastContainer}>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            duration={toast.duration}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export default ToastProvider;
