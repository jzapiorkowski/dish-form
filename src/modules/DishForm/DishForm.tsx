import { FormProvider, useForm } from 'react-hook-form';
import { DishFormFieldNames, DishFormType } from './types';
import { DishFormFields } from './DishFormFields';
import { validationSchema } from './validation';
import { Button } from '@mui/material';

export function DishForm() {
  const formMethods = useForm<DishFormType>({
    defaultValues: {
      [DishFormFieldNames.NAME]: null,
      [DishFormFieldNames.PREPATATION_TIME]: null,
      [DishFormFieldNames.TYPE]: null,
      [DishFormFieldNames.NO_OF_SLICES]: 0,
      [DishFormFieldNames.DIAMETER]: 0,
      [DishFormFieldNames.SPICINESS_SCALE]: 0,
      [DishFormFieldNames.SLICES_OF_BREAD]: 0,
    },
    resolver: validationSchema,
  });

  const onSubmit = (data: DishFormType) => console.log(data);

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)}>
        <DishFormFields />
        <Button variant="contained" type="submit">
          submit
        </Button>
      </form>
    </FormProvider>
  );
}
