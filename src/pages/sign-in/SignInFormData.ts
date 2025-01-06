export interface SignInFormDataType {
  email: string;
  password: string;
}

export const signInFormData = [
  {
    name: "email",
    label: "User Email",
    type: "email",
    placeholder: "Enter Your Email",
    required: true,
    className: "col-span-2",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter Your Password",
    required: true,
    className: "col-span-2",
  },

];
