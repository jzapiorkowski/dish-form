import { FormProvider, useForm } from 'react-hook-form';
import { DishFormFields, DishFormType } from './types';

export function DishForm() {
  const formMethods = useForm<DishFormType>({
    defaultValues: {
      [DishFormFields.NAME]: null,
      [DishFormFields.PREPATATION_TIME]: null,
      [DishFormFields.TYPE]: null,
      [DishFormFields.NO_OF_SLICES]: 0,
      [DishFormFields.DIAMETER]: 0,
      [DishFormFields.SPICINESS_SCALE]: 0,
      [DishFormFields.SLICES_OF_BREAD]: 0,
    },
  });

  const onSubmit = () => null;

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)}>form</form>
    </FormProvider>
  );
}
