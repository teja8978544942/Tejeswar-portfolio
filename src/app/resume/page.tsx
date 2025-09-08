import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, ArrowLeft } from 'lucide-react';

export default function ResumePage() {
  const resumeUrl = "https://drive.google.com/file/d/1yYt_iYAwDoIWxx1L7iarm4NrGUvAECU6/view?usp=sharing";

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/about">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to About
          </Link>
        </Button>
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">My Resume</h1>
          <p className="text-xl text-muted-foreground">
            Here you can view and download my professional resume.
          </p>
        </header>
        <div className="flex justify-center">
            <div className="w-full max-w-4xl p-4 border rounded-lg shadow-lg bg-card">
                 <iframe
                    src="https://docs.google.com/gview?url=https://drive.google.com/uc?id=1yYt_iYAwDoIWxx1L7iarm4NrGUvAECU6&embedded=true"
                    className="w-full h-[600px]"
                    frameBorder="0"
                ></iframe>
                <div className="mt-8 text-center">
                    <Button asChild size="lg">
                        <Link href={resumeUrl} target="_blank" rel="noopener noreferrer">
                        Download PDF <Download className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
