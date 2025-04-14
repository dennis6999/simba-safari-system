
import React from 'react';
import { PageTemplate } from '@/components/layout/PageTemplate';
import { Users } from 'lucide-react';

const Staff = () => {
  return (
    <PageTemplate 
      title="Staff Management" 
      description="Manage park staff, roles, and responsibilities"
      icon={<Users className="h-6 w-6" />}
    />
  );
};

export default Staff;
