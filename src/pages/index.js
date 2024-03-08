import React from 'react';
import Head from 'next/head';
import { useTheme } from '@/hooks/ThemeContext';
import { useLanguage } from '@/hooks/ThemeContext';
import { ICON } from '@/constants/importImage';
import classNames from 'classnames/bind';
import styles from './landing.module.scss';
import ThemeToggleButton from '@/components/ThemeToggleButton';
import LanguageToggleButton from '@/components/LanguageToggleButton';
import PostListPage from './posts';
import Image from 'next/image';

const cx = classNames.bind(styles);
const { logo } = ICON;

export default function Home() {
  const { theme } = useTheme();
  const { language } = useLanguage();

  return (
    <>
      <Head>
        <title>Dive Into Turmoil</title>
        <meta
          name='description'
          content='Dive into the most disorganized blog ever made.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://google.com/' />
        <meta property='og:title' content='Dive Into Turmoil' />
        <meta
          property='og:description'
          content='Dive into the most disorganized blog ever made.'
        />
        <meta property='og:image' content='https://google.com' />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://google.com/' />
        <meta property='twitter:title' content='Dive Into Turmoil' />
        <meta
          property='twitter:description'
          content='Dive into the most disorganized blog ever made.'
        />
        <meta property='twitter:image' content='https://google.com' />
        <link rel='icon' href='/svg/ic-favicon.svg' />
      </Head>
      <div className={cx('landing', theme)}>
        <div className={cx('profile')}>
          <div className={cx('buttons')}>
            <ThemeToggleButton />
            <LanguageToggleButton />
          </div>
          <Image
            src={theme === 'dark' ? logo.dark.url : logo.light.url}
            alt={theme === 'dark' ? logo.dark.alt : logo.light.alt}
          />
        </div>
        <PostListPage />
      </div>
    </>
  );
}
