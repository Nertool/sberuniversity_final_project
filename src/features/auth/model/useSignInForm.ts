import { useActionState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { ValidationError } from 'yup';

import { userActions, useSignInMutation } from 'features/auth';
import { formSchema, initialSignInFormState } from '../model/validator';
import { SignInFormValues, TSignInFormState } from '../model/types';

import { getMessageFromError } from 'shared/utils';

const getFormValues = (formData: FormData) => ({
  email: String(formData.get('email') ?? ''),
  password: String(formData.get('password') ?? ''),
});

const getValidationErrors = (error: ValidationError) => {
  const validationErrors = error.inner.length ? error.inner : [error];

  return validationErrors.reduce<TSignInFormState['errors']>(
    (acc, validationError) => {
      const path = validationError.path as keyof SignInFormValues | undefined;

      if (path && !acc[path]) {
        acc[path] = validationError.message;
      }

      return acc;
    },
    {},
  );
};

export const useSignInForm = () => {
  const emailInputRef = useRef<HTMLInputElement | null>(null);

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [signInRequestFn] = useSignInMutation();

  const fetchSignIn = async (
    _: TSignInFormState,
    formData: FormData,
  ): Promise<TSignInFormState> => {
    const values = getFormValues(formData);

    // validation
    try {
      await formSchema.validate(values, { abortEarly: false });
    } catch (error) {
      if (error instanceof ValidationError) {
        return { values, errors: getValidationErrors(error) };
      }

      throw error;
    }

    // request
    try {
      const response = await signInRequestFn(values).unwrap();

      dispatch(userActions.setUser(response.user));
      dispatch(
        userActions.setAccessToken({ accessToken: response.accessToken }),
      );

      toast.success('Вы успешно авторизованы!');

      if (location.state?.from) {
        navigate(location.state.from);
      } else {
        navigate('/');
      }

      return { values, errors: {} };
    } catch (error) {
      const serverError = getMessageFromError(
        error,
        'Неизвестная ошибка при авторизации пользователя',
      );

      toast.error(serverError);

      return { values, errors: {}, serverError };
    }
  };

  const [formState, signInAction, isPending] = useActionState(
    fetchSignIn,
    initialSignInFormState,
  );

  useEffect(() => {
    emailInputRef.current?.focus();
  }, []);

  return { emailInputRef, formState, isPending, signInAction };
};
