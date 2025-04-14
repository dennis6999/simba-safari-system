
import React from 'react';
import { PageTemplate } from '@/components/layout/PageTemplate';
import { LineChart } from 'lucide-react';

const Reports = () => {
  return (
    <PageTemplate 
      title="Analytics & Reports" 
      description="View and generate reports and analytics"
      icon={<LineChart className="h-6 w-6" />}
    />
  );
};

export default Reports;
