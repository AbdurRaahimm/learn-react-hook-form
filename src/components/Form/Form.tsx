import {
  UseFormRegister,
  FieldValues,
  Path,
  FormState,
} from "react-hook-form";

export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "password" | "select" | "checkbox";
  placeholder?: string;
  required?: boolean;
  options?: string[];
  className?: string;
  disabled?: boolean;
}

interface FormProps<T extends FieldValues> {
  formData: FormField[];
  register: UseFormRegister<T>;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  // control?: Control<T>;
  // errors: FieldErrors<T>;
  getValues: () => T;
  formState: FormState<T>;
}

export default function Form<T extends FieldValues>({
  formData,
  register,
  onSubmit,
  // control,
  // errors,
  getValues,
  formState:{isSubmitting, errors}
}: FormProps<T>) {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {formData.map((field, index) => {
            switch (field.type) {
              case "email":
                return (
                  <div key={index} className={field.className}>
                    <label className="block">
                      <span className={`${field.required ? "after:content-['*'] after:ml-0.5 after:text-red-500" : ""} block text-sm font-medium text-slate-700`}>
                        {field.label}
                      </span>
                      <input
                        {...register(field.name as Path<T>, {
                          required:
                            field.required && `${field.name} is required`,
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Please enter a valid email address",
                          },
                        })}
                        type={field.type}
                        name={field.name}
                        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        placeholder={field.placeholder}
                      />
                    </label>
                    {errors[field.name] && (
                      <span className="text-red-500">
                        {errors[field.name]?.message as string}
                      </span>
                    )}
                  </div>
                );
              case "password":
                return (
                  <div key={index} className={field.className}>
                    <label className="block">
                      <span className={`${field.required ? "after:content-['*'] after:ml-0.5 after:text-red-500" : ""} block text-sm font-medium text-slate-700`}>
                        {field.label}
                      </span>
                      <input
                        {...register(field.name as Path<T>, {
                          required:
                            field.required && `${field.name} is required`,
                          pattern:
                            field.name === "confirmPassword"
                              ? undefined
                              : {
                                  value:
                                    /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/,
                                  message:
                                    "Password must contain at least 8 characters, including letters and numbers",
                                },
                          ...(field.name === "confirmPassword" && {
                            validate: (value) => {
                              const password = getValues().password;
                              return (
                                value === password || "Passwords do not match"
                              );
                            },
                          }),
                        })}
                        type={field.type}
                        name={field.name}
                        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        placeholder={field.placeholder}
                      />
                    </label>
                    {errors[field.name] && (
                      <span className="text-red-500">
                        {errors[field.name]?.message as string}
                      </span>
                    )}
                  </div>
                );
              case "select":
                return (
                  <div key={index} className={field.className}>
                    <label className="block">
                      <span className={`${field.required ? "after:content-['*'] after:ml-0.5 after:text-red-500" : ""} block text-sm font-medium text-slate-700`}>
                        Occupation
                      </span>
                      <select
                        {...register(field.name as Path<T>, {
                          required: "Occupation is required",
                        })}
                        name={field.name}
                        id={field.name}
                        className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                      >
                        <option value="">Select your occupation</option>
                        {field.options?.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </label>
                    {errors[field.name] && (
                      <span className="text-red-500">
                        {errors[field.name]?.message as string}
                      </span>
                    )}
                  </div>
                );
              default:
                if (field.type === "text") {
                  return (
                    <div key={index} className={field.className}>
                      <label className="block">
                        <span className={`${field.required ? "after:content-['*'] after:ml-0.5 after:text-red-500" : ""} block text-sm font-medium text-slate-700`}>
                          {field.label}
                        </span>
                        <input
                        // disabled={field.disabled}
                          {...register(field.name as Path<T>, {
                            required:
                              field.required && `${field.name} is required`,
                            minLength: {
                              value: 3,
                              message: `${field.name} Minimum 3 characters`,
                            },
                          })}
                          type={field.type}
                          name={field.name}
                          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                          placeholder={field.placeholder}
                        />
                      </label>
                      {errors[field.name] && (
                        <span className="text-red-500">
                          {errors[field.name]?.message as string}
                        </span>
                      )}
                    </div>
                  );
                }
            }
          })}
        </div>

        <div className="mt-5 space-x-3">
          <button
            type="reset"
            className="border px-5 py-1 rounded-sm font-medium capitalize cursor-pointer"
          >
            clear
          </button>
          <button
            type="submit"
            className="border border-black px-5 py-1 rounded-sm font-medium capitalize bg-black text-white cursor-pointer"
          >
            {/* {isSubmitting ? "Loading..." : formData.some(field => field.name === "username") ? "Sign up" : "Sign in"} */}
            {isSubmitting ? "Loading...":"Submit" }
          </button>
        </div>
      </form>
    </div>
  );
}
