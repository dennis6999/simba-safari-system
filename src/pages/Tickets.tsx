
import React from 'react';
import { PageTemplate } from '@/components/layout/PageTemplate';
import { Ticket } from 'lucide-react';

const Tickets = () => {
  return (
    <PageTemplate 
      title="Ticketing System" 
      description="Manage visitor tickets and park admissions"
      icon={<Ticket className="h-6 w-6" />}
    />
  );
};

export default Tickets;
