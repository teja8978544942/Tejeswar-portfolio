import { Briefcase, GraduationCap } from 'lucide-react';
import type { ResumeEntry } from '@/lib/data';

type ResumeTimelineProps = {
  items: ResumeEntry[];
};

export default function ResumeTimeline({ items }: ResumeTimelineProps) {
  return (
    <div className="relative border-l-2 border-primary/20 pl-6 space-y-10">
      {items.map((item, index) => (
        <div key={index} className="relative">
          <div className="absolute -left-[35px] top-1.5 h-6 w-6 rounded-full bg-primary flex items-center justify-center">
            {item.company.includes('University') || item.company.includes('State') ? 
                <GraduationCap className="h-4 w-4 text-primary-foreground" /> :
                <Briefcase className="h-4 w-4 text-primary-foreground" />
            }
          </div>
          <p className="text-sm font-medium text-accent">{item.period}</p>
          <h4 className="text-xl font-semibold mt-1">{item.role}</h4>
          <p className="font-medium text-muted-foreground">{item.company}</p>
          <p className="mt-2 text-muted-foreground">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
