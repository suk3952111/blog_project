import { allPosts } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { useRouter } from 'next/router';
import { useLanguage } from '@/hooks/ThemeContext';

const getPostBySlugAndLanguage = (slug, language) => {
  const postSlugWithLanguage = `${slug}.${language}`;
  return allPosts.find((post) => post._raw.flattenedPath.includes(postSlugWithLanguage));
};

const PostPage = () => {
  const { language } = useLanguage();
  const router = useRouter();
  const { slug } = router.query;

  const post = getPostBySlugAndLanguage(slug, language);

  if (!post) {
    return <div>포스트를 찾을 수 없습니다.</div>;
  }

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <div>
      <MDXContent />
    </div>
  );
};

export default PostPage;
