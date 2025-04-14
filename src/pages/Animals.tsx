
import React from 'react';
import { PageTemplate } from '@/components/layout/PageTemplate';
import { PawPrint } from 'lucide-react';

const Animals = () => {
  return (
    <PageTemplate 
      title="Animals Management" 
      description="Manage and track all animals in the wildlife service"
      icon={<PawPrint className="h-6 w-6" />}
    />
  );
};

export default Animals;
