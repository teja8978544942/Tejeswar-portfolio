'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block font-headline">
              Tejeswar
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className={cn(
                  'transition-colors hover:text-primary',
                  pathname === href ? 'text-primary' : 'text-muted-foreground'
                )}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
        
        {/* Mobile Menu */}
        <div className="md:hidden">
           <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between border-b pb-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <Logo className="h-6 w-6 text-primary" />
                            <span className="font-bold font-headline">Tejeswar</span>
                        </Link>
                    </div>
                    <nav className="flex flex-col space-y-4 mt-6">
                        {navLinks.map(({ href, label }) => (
                            <SheetClose asChild key={label}>
                                <Link
                                    href={href}
                                    className={cn(
                                    'text-lg',
                                    pathname === href ? 'text-primary font-semibold' : 'text-muted-foreground'
                                    )}
                                >
                                    {label}
                                </Link>
                            </SheetClose>
                        ))}
                    </nav>
                </div>
            </SheetContent>
           </Sheet>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          {/* Right side content, if any */}
        </div>
      </div>
    </header>
  );
}
