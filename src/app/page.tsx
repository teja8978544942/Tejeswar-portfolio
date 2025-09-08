import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { projects, skills } from '@/lib/data';
import SkillsChart from '@/components/skills-chart';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <Image
            src="https://picsum.photos/128/128"
            alt="Portrait of the analyst"
            data-ai-hint="professional portrait"
            width={128}
            height={128}
            className="rounded-full mx-auto mb-6 border-4 border-accent"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            DataDive Portfolio
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80 mb-8">
            Leveraging data to uncover insights and drive business solutions. Welcome to my personal collection of data analysis projects.
          </p>
          <Button asChild size="lg">
            <Link href="/projects">
              Explore Projects <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* About Me Snippet */}
      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a passionate data analyst with a knack for transforming complex datasets into actionable insights. My journey into data began with a curiosity for patterns and a drive to solve real-world problems.
                </p>
                <p>
                  With expertise in Python, SQL, and data visualization tools, I enjoy every stage of the data lifecycle—from cleaning and exploration to modeling and storytelling.
                </p>
              </div>
              <Button asChild variant="link" className="px-0 mt-4 text-base">
                <Link href="/about">
                  Learn More About My Journey <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
            <div className="hidden md:block">
              <Image
                src="https://picsum.photos/400/500"
                alt="Working on a laptop"
                data-ai-hint="workspace laptop"
                width={400}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Visualizer */}
      <section id="skills" className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">My Skillset</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A visual representation of my proficiency across various data analysis tools and technologies.
          </p>
          <Card className="max-w-5xl mx-auto">
            <CardHeader>
              <CardTitle>Skills Proficiency</CardTitle>
              <CardDescription>Measured on a scale from 1 to 100.</CardDescription>
            </CardHeader>
            <CardContent>
              <SkillsChart skills={skills} />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">Featured Projects</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Here are some highlights from my portfolio. Check out the projects page for more.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
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
                  <p className="text-muted-foreground">{project.description}</p>
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
      </section>
    </div>
  );
}
