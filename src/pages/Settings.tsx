
import React from 'react';
import { PageTemplate } from '@/components/layout/PageTemplate';
import { Settings as SettingsIcon } from 'lucide-react';

const Settings = () => {
  return (
    <PageTemplate 
      title="System Settings" 
      description="Configure system preferences and settings"
      icon={<SettingsIcon className="h-6 w-6" />}
    />
  );
};

export default Settings;
