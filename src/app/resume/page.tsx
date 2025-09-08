import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download } from 'lucide-react';

export default function ResumePage() {
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
            <CardTitle>Download Resume</CardTitle>
            <CardDescription>Click the button below to download the latest version of my resume in PDF format.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-6">
            <div className="p-8 border-dashed border-2 border-muted rounded-lg w-full text-center bg-secondary/50">
              <p className="text-muted-foreground">
                To link your resume, upload your resume PDF to the `/public` folder in your project and update the `href` in the button below. For example: `/your-resume-file.pdf`.
              </p>
            </div>
            <Button asChild size="lg">
              {/* IMPORTANT: Replace this placeholder with the actual path to your resume PDF in the /public folder */}
              <Link href="/Tejeswar_Nadisetti_Resume.pdf" download>
                Download PDF
                <Download className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
