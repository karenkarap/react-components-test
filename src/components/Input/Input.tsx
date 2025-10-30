import { useState } from 'react';
import { IoEyeOffOutline, IoEyeOutline, IoClose } from 'react-icons/io5';
import css from './Input.module.css';
import type { TypesInput } from '../../types';

interface Props {
  clearable?: boolean;
  type: TypesInput;
}

const Input = ({ clearable, type }: Props) => {
  const [value, setValue] = useState('');
  const [isVisiblePass, setIsVisiblePass] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClickPassword = () => {
    setIsVisiblePass(!isVisiblePass);
  };

  const handleClickDelete = () => {
    setValue('');
  };

  const actualType = type === 'password' && isVisiblePass ? 'text' : type;

  return (
    <section>
      <div className={css.wrapper}>
        <label className={css.inputWrapper}>
          <input
            className={css.input}
            type={actualType}
            value={value}
            onChange={handleChange}
            aria-label={`${actualType} input`}
          />
          {type === 'password' && (
            <button
              className={css.buttonEye}
              onClick={handleClickPassword}
              aria-label="Toggle password visibility"
            >
              {isVisiblePass ? <IoEyeOffOutline /> : <IoEyeOutline />}
            </button>
          )}
        </label>

        {clearable && (
          <button
            className={css.closeBtn}
            onClick={handleClickDelete}
            type="button"
            aria-label="Clear input"
          >
            <IoClose />
          </button>
        )}
      </div>
    </section>
  );
};

export default Input;
