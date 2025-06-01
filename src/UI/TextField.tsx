import React from "react";

interface ITextField {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  register: any;
  validationSchema: any;
  errors?: Record<string, any>;
}

const TextField: React.FC<ITextField> = ({
  name,
  label,
  register,
  validationSchema,
  type = "text",
  required = false,
  errors = {},
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label} {required && <span className="text-error">*</span>}
      </label>
      <input
        {...register(name, validationSchema)}
        id={name}
        type={type}
        className="textField__input"
        autoComplete="off"
      />
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2">
          {errors[name]?.message || "Invalid input"}
        </span>
      )}
    </div>
  );
};

export default TextField;
