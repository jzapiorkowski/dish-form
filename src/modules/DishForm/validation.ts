import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { DishFormFieldNames, DishType } from './types';
import { DishFormLabels } from './constants';

const requiredError = (fieldName: DishFormFieldNames) => `${DishFormLabels[fieldName]} is required`;

export const validationSchema = yupResolver(
  yup.object({
    [DishFormFieldNames.NAME]: yup.string().required(({ path }) => requiredError(path)),
    [DishFormFieldNames.PREPATATION_TIME]: yup.string().required(({ path }) => requiredError(path)),
    [DishFormFieldNames.TYPE]: yup
      .mixed<DishType>()
      .oneOf(Object.values(DishType))
      .required(({ path }) => requiredError(path)),
    [DishFormFieldNames.NO_OF_SLICES]: yup.number().required(({ path }) => requiredError(path)),
    [DishFormFieldNames.DIAMETER]: yup.number().required(({ path }) => requiredError(path)),
    [DishFormFieldNames.SPICINESS_SCALE]: yup.number().required(({ path }) => requiredError(path)),
    [DishFormFieldNames.SLICES_OF_BREAD]: yup.number().required(({ path }) => requiredError(path)),
  }),
);
