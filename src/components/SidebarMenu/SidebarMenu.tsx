import { useState } from 'react';
import css from './SidebarMenu.module.css';

export interface MenuItem {
  id: number;
  label: string;
  children?: MenuItem[];
}

interface Props {
  onClose: () => void;
  items: MenuItem[];
}

const SidebarMenu = ({ onClose, items }: Props) => {
  const [isOpenAccardeon, setIsOpenAccardeon] = useState(false);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleClickAccardeon = () => {
    setIsOpenAccardeon(!isOpenAccardeon);
  };

  return (
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.menu}>
        <nav>
          <ul className={css.navList}>
            {items.map((item) => (
              <li key={item.id}>
                {item.children ? (
                  <>
                    <div className={css.menuItem} onClick={handleClickAccardeon}>
                      {item.label}
                    </div>

                    {isOpenAccardeon && (
                      <ul className={css.submenu}>
                        {item.children.map((sub) => (
                          <li key={sub.id} className={css.submenuItem}>
                            {sub.label}
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <p className={css.menuItem}>{item.label}</p>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SidebarMenu;
