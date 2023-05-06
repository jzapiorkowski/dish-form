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

export function TextField({ label, fieldName, type = 'text' }: TextFieldProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext<FieldValues>();
  const { ref: inputRef, ...inputProps } = register(fieldName);

  return (
    <StyledContainer>
      <StyledTextField
        variant="filled"
        type={type}
        size="small"
        inputRef={inputRef}
        {...inputProps}
        label={label}
        error={!!errors?.[fieldName]}
      />
      {errors?.[fieldName] && (
        <StyledError data-cy={`${fieldName}-error`}>
          <>{errors?.[fieldName]?.message}</>
        </StyledError>
      )}
    </StyledContainer>
  );
}
