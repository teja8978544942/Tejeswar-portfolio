'use client';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import type { Skill } from '@/lib/data';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltipContent,
} from '@/components/ui/chart';

type SkillsChartProps = {
  skills: Skill[];
};

const chartConfig = {
  level: {
    label: 'Proficiency',
    color: 'hsl(var(--primary))',
  },
} satisfies ChartConfig;

export default function SkillsChart({ skills }: SkillsChartProps) {
  return (
    <div className="h-[400px] w-full">
      <ChartContainer config={chartConfig} className="w-full h-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={skills} layout="vertical" margin={{ left: 20, right: 20 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis type="number" hide />
            <YAxis
              dataKey="name"
              type="category"
              tickLine={false}
              axisLine={false}
              tick={{ fill: 'hsl(var(--foreground))', fontSize: 14 }}
              width={120}
            />
            <Tooltip
              cursor={{ fill: 'hsl(var(--accent) / 0.2)' }}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Bar dataKey="level" fill="var(--color-level)" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
}
