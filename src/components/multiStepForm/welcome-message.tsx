import { FormData } from "../../pages/multi-form/form-type";

interface WelcomeMessageProps {
  data: FormData;
  onReset: () => void;
}

export default function WelcomeMessage({ data, onReset }: WelcomeMessageProps) {
  return (
    <div className="py-20">
      <div>
        <h2 className="text-2xl text-center">Welcome, {data.firstName}!</h2>
        <p className="text-center mb-4">
          Thank you for submitting your information.
        </p>
      </div>
      {/* <div className="space-y-2">
          <p><strong>Name:</strong> {data.firstName} {data.lastName}</p>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Phone:</strong> {data.phone}</p>
          <p><strong>Address:</strong> {data.address}, {data.city}</p>
        </div> */}

      <div className="flex justify-center">
        <button 
        className="border bg-white text-black px-4 py-1 rounded-md font-medium" 
        onClick={onReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
