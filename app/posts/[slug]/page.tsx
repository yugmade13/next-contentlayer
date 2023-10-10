import { allPosts, Post } from 'contentlayer/generated';

export const generateStaticParams = async () => allPosts.map((post: Post) => ({ slug: post._raw.flattenedPath }));

export default function Post({ params }: { params: { slug: string } }) {
  const post: Post | undefined = allPosts.find((post: Post) => post._raw.flattenedPath === params.slug);

  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)

  return (
    <section className="mx-auto max-w-xl">
      <h1 className="text-2xl text-center font-bold mt-8">
        {post.title}
      </h1>
      <p className="text-base text-gray-500 text-center">
        {post.description}
      </p>
      <p className="text-xs text-gray-400 text-center">
        {`By ${post.author}`}
      </p>
      <div className="mt-8" dangerouslySetInnerHTML={{ __html: post.body.html }} />
    </section>
  );
}