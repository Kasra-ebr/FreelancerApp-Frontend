import React from 'react';
import RadioInput from './RadioInput';

interface Option {
  label: string;
  value: string;
}

interface RadioInputGroupProps {
  configs: {
    name: string;
    validationSchema?: any;
    options: Option[];
  };
  register: any;
  watch: any;
  errors: Record<string, any>;
}

function RadioInputGroup({ configs, register, watch, errors }: RadioInputGroupProps) {
  const { name, validationSchema = {}, options } = configs;

  return (
    <div>
      <div>
        {options.map(({ label, value }) => (
          <RadioInput
            key={value}
            label={label}
            value={value}
            id={value}
            name={name}
            register={register}
            watch={watch}
            validationSchema={validationSchema}
            errors={errors}
          />
        ))}
      </div>
      {errors && errors[name] && (
        <span className="text-error text-sm mt-2 block">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default RadioInputGroup;
