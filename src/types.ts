export type TypesInput = 'text' | 'password' | 'number';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface ToastIntarface {
  id?: string;
  message: string;
  type: ToastType;
  duration?: number;
}

export interface ToastContextType {
  toasts: ToastIntarface[];
  addToast: (message: string, type: ToastType, duration?: number) => void;
  removeToast?: (id: string) => void;
}
