import { useFormContext } from "react-hook-form";
import { FormData } from "../../pages/multi-form/form-type";

export default function ContactDetails() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <div className="space-y-4 py-5">
      <div className="space-y-2">
        <label htmlFor="phone" className="block">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            {" "}
            Phone Number
          </span>
          <input
            id="phone"
            {...register("phone", {
              required: "Phone is required",
              pattern: {
                value: /^[0-9\b]+$/,
                message: "Invalid phone number",
              },
            })}
            type="number"
            name="phone"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Enter your phone number"
          />
        </label>
        {errors.phone && (
          <p className="text-sm text-red-500">{errors.phone.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="address" className="block">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            {" "}
            Address
          </span>
          <input
            id="address"
            {...register("address", {
              required: "Address is required",
            })}
            type="text"
            name="address"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Enter your address"
          />
        </label>
        {errors.address && (
          <p className="text-sm text-red-500">{errors.address.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="city" className="block">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            {" "}
            City
          </span>
          <input
            id="city"
            {...register("city", {
              required: "City is required",
            })}
            type="text"
            name="city"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Enter your city"
          />
        </label>

        {errors.city && (
          <p className="text-sm text-red-500">{errors.city.message}</p>
        )}
      </div>
    </div>
  );
}
