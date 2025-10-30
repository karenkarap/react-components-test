import { useState } from 'react';
import './App.css';
import Input from './components/Input/Input';
import { useToast } from './components/Toast/useToast';

function App() {
  const [clearable] = useState(true);
  const { addToast } = useToast();
  const [isOpen, setIsOpen] = useState(false);

  const handleClickMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Input clearable={clearable} type="password" />
      <button onClick={() => addToast('Succes toast!', 'success')}>Click to toast</button>
      <button onClick={handleClickMenu}>Open Modal</button>
      {/* {isModalOpen && <SidebarMenu onClose={handleClickMenu} items={twoLevelItems} />} */}
    </>
  );
}

export default App;
