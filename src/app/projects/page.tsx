import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Project Showcase</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A collection of my work in data analysis, machine learning, and visualization.
        </p>
      </header>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <Image
                src={project.imageUrl}
                alt={project.title}
                data-ai-hint={project.imageHint}
                width={600}
                height={400}
                className="rounded-t-lg aspect-[3/2] object-cover"
              />
              <CardTitle className="pt-4">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                </div>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-muted-foreground line-clamp-3">{project.description}</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full" variant="outline">
                <Link href={`/projects/${project.id}`}>
                  View Details
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
