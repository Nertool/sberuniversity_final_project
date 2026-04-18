import { SignUpForm } from 'features/auth';
import { WithProtection } from 'shared/store/HOCs/WithProtection';

export const SignUpPage = WithProtection(() => {
  return <SignUpForm />;
});
