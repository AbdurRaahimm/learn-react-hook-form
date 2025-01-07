import { useForm } from "react-hook-form";

interface CountryOption {
  value: string;
  label: string;
}

interface DivisionOption {
  [key: string]: CountryOption[];
}

const countryOptions: CountryOption[] = [
  { value: "USA", label: "United States" },
  { value: "Canada", label: "Canada" },
  { value: "UK", label: "United Kingdom" },
  // ... more countries
];

const divisionOptions: DivisionOption = {
  USA: [
    { value: "AL", label: "Alabama" },
    { value: "AK", label: "Alaska" },
    // ... US states
  ],
  Canada: [
    { value: "ON", label: "Ontario" },
    { value: "QC", label: "Quebec" },
    // ... Canadian provinces
  ],
  UK: [
    { value: "ENG", label: "England" },
    { value: "SCT", label: "Scotland" },
    // ... UK regions
  ],
};

const ConditionForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      country: "",
      division: "",
    },
  });

  const selectedCountry = watch("country");

  const onSubmit = (data: { country: string; division: string }) =>
    console.log(data);

  return (
   <div className="max-w-2xl mx-auto">
    <h1 className="text-3xl font-bold mb-8">Select Your Location </h1>
     <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="country">Country:</label>
        <select className=" border border-gray-300 rounded-md p-2 mt-1 w-full"
        {...register("country", { required: "Country is required" })}
        >
          <option value="">Select a country</option>{" "}
          {countryOptions.map((country) => (
            <option key={country.value} value={country.value}>
              {country.label}
            </option>
          ))}
        </select>
        {errors.country && <p>{errors.country.message}</p>}
      </div>

      <div>
        <label htmlFor="division">Division:</label>
        <select
        className=" border border-gray-300 rounded-md p-2 mt-1 w-full disabled:opacity-50 disabled:bg-gray-200 disabled:cursor-not-allowed" 
          {...register("division", { required: "Division is required" })}
          disabled={!selectedCountry}
        >
          <option value="">Select a division</option>{" "}
          {selectedCountry &&
            divisionOptions[selectedCountry].map((division) => (
              <option key={division.value} value={division.value}>
                {division.label}
              </option>
            ))}
        </select>
        {errors.division && <p>{errors.division.message}</p>}
      </div>

      <button type="submit" className="
        bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 cursor-pointer
      ">Submit</button>
    </form>
   </div>
  );
};

export default ConditionForm;
