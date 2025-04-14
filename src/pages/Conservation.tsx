
import React from 'react';
import { PageTemplate } from '@/components/layout/PageTemplate';
import { Bird } from 'lucide-react';

const Conservation = () => {
  return (
    <PageTemplate 
      title="Conservation Projects" 
      description="Manage and track wildlife conservation initiatives"
      icon={<Bird className="h-6 w-6" />}
    />
  );
};

export default Conservation;
