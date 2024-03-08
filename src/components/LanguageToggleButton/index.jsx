import React, { useState } from 'react';
import { useLanguage } from '@/hooks/ThemeContext';
import classNames from 'classnames/bind';
import styles from './LanguageToggleButton.module.scss';

const cx = classNames.bind(styles);

const LanguageToggleButton = () => {
  const { language, setLanguage } = useLanguage();
  const [isEn, setIsEN] = useState(language === 'en');

  const toggleLanguage = () => {
    setIsEN(!isEn);
    setLanguage(isEn ? 'ko' : 'en');
  };

  return (
    <div className={cx('language-button')} onClick={toggleLanguage}>
      <input
        readOnly
        type='checkbox'
        className={cx('language-button-toggle')}
        checked={!isEn}
      />
      <label className={cx('language-button-label')} htmlFor='language-toggle'>
        <span className={cx('ko', 'word')}>{language === 'en' ? 'EN' : '영'}</span>
        <span className={cx('en', 'word')}>{language === 'en' ? 'KO' : '한'}</span>
      </label>
      <div className={cx('background')}></div>
    </div>
  );
};

export default LanguageToggleButton;
