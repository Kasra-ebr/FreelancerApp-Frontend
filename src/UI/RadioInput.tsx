import React from "react";

interface IRadioInput {
  name: string;
  value: string;
  id: string;
  label: string;
  watch: any;
  register: any;
  validationSchema: any;
}

function RadioInput({
  name,
  value,
  id,
  label,
  validationSchema,
  register,
  watch,
}: IRadioInput) {
  return (
    <div className="flex items-center gap-x-2 text-secondary-600">
      <input
        type="radio"
        name={name}
        value={value}
        id={id}
        {...register(name, validationSchema)}
        className="cursor-pointer w-4 h-4 accent-red-500"
        checked={watch(name) === value}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default RadioInput;
