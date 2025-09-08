import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { projects } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

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

  const hasLiveDemo = project.id === 'store-performance-forecast';
  const liveDemoUrl = 'https://teja8978544942-store-site-app-kumlnu.streamlit.app/';
  const hasGithubLink = project.id === 'telco-customer-churn';
  const githubUrl = 'https://github.com/teja8978544942/telco-customer-churn-analysis';


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
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </header>
          
          <div className="prose prose-lg max-w-none text-muted-foreground whitespace-pre-line mb-12">
            {project.longDescription}
          </div>

          {project.id === 'telco-customer-churn' && (
             <section id="visuals" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Comprehensive Customer Churn and Tenure Analysis Visualizations</h2>
              <div className="flex justify-center">
                <Card className="w-full">
                  <CardContent className="pt-6">
                    <Image src="https://i.postimg.cc/JhsqpXQq/Screenshot-2025-09-08-112459.png" alt="Dashboard showing various churn analysis charts" width={800} height={600} className="rounded-md w-full" data-ai-hint="dashboard analytics" />
                    <p className="text-sm text-muted-foreground mt-2 text-center">A comprehensive dashboard visualizing key factors influencing customer churn, including contract types, tenure, and payment methods.</p>
                  </CardContent>
                </Card>
              </div>
            </section>
          )}

          <div className="mb-12">
             <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl font-bold">Code Snippet</h2>
                <div className="flex gap-2">
                    {hasLiveDemo && (
                        <Button variant="outline" asChild>
                            <Link href={liveDemoUrl} target="_blank">
                                View Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    )}
                    {hasGithubLink && (
                        <Button variant="outline" asChild>
                            <Link href={githubUrl} target="_blank">
                                View on GitHub <Github className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    )}
                </div>
            </div>
            <pre className="p-4 rounded-lg bg-secondary overflow-x-auto">
              <code>{project.codeSnippet}</code>
            </pre>
          </div>
        </article>
      </div>
    </div>
  );
}
