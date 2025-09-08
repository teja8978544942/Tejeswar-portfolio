import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { projects } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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

  const hasLiveDemo = project.id === 'store-performance-forecast' || project.id === 'telco-customer-churn';
  const liveDemoUrl = project.id === 'store-performance-forecast' 
    ? 'https://teja8978544942-store-site-app-kumlnu.streamlit.app/' 
    : project.id === 'telco-customer-churn' 
    ? '#-your-live-demo-link-here' // Placeholder for when Telco demo is ready
    : '';


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
              <h2 className="text-3xl font-bold mb-6">Visual Insights</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Churn by Contract Type</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Image src="https://picsum.photos/600/400" alt="Chart showing customer churn by contract type" width={600} height={400} className="rounded-md" data-ai-hint="bar chart" />
                    <p className="text-sm text-muted-foreground mt-2">Customers on month-to-month contracts show a higher churn rate.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Feature Importance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Image src="https://picsum.photos/600/401" alt="Chart showing model feature importance" width={600} height={401} className="rounded-md" data-ai-hint="feature importance" />
                    <p className="text-sm text-muted-foreground mt-2">The model identified contract type and tenure as the most predictive features.</p>
                  </CardContent>
                </Card>
              </div>
            </section>
          )}

          <div className="mb-12">
             <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl font-bold">Code Snippet</h2>
                {hasLiveDemo && (
                    <Button variant="outline" asChild>
                        <Link href={liveDemoUrl} target="_blank">
                            View Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                )}
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
