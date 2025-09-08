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
        <div className="grid md:grid-cols-1 gap-12 items-center">
          <div className="md:col-span-3">
            <h2 className="text-3xl font-bold mb-6">Who I Am</h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                My name is Tejeswar Nadisetti. As a Computer Science undergraduate with a passion for data, I am actively pursuing a career in Data Analytics. I am skilled in using Python, SQL, and data visualization tools to clean, analyze, and interpret complex datasets.
              </p>
              <p>
                I am eager to apply academic knowledge and project experience to uncover actionable insights and contribute to data-driven decision-making in a professional environment. As a proactive learner with a strong foundation in statistical analysis, I am seeking an opportunity to add value as a Data Analyst.
              </p>
              <p>
                Outside of my academic and professional pursuits, I'm an avid reader, a lifelong learner, and I enjoy exploring new technologies and contributing to open-source projects.
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
                <h3 className="text-2xl font-semibold mb-6">Certifications & Internships</h3>
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
