import { SignInForm } from 'features/auth';
import { WithProtection } from 'shared/store/HOCs/WithProtection';

export const SignInPage = WithProtection(() => {
  return <SignInForm />;
});
