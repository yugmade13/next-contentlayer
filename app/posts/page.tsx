import Link from 'next/link';
import { allPosts, Post } from 'contentlayer/generated';

export default function Posts() {
  return (
    <section className="mx-auto max-w-xl">
      <h1 className="text-3xl text-center font-bold mt-4">
        Personal Blog Posts
      </h1>
      <div className="mt-8 flex flex-col gap-y-4">
        {allPosts.map((post: Post) => (
          <Link href={post.url}>
            <h2 className="text-lg font-bold">
              {post.title}
            </h2>
            <p className="text-base text-gray-500">
              {post.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
} 