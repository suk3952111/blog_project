import { allPosts } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { useRouter } from 'next/router';

const getSinglePost = (slug) => {
  const singlePost = allPosts.find((post) => post._raw.flattenedPath === slug);
  return singlePost;
};

const PostPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const singlePost = getSinglePost(slug);

  if (!singlePost) {
    return <div>포스트를 찾을 수 없습니다.</div>;
  }

  const MDXContent = useMDXComponent(singlePost.body.code);
  return (
    <div>
      <h1>{singlePost.title}</h1>
      <MDXContent />
    </div>
  );
};

export default PostPage;
