export type SignInFormValues = {
  email: string;
  password: string;
};

export interface SignUpFormValues {
  email: string;
  password: string;
}

export type TSignInFormState = {
  values: SignUpFormValues;
  errors: Partial<Record<keyof SignUpFormValues, string>>;
  serverError?: string;
};
