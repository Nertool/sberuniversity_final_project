import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Avatar, Box, Container, Link, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { Input } from 'shared/ui/Input';
import { LoadingButton } from 'shared/ui/LoadingButton';

import { useSignInForm } from 'features/auth/model/useSignInForm';

export const SignInForm: FC = () => {
  const { emailInputRef, formState, isPending, signInAction } = useSignInForm();

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <Box component="form" action={signInAction} noValidate sx={{ my: 1 }}>
          <Input
            name="email"
            ref={emailInputRef}
            margin="normal"
            label="Email Address"
            type="email"
            fullWidth
            required
            autoComplete="email"
            defaultValue={formState.values.email}
            error={!!formState.errors.email}
            helperText={formState.errors.email}
          />
          <Input
            name="password"
            label="Password"
            type="password"
            error={!!formState.errors.password}
            helperText={formState.errors.password}
            margin="normal"
            fullWidth
            required
            defaultValue={formState.values.password}
          />

          {formState.serverError && (
            <Typography color="error" variant="body2">
              {formState.serverError}
            </Typography>
          )}

          <LoadingButton
            type="submit"
            disabled={isPending}
            loading={isPending}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign IN
          </LoadingButton>
          <Box display="flex" justifyContent="center" flexGrow={1}>
            <Link component={RouterLink} to="/signup">
              SIGN UP
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
