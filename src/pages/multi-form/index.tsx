import { FormProvider, useForm } from "react-hook-form";
import StepIndicator from "../../components/multiStepForm/StepIndicator";
import { useState } from "react";
import { FormData } from "./form-type";
import PersonalInfo from "../../components/multiStepForm/personal-info";
import ContactDetails from "../../components/multiStepForm/contact-details";
import Review from "../../components/multiStepForm/review";
import WelcomeMessage from "../../components/multiStepForm/welcome-message";

const STEPS = ["Personal Information", "Contact Details", "Review"];

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [showWelcome, setShowWelcome] = useState(false);
  const methods = useForm<FormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
    },
  });

  const onSubmit = (data: FormData) => {
    if (currentStep === STEPS.length) {
      console.log("Form submitted:", data);
      setShowWelcome(true)
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfo />;
      case 2:
        return <ContactDetails />;
      case 3:
        return <Review />;
      default:
        return null;
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="flex items-center justify-center p-4">
        <div className="w-full max-w-3xl">
          {showWelcome ? (
            <WelcomeMessage 
            data={methods.getValues()}
            onReset={() => {
              setShowWelcome(false)
              setCurrentStep(1)
              methods.reset()
            }}
             />
          ) : (
            <>
              <StepIndicator currentStep={currentStep} steps={STEPS} />
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                {renderStepContent()}
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={currentStep === 1}
                    className="mt-4 border bg-white text-black px-4 py-1 rounded-md font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className=" mt-4 border bg-indigo-600 text-white px-4 py-1 rounded-md font-medium "
                  >
                    {currentStep === STEPS.length ? "Submit" : "Next"}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </FormProvider>
  );
}
