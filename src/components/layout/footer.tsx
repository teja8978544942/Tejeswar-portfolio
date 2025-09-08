import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';
import { Logo } from '@/components/icons';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Logo className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg font-headline">DataDive</span>
          </div>
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} DataDive Portfolio. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com" target="_blank" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
