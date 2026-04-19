import { forwardRef } from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';

export const Input = forwardRef<HTMLInputElement, TextFieldProps>(
  (props, ref) => {
    return <TextField {...props} inputRef={ref} />;
  },
);

Input.displayName = 'Input';
