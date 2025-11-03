import { create } from 'zustand';
import type { ToastIntarface } from '../../types';

type ToastsStore = {
  toasts: ToastIntarface[];
  addToast: (toast: ToastIntarface) => void;
  deleteToast: (id: string) => void;
};

export const useZusToast = create<ToastsStore>()((set) => ({
  toasts: [],

  addToast: (toast) => {
    const id = Math.random().toString();

    return set((state) => {
      const data = {
        toasts: [...state.toasts, { ...toast, id }],
      };

      setTimeout(() => {
        useZusToast.getState().deleteToast(id);
      }, toast.duration || 3000);

      return data;
    });
  },

  deleteToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    })),
}));
