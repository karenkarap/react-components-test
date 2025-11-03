import { useState } from 'react';
import './App.css';
import Input from './components/Input/Input';
import { useToast } from './components/Toast/useToast';
import { useZusToast } from './components/ToastZus/toastsStore';
import ToastZus from './components/ToastZus/ToastZus';
import SidebarMenu from './components/SidebarMenu/SidebarMenu';

const itemsMenu = [
  { id: 1, label: 'Home' },
  {
    id: 2,
    label: 'About us',
    children: [
      { id: 4, label: 'Who we are ?' },
      { id: 5, label: 'Who You are ?' },
    ],
  },
  { id: 3, label: 'Feedback' },
];

function App() {
  const [clearable] = useState(true);
  const { addToast: addToastContext } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const { addToast: addToastZus } = useZusToast();

  const handleClickMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleZustandToast = () => {
    addToastZus({
      message: 'It is toast from Zustand!',
      type: 'success',
    });
  };

  const handleContextToast = () => {
    addToastContext('It is toast from Context', 'success');
  };

  return (
    <>
      <Input clearable={clearable} type="password" />
      <button onClick={handleContextToast}>Click to Context toast</button>
      <br />
      <br />
      <button onClick={handleZustandToast}>Click to Zustand Toast</button>
      <br />
      <br />
      <button onClick={handleClickMenu}>Open Modal</button>
      {isOpen && <SidebarMenu onClose={handleClickMenu} items={itemsMenu} />}
      <ToastZus />
    </>
  );
}

export default App;
