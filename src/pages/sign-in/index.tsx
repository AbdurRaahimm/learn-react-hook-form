import { useForm } from "react-hook-form";
import Form, { FormField } from "../../components/Form/Form";
import Header from "../../components/Header";
import { signInFormData, SignInFormDataType } from "./SignInFormData";

export default function SignIn() {
  const {
    register,
    handleSubmit,
    // reset,
    getValues,
    formState: { errors },
  } = useForm<SignInFormDataType>({});

  const onSubmit = (data: SignInFormDataType) => {

    console.log(data);
    // reset();
  };

  return (
    <div className="h-screen grid place-items-center bg-gray-50">
      <div className="bg-white w-96 md:w-2xl rounded-md p-5 space-y-4">
        <Header title="Sign In" desc="Enter Your Details to Sign In" />
        <Form
          register={register}
          onSubmit={handleSubmit(onSubmit)}
          errors={errors}
          formData={signInFormData as FormField[]}
          getValues={getValues}
        />
      </div>
    </div>
  );
}
