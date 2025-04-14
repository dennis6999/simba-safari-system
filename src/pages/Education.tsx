
import React from 'react';
import { PageTemplate } from '@/components/layout/PageTemplate';
import { BookOpen } from 'lucide-react';

const Education = () => {
  return (
    <PageTemplate 
      title="Education Programs" 
      description="Manage wildlife education and awareness programs"
      icon={<BookOpen className="h-6 w-6" />}
    />
  );
};

export default Education;
