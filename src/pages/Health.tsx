
import React from 'react';
import { PageTemplate } from '@/components/layout/PageTemplate';
import { HeartPulse } from 'lucide-react';

const Health = () => {
  return (
    <PageTemplate 
      title="Health Tracking" 
      description="Monitor and manage animal health records and treatments"
      icon={<HeartPulse className="h-6 w-6" />}
    />
  );
};

export default Health;
