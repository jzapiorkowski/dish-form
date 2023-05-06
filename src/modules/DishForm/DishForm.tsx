import { FormProvider, useForm } from 'react-hook-form';
import { DishFormFieldNames, DishFormType } from './types';
import { DishFormFields } from './DishFormFields';
import { validationSchema } from './validation';
import { Button } from '@mui/material';
import axios from 'axios';

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

  const onSubmit = async (data: DishFormType) => {
    try {
      const response = await axios.post('https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/', data);
      console.log(response);
    } catch (error: any) {
      const requestErrors = error?.response?.data;

      Object.entries(requestErrors).forEach(([fieldName, errorMessage]) => {
        formMethods.setError(fieldName as DishFormFieldNames, { type: 'custom', message: errorMessage as string });
      });
    }
  };

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
