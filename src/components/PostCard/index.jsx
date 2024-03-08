import Link from 'next/link';
import React from 'react';
import classNames from 'classnames/bind';
import styles from './PostCard.module.scss';
import { useTheme } from '@/hooks/ThemeContext';

const cx = classNames.bind(styles);

const PostCard = ({ post }) => {
  const { theme } = useTheme();

  const rawMarkup = post.body.raw;

  const stripHtml = (html) => html.replace(/<[^>]*>?/gm, '').replace(/#/g, '');
  const plainText = stripHtml(rawMarkup);

  const fileNameWithoutExtensionAndLang = post._raw.sourceFileName.replace(
    /\.[a-z]{2}\.mdx$/,
    ''
  );

  return (
    <Link href={`posts/${fileNameWithoutExtensionAndLang}`}>
      <div className={cx('card', theme)}>
        <div>
          <h2>{post.title}</h2>
          <p>{plainText}</p>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
