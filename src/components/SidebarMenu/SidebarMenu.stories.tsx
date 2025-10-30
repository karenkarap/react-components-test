import { useState } from 'react';
import SidebarMenu, { type MenuItem } from './SidebarMenu';
import type { Meta } from '@storybook/react-vite';

const meta = {
  title: 'Navigation/SidebarMenu',
  component: SidebarMenu,
} satisfies Meta<typeof SidebarMenu>;

export default meta;

const oneLevelItems: MenuItem[] = [
  { id: 1, label: 'Home' },
  { id: 2, label: 'About' },
  { id: 3, label: 'Contact' },
];

const twoLevelItems: MenuItem[] = [
  { id: 1, label: 'Home' },
  {
    id: 2,
    label: 'Services',
    children: [
      { id: 21, label: 'Design' },
      { id: 22, label: 'Development' },
    ],
  },
  { id: 3, label: 'Contact' },
];

export const OneLevel = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle Menu</button>
      {isOpen && <SidebarMenu items={oneLevelItems} onClose={() => setIsOpen(!isOpen)} />}
    </>
  );
};

export const TwoLevels = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle Menu</button>
      {isOpen && <SidebarMenu items={twoLevelItems} onClose={() => setIsOpen(!isOpen)} />}
    </>
  );
};
