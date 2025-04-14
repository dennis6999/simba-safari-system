
import React from 'react';
import { PageTemplate } from '@/components/layout/PageTemplate';
import { Map } from 'lucide-react';

const Tracking = () => {
  return (
    <PageTemplate 
      title="Tracking Map" 
      description="Real-time location tracking for monitored wildlife"
      icon={<Map className="h-6 w-6" />}
    />
  );
};

export default Tracking;
