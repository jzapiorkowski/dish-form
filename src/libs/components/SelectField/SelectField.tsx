import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FieldValues, useFormContext } from 'react-hook-form';

interface SelectFieldProps {
  label: string;
  fieldName: string;
  type?: string;
  options: T[];
  defaultValue?: any;
}

export default function SelectField({ label, fieldName, options, defaultValue = '' }: SelectFieldProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext<FieldValues>();
  const { ref: inputRef, ...inputProps } = register(fieldName);

  return (
    <FormControl variant="filled">
      <InputLabel>{label}</InputLabel>
      <Select inputRef={inputRef} {...inputProps} defaultValue={defaultValue}>
        {!defaultValue && (
          <MenuItem selected disabled value="">
            None
          </MenuItem>
        )}
        {options.map((option, index) => (
          <MenuItem key={index} value={option?.value || ''}>
            {option?.label || ''}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
