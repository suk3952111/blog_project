import React, { useState } from 'react';
import { useTheme } from '@/hooks/ThemeContext';
import classNames from 'classnames/bind';
import styles from './ThemeToggleButton.module.scss';
import { FaRegMoon } from 'react-icons/fa';
import { LuSun } from 'react-icons/lu';

const cx = classNames.bind(styles);

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();
  const [isSun, setIsSun] = useState(theme === 'light');

  const toggleTheme = () => {
    setIsSun(!isSun);
    setTheme(isSun ? 'dark' : 'light');
  };

  return (
    <div className={cx('darkmode-button')} onClick={toggleTheme}>
      <input
        readOnly
        type='checkbox'
        className={cx('darkmode-button-toggle')}
        checked={!isSun}
      />
      <label className={cx('darkmode-button-label')} htmlFor='darkmode-toggle'>
        <LuSun size={30} className={cx('sun', 'svg')} />
        <FaRegMoon size={30} className={cx('moon', 'svg')} />
      </label>
      <div className={cx('background')}></div>
    </div>
  );
};

export default ThemeToggleButton;
