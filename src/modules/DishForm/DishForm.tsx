import { FormProvider, useForm } from 'react-hook-form';
import { DishFormFieldNames, DishFormType } from './types';
import { DishFormFields } from './DishFormFields';

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
  });

  const onSubmit = data => console.log(data);

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)}>
        <DishFormFields />
        <button type="submit">submot</button>
      </form>
    </FormProvider>
  );
}
