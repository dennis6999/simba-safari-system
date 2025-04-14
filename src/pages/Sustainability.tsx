
import React from 'react';
import { PageTemplate } from '@/components/layout/PageTemplate';
import { Globe } from 'lucide-react';

const Sustainability = () => {
  return (
    <PageTemplate 
      title="Sustainability Initiatives" 
      description="Track and manage environmental sustainability projects"
      icon={<Globe className="h-6 w-6" />}
    />
  );
};

export default Sustainability;
