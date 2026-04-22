import * as yup from 'yup';

import { TSignInFormState } from './types';

export const initialSignInFormState: TSignInFormState = {
  values: {
    email: 'kokin.m92@gmail.com',
    password: '123123123',
  },
  errors: {},
};

export const formSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(24).required(),
});
