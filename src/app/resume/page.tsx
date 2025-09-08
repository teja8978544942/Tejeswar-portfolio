import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download } from 'lucide-react';

export default function ResumePage() {
  const resumeUrl = "https://drive.google.com/file/d/1yYt_iYAwDoIWxx1L7iarm4NrGUvAECU6/view?usp=sharing";

  return (
    <div className="container mx-auto px-4 py-16">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">My Resume</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Here you can view and download my professional resume.
        </p>
      </header>
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>View & Download Resume</CardTitle>
            <CardDescription>Click the button below to open my resume. You can view it or download it from there.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-6">
            <Button asChild size="lg">
              <Link href={resumeUrl} target="_blank" rel="noopener noreferrer">
                View Resume
                <Download className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
