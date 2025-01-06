import { Input } from "antd";
import { useForm, Controller } from "react-hook-form";

type formValue={
  firstName:string,
  lastName:string
}

export default function AntForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control
  } = useForm<formValue>({
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName:''
    },
  });

  const onSubmit = (data:formValue) => {
    console.log(data);
    reset()
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="firstName"
        control={control}
        rules={{
          required: "First name is required",
          minLength: { value: 3, message: "Minimum 3 characters required" },
        }}
        render={({ field }) => (
          <Input
            {...field}
            size="large"
            placeholder="Enter your first name"
          />
        )}
      />
      {errors.firstName && <span>{errors.firstName.message}</span>}

      <input
        {...register("lastName", {
          required: "Last name is required",
          minLength: { value: 3, message: "Minimum 3 characters required" },
        })}
        placeholder="Last name"
      />
      {errors?.lastName?.message}
      <button type="submit">
        Submit
      </button>
    </form>
  );
}
