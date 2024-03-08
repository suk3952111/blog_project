import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'pages/posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');

    // 여기서는 파일명을 제외한 확장자만 추출합니다.
    const slug = filename.replace(/\.mdx$/, '');

    // 파일 내용 중 메타데이터를 추출하는 로직을 추가할 수 있습니다.
    // 예: frontmatter 파싱

    return {
      slug,
      content: fileContents,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default function Posts({ posts }) {
  return (
    <div>
      <h1>게시판</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              <a>{post.slug}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
