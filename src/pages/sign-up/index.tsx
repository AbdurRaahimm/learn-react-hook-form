import { useForm } from "react-hook-form";
import { SignUpFormDataType, signUpFormData } from "./SignUpFormData";
import Header from "../../components/Header";
import { useEffect } from "react";
import Form, { FormField } from "../../components/Form/Form";

export default function SignUp() {
  const {
    register,
    unregister,
    handleSubmit,
    // reset,
    getValues,
    watch,
    formState: { errors },
  } = useForm<SignUpFormDataType>({});

  const onSubmit = (data: SignUpFormDataType) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {confirmPassword, ...rest}= data
    console.log(rest);
    // reset();
  };

  const occupation = watch("occupation");
  const formValue= signUpFormData({occupation})

  useEffect(()=>{
    if (occupation === "others") {
      unregister("occupationName");
    }
  },[occupation, unregister])

  return (
    <div className="h-screen grid place-items-center bg-gray-50">
      <div className="bg-white w-96 md:w-2xl rounded-md p-5 space-y-4">
        <Header title="Sign Up" desc="Enter Your Details to Sign Up" />
        <Form 
          register={register}
          onSubmit={handleSubmit(onSubmit)}
          errors={errors}
          formData={formValue as FormField[]}
          getValues={getValues}
        />
      </div>
    </div>
  );
}
