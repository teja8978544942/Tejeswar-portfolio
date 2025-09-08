import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
        <article>
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">{post.title}</h1>
            <p className="text-muted-foreground text-lg">
              By {post.author} on {new Date(post.date).toLocaleDateString()}
            </p>
          </header>
          <div className="prose prose-lg max-w-none text-muted-foreground whitespace-pre-line">
            {post.content}
          </div>
        </article>
      </div>
    </div>
  );
}
