
import React from 'react';
import { PageTemplate } from '@/components/layout/PageTemplate';
import { UserCog } from 'lucide-react';

const Tasks = () => {
  return (
    <PageTemplate 
      title="Task Management" 
      description="Assign and track staff tasks and responsibilities"
      icon={<UserCog className="h-6 w-6" />}
    />
  );
};

export default Tasks;
