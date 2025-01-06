export interface SignUpFormDataType {
  username: string;
  email: string;
  occupation: string;
  occupationName?: string;
  password: string;
  confirmPassword: string;
}

interface Props{
  occupation:string
}

export const signUpFormData = ({occupation}:Props) => {

  const baseForm = [
    {
      name: "username",
      label: "User Name",
      type: "text",
      placeholder: "Enter Your User Name",
      required: true,
      className: "col-span-1",
    },
    {
      name: "email",
      label: "User Email",
      type: "email",
      placeholder: "Enter Your Email",
      required: true,
      className: "col-span-1",
    },
    {
      name: "occupation",
      label: "Occupation",
      type: "select",
      options: ['designer','developer','tester','others'],
      required: false,
      className: "col-span-1",
    },
    // {
    //   name: "occupationName", 
    //   label: "Occupation Name",
    //   type: "text",
    //   placeholder: "Enter Your Occupation",
    //   required: occupation === "others",
    //   className: "col-span-1",
    //   disabled: occupation !== "others"
    // },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter Your Password",
      required: true,
      className: "col-span-1",
    },
    {
      name: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      placeholder: "confirm Password",
      required: true,
      className: "col-span-1",
    },
  ];

  if(occupation ==='others'){
    return [
      {
        name: "username",
        label: "User Name",
        type: "text",
        placeholder: "Enter Your User Name",
        required: true,
        className: "col-span-1",
      },
      {
        name: "email",
        label: "User Email",
        type: "email",
        placeholder: "Enter Your Email",
        required: true,
        className: "col-span-1",
      },
      {
        name: "occupation",
        label: "Occupation",
        type: "select",
        options: ['designer','developer','tester','others'],
        required: false,
        className: "col-span-1",
      },
      {
        name: "occupationName",
        label: "Occupation Name",
        type: "text",
        placeholder: "Enter Your Occupation",
        required: true,
        className: "col-span-1",
      },
      {
        name: "password",
        label: " Password",
        type: "password",
        placeholder: "Enter Your Password",
        required: true,
        className: "col-span-1",
      },
      {
        name: "confirmPassword",
        label: "Confirm Password",
        type: "password",
        placeholder: "confirm Password",
        required: true,
        className: "col-span-1",
      },
    ];
  }

  return baseForm;
};
