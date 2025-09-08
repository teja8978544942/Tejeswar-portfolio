import Image from 'next/image';
import { skills, resume, education } from '@/lib/data';
import SkillsChart from '@/components/skills-chart';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ResumeTimeline from '@/components/resume-timeline';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <header className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">My Professional Journey</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          From a curious student to a dedicated data professional, here's the story of my passion for data.
        </p>
      </header>

      {/* Detailed About Me */}
      <section className="mb-16">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <Image
              src="https://picsum.photos/500/600"
              alt="Portrait of the analyst"
              data-ai-hint="professional portrait"
              width={500}
              height={600}
              className="rounded-lg shadow-2xl object-cover aspect-[4/5]"
            />
          </div>
          <div className="md:col-span-3">
            <h2 className="text-3xl font-bold mb-6">Who I Am</h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                My name is Jane Doe, and I am a data analyst driven by a mission to turn raw data into strategic assets. My fascination with data science began during my computer science studies, where I discovered the power of algorithms to uncover hidden patterns in large datasets. This led me to pursue a Master's degree in Data Science, where I honed my skills in statistical analysis, machine learning, and data visualization.
              </p>
              <p>
                Professionally, I thrive in collaborative environments where I can work with cross-functional teams to tackle complex business problems. Whether it's optimizing marketing spend, forecasting sales, or improving operational efficiency, I am committed to delivering data-driven solutions that create tangible value.
              </p>
              <p>
                Outside of work, I'm an avid reader, a lifelong learner, and I enjoy contributing to open-source data science projects. I believe that continuous learning is key to staying sharp in this ever-evolving field.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Resume */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-center mb-12">Interactive Resume</h2>
        <div className="grid md:grid-cols-2 gap-12">
            <div>
                <h3 className="text-2xl font-semibold mb-6">Work Experience</h3>
                <ResumeTimeline items={resume} />
            </div>
            <div>
                <h3 className="text-2xl font-semibold mb-6">Education</h3>
                <ResumeTimeline items={education} />
            </div>
        </div>
      </section>

      {/* Skills Visualizer */}
      <section>
        <h2 className="text-4xl font-bold text-center mb-12">Skills proficiency</h2>
        <Card className="max-w-5xl mx-auto">
            <CardHeader>
                <CardTitle>Technical Skillset</CardTitle>
                <CardDescription>A visualization of my core competencies in data analysis.</CardDescription>
            </CardHeader>
            <CardContent>
                <SkillsChart skills={skills} />
            </CardContent>
        </Card>
      </section>
    </div>
  );
}
