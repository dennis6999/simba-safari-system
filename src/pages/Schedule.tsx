
import React from 'react';
import { PageTemplate } from '@/components/layout/PageTemplate';
import { Calendar } from 'lucide-react';

const Schedule = () => {
  return (
    <PageTemplate 
      title="Schedule Management" 
      description="Manage park activities and staff schedules"
      icon={<Calendar className="h-6 w-6" />}
    />
  );
};

export default Schedule;
