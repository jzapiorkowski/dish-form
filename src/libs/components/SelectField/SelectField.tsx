import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FieldValues, useFormContext } from 'react-hook-form';
import { styled } from '@mui/material/styles';
import { SelectOption } from './types';

interface SelectFieldProps {
  label: string;
  fieldName: string;
  type?: string;
  options: SelectOption[];
  defaultValue?: string;
}

const StyledError = styled('p')`
  color: red;
  font-weight: 400;
  font-size: 0.75rem;
  margin-left: 14px;
`;

const StyledContainer = styled(FormControl)`
  width: 350px;
  height: 90px;
  display: flex;
  flex-direction: column;
`;

export default function SelectField({ label, fieldName, options, defaultValue = '' }: SelectFieldProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext<FieldValues>();
  const { ref: inputRef, ...inputProps } = register(fieldName);

  return (
    <StyledContainer variant="filled">
      <InputLabel>{label}</InputLabel>
      <Select inputRef={inputRef} {...inputProps} defaultValue={defaultValue}>
        {!defaultValue && (
          <MenuItem selected disabled value="">
            None
          </MenuItem>
        )}
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {errors?.[fieldName] && (
        <StyledError data-cy={`${fieldName}-error`}>
          <>{errors?.[fieldName]?.message}</>
        </StyledError>
      )}
    </StyledContainer>
  );
}
