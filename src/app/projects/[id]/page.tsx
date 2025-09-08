import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

type ProjectPageProps = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
        <article>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-sm">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-xl leading-relaxed">{project.longDescription}</p>
          </div>

          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-4">Code Snippet</h2>
            <pre>
              <code>{project.codeSnippet}</code>
            </pre>
          </div>
        </article>
      </div>
    </div>
  );
}
