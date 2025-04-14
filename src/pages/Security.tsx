
import React from 'react';
import { PageTemplate } from '@/components/layout/PageTemplate';
import { ShieldAlert } from 'lucide-react';

const Security = () => {
  return (
    <PageTemplate 
      title="Security Operations" 
      description="Manage park security and anti-poaching operations"
      icon={<ShieldAlert className="h-6 w-6" />}
    />
  );
};

export default Security;
