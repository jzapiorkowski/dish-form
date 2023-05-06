import { TextField as MUITextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FieldValues, useFormContext } from 'react-hook-form';

interface TextFieldProps {
  label: string;
  fieldName: string;
  type?: string;
}

const StyledTextField = styled(MUITextField)`
  width: 342px;
`;

export function TextField({ label, fieldName, type = 'text' }: TextFieldProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext<FieldValues>();
  const { ref: inputRef, ...inputProps } = register(fieldName);

  return (
    <StyledTextField
      variant="filled"
      type={type}
      size="small"
      inputRef={inputRef}
      {...inputProps}
      label={label}
      error={!!errors?.[fieldName]}
    />
  );
}
