import { InputBaseComponentProps, TextField as MUITextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FieldValues, useFormContext } from 'react-hook-form';

interface TextFieldProps {
  label: string;
  fieldName: string;
  type?: string;
  placeholder?: string;
  inputProps?: InputBaseComponentProps;
}

const StyledError = styled('p')`
  color: red;
  font-weight: 400;
  font-size: 0.75rem;
  margin-left: 14px;
`;

const StyledContainer = styled('div')`
  width: 350px;
  height: 90px;
  display: flex;
  flex-direction: column;
`;

export function TextField({ label, fieldName, type = 'text', placeholder, inputProps }: TextFieldProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext<FieldValues>();
  const { ref: inputRef, ...registerProps } = register(fieldName);

  return (
    <StyledContainer>
      <MUITextField
        variant="filled"
        fullWidth
        type={type}
        size="small"
        inputRef={inputRef}
        {...registerProps}
        label={label}
        placeholder={placeholder}
        error={!!errors?.[fieldName]}
        inputProps={inputProps}
      />
      {errors?.[fieldName] && (
        <StyledError data-cy={`${fieldName}-error`}>
          <>{errors?.[fieldName]?.message}</>
        </StyledError>
      )}
    </StyledContainer>
  );
}
