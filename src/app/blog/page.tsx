import Link from 'next/link';
import { blogPosts } from '@/lib/data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Data & Insights Blog</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Sharing tutorials, discoveries, and thoughts on the world of data.
        </p>
      </header>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {blogPosts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className="block group">
            <Card className="flex flex-col md:flex-row overflow-hidden h-full hover:shadow-xl transition-shadow duration-300">
              <div className="md:w-2/3 flex flex-col">
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">{post.title}</CardTitle>
                  <CardDescription>
                    By {post.author} on {new Date(post.date).toLocaleDateString()}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground line-clamp-3">{post.description}</p>
                </CardContent>
                <CardFooter>
                    <span className="text-sm font-medium text-primary group-hover:underline">
                      Read More &rarr;
                    </span>
                </CardFooter>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
