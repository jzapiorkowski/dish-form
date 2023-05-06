import { FormProvider, useForm } from 'react-hook-form';
import { DishFormFieldNames, DishFormType } from './types';
import { DishFormFields } from './DishFormFields';
import { validationSchema } from './validation';
import { Alert, Button, Snackbar } from '@mui/material';
import axios from 'axios';
import { filterPayload } from './utils';
import { useState } from 'react';

export function DishForm() {
  const formMethods = useForm<DishFormType>({
    defaultValues: {
      [DishFormFieldNames.NAME]: null,
      [DishFormFieldNames.PREPATATION_TIME]: null,
      [DishFormFieldNames.TYPE]: null,
      [DishFormFieldNames.NO_OF_SLICES]: 1,
      [DishFormFieldNames.DIAMETER]: 1,
      [DishFormFieldNames.SPICINESS_SCALE]: 1,
      [DishFormFieldNames.SLICES_OF_BREAD]: 1,
    },
    resolver: validationSchema,
  });
  const [isSnackbarOpen, setIsSnackbarOpen] = useState<boolean>(false);

  const openSnackbar = () => setIsSnackbarOpen(true);
  const hideSnackbar = () => setIsSnackbarOpen(false);

  const onSubmit = async (data: DishFormType) => {
    try {
      const filteredPayload = filterPayload(data);
      await axios.post('https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/', filteredPayload);

      openSnackbar();
    } catch (error: any) {
      const requestErrors = error?.response?.data;

      Object.entries(requestErrors).forEach(([fieldName, errorMessage]) => {
        formMethods.setError(fieldName as DishFormFieldNames, { type: 'custom', message: errorMessage as string });
      });

      hideSnackbar();
    }
  };

  return (
    <>
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(onSubmit)}>
          <DishFormFields />
          <Button variant="contained" type="submit">
            submit
          </Button>
        </form>
      </FormProvider>
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={5000}
        onClose={hideSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity="success">element has been created!</Alert>
      </Snackbar>
    </>
  );
}
