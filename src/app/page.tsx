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
          <h1 className="text-4xl md:text-6xl font-bold mb-2 tracking-tight">
            Tejeswar Nadisetti
          </h1>
          <p className="text-2xl md:text-3xl font-medium text-primary-foreground/90 mb-4">
            Data Analyst
          </p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80 mb-8">
            Transforming data into actionable insights and strategic solutions.
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
          <div className="max-w-4xl mx-auto grid md:grid-cols-1 gap-8 items-center">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  As a Computer Science undergraduate with a passion for data, I am actively pursuing a career in Data Analytics. I am skilled in using Python, SQL, and data visualization tools to clean, analyze, and interpret complex datasets.
                </p>
                <p>
                  I am eager to apply academic knowledge and project experience to uncover actionable insights and contribute to data-driven decision-making in a professional environment. A proactive learner with a strong foundation in statistical analysis.
                </p>
              </div>
              <Button asChild variant="link" className="px-0 mt-4 text-base">
                <Link href="/about">
                  Learn More About My Journey <ArrowRight className="ml-2" />
                </Link>
              </Button>
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
