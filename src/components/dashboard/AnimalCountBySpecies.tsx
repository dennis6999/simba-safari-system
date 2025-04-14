
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, TooltipProps } from 'recharts';
import { BadgeCheck, PawPrint } from 'lucide-react';
import { DashboardCard } from './DashboardCard';
import { cn } from '@/lib/utils';

interface SpeciesCount {
  name: string;
  count: number;
  endangered: boolean;
}

interface AnimalCountBySpeciesProps {
  data: SpeciesCount[];
  className?: string;
}

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload as SpeciesCount;
    
    return (
      <div className="rounded-lg border bg-background p-2 shadow-sm">
        <div className="flex flex-col">
          <div className="flex items-center">
            <span className="text-sm font-bold">{data.name}</span>
            {data.endangered && (
              <BadgeCheck className="h-4 w-4 ml-1 text-amber-500" />
            )}
          </div>
          <span className="text-xs text-muted-foreground">
            {data.endangered ? "Endangered Species" : "Species"}
          </span>
        </div>
        <div className="mt-1">
          <span className="text-sm font-bold">{data.count} animals</span>
        </div>
      </div>
    );
  }

  return null;
};

export const AnimalCountBySpecies = ({
  data,
  className,
}: AnimalCountBySpeciesProps) => {
  return (
    <DashboardCard
      title="Species Distribution"
      description="Animal count by species"
      icon={<PawPrint />}
      className={cn("col-span-2", className)}
    >
      <div className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 5,
              left: 5,
              bottom: 5,
            }}
          >
            <XAxis 
              dataKey="name" 
              tick={{ fontSize: 12 }} 
              tickLine={{ stroke: '#8884' }}
              axisLine={{ stroke: '#8884' }}
            />
            <YAxis 
              tick={{ fontSize: 12 }} 
              tickLine={{ stroke: '#8884' }}
              axisLine={{ stroke: '#8884' }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="count" 
              fill="hsl(var(--primary))"
              // Using a proper formatter function that returns a string value
              fillOpacity={({ endangered }) => endangered ? 1 : 0.8}
              stroke={({ endangered }) => endangered ? 'hsl(var(--accent))' : 'hsl(var(--primary))'}
              strokeWidth={({ endangered }) => endangered ? 2 : 0}
              radius={[4, 4, 0, 0]} 
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="h-3 w-3 rounded-full bg-primary"></div>
          <span className="text-xs">Normal Species</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="h-3 w-3 rounded-full bg-accent"></div>
          <span className="text-xs">Endangered Species</span>
        </div>
        <div className="text-xs text-muted-foreground">
          Total: {data.reduce((sum, item) => sum + item.count, 0)} animals
        </div>
      </div>
    </DashboardCard>
  );
};
