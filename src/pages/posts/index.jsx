import React, { useState, useEffect } from 'react';
import PostCard from '@/components/PostCard';
import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import { useLanguage } from '@/hooks/ThemeContext';
import classNames from 'classnames/bind';
import styles from './PostListPage.module.scss';

const cx = classNames.bind(styles);

const PostListPage = () => {
  const { language } = useLanguage();
  const ALL_CATEGORIES = {
    ko: '전체',
    en: 'All',
  };
  const [selectedCategory, setSelectedCategory] = useState(ALL_CATEGORIES[language]);
  const [selectedSubCategory, setSelectedSubCategory] = useState(
    ALL_CATEGORIES[language]
  );
  const [postList, setPostList] = useState([]);

  const categories =
    language === 'ko' ? ['일상', '코딩', '공부'] : ['Daily', 'Coding', 'Study'];
  const subCategories =
    language === 'ko'
      ? {
          일상: ['취미', '여행'],
          코딩: ['리액트', 'Next.js'],
          공부: ['자바스크립트', 'CSS'],
        }
      : {
          Daily: ['Hobby', 'Travel'],
          Coding: ['React', 'Next.js'],
          Study: ['JavaScript', 'CSS'],
        };

  useEffect(() => {
    setSelectedCategory(ALL_CATEGORIES[language]);
    setSelectedSubCategory(ALL_CATEGORIES[language]);
  }, [language]);

  useEffect(() => {
    filterPosts();
  }, [selectedCategory, selectedSubCategory, language]);

  const filterPosts = () => {
    let filteredPosts = allPosts;

    filteredPosts = filteredPosts.filter((post) => post.language === language);

    if (selectedCategory !== ALL_CATEGORIES[language]) {
      filteredPosts = filteredPosts.filter((post) => post.category === selectedCategory);
    }

    if (
      selectedSubCategory !== ALL_CATEGORIES[language] &&
      selectedCategory !== ALL_CATEGORIES[language]
    ) {
      filteredPosts = filteredPosts.filter(
        (post) => post.subCategory === selectedSubCategory
      );
    }

    filteredPosts = filteredPosts.sort((a, b) =>
      compareDesc(new Date(a.date), new Date(b.date))
    );

    setPostList(filteredPosts);
  };
  return (
    <div className={cx('list')}>
      <div className={cx('category')}>
        <div>
          <p>{language === 'ko' ? '카테고리' : 'Category'}</p>
          <ul>
            {[ALL_CATEGORIES[language], ...categories].map((category, index) => (
              <li
                key={index}
                onClick={() => {
                  setSelectedCategory(category);
                  setSelectedSubCategory(ALL_CATEGORIES[language]);
                }}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
        {selectedCategory !== ALL_CATEGORIES[language] && (
          <div>
            <p>{language === 'ko' ? '하위 카테고리' : 'Sub Category'}</p>
            <ul>
              {[ALL_CATEGORIES[language], ...(subCategories[selectedCategory] || [])].map(
                (subCategory, index) => (
                  <li key={index} onClick={() => setSelectedSubCategory(subCategory)}>
                    {subCategory}
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
      <div className={cx('cards')}>
        {postList.map((post, index) => (
          <PostCard key={`key-${index}`} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostListPage;
