import { TextField } from '../../libs/components/TextField';
import SelectField from '../../libs/components/SelectField/SelectField';
import { DishFormLabels, dishTypeOptions } from './constants';
import { DishFormFieldNames, DishFormType, DishType } from './types';
import { useFormContext } from 'react-hook-form';
import { useMemo } from 'react';

export function DishFormFields() {
  const { watch } = useFormContext<DishFormType>();

  const dishType = watch(DishFormFieldNames.TYPE);

  const additionalFields = useMemo(() => {
    switch (dishType) {
      case DishType.PIZZA:
        return (
          <>
            <TextField
              label={DishFormLabels.no_of_slices}
              fieldName={DishFormFieldNames.NO_OF_SLICES}
              type="number"
            ></TextField>
            <TextField
              label={DishFormLabels.diameter}
              fieldName={DishFormFieldNames.DIAMETER}
              type="number"
              inputProps={{
                step: 0.1,
              }}
            ></TextField>
          </>
        );

      case DishType.SOUP:
        return (
          <TextField
            label={DishFormLabels.spiciness_scale}
            fieldName={DishFormFieldNames.SPICINESS_SCALE}
            type="number"
          ></TextField>
        );

      case DishType.SANDWICH:
        return (
          <TextField
            label={DishFormLabels.slices_of_bread}
            fieldName={DishFormFieldNames.SLICES_OF_BREAD}
            type="number"
          ></TextField>
        );

      default:
        return <></>;
    }
  }, [dishType]);

  return (
    <>
      <TextField label={DishFormLabels.name} fieldName={DishFormFieldNames.NAME}></TextField>
      <TextField
        label={DishFormLabels.preparation_time}
        fieldName={DishFormFieldNames.PREPATATION_TIME}
        placeholder="HH:MM:SS"
      ></TextField>
      <SelectField
        label={DishFormLabels.type}
        fieldName={DishFormFieldNames.TYPE}
        options={dishTypeOptions}
      ></SelectField>
      {additionalFields}
    </>
  );
}
