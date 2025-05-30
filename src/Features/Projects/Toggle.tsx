import { Switch } from '@headlessui/react';
import React from 'react';

interface IToggle {
  label: string;
  enabled: boolean;
  onChange: () => void;
}

function Toggle({ label, enabled, onChange }: IToggle) {
  return (
    <Switch.Group>
      <div className="flex items-center gap-x-2">
        <Switch.Label className="mr-4">{label}</Switch.Label>
        <Switch
          checked={enabled}
          onChange={onChange}
          className={`${
            enabled ? 'bg-blue-900' : 'bg-gray-200'
          } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-offset-2`}
        >
          <span
            className={`${
              enabled ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
          />
        </Switch>
      </div>
    </Switch.Group>
  );
}

export default Toggle;
