import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { DishFormFieldNames, DishType } from './types';
import { DishFormLabels } from './constants';

const requiredError = (fieldName: DishFormFieldNames) => `${DishFormLabels[fieldName]} is required`;
const numberTypeError = (fieldName: DishFormFieldNames) => `${DishFormLabels[fieldName]} must be a number`;
const minValueError = (fieldName: DishFormFieldNames, value: number) =>
  `${DishFormLabels[fieldName]} must be at least ${value}`;

export const validationSchema = yupResolver(
  yup.object({
    [DishFormFieldNames.NAME]: yup.string().required(({ path }) => requiredError(path)),
    [DishFormFieldNames.PREPATATION_TIME]: yup.string().required(({ path }) => requiredError(path)),
    [DishFormFieldNames.TYPE]: yup
      .mixed<DishType>()
      .oneOf(Object.values(DishType))
      .required(({ path }) => requiredError(path)),
    [DishFormFieldNames.NO_OF_SLICES]: yup
      .number()
      .typeError(({ path }) => numberTypeError(path))
      .min(1, ({ path }) => minValueError(path as DishFormFieldNames, 1))
      .required(({ path }) => requiredError(path)),
    [DishFormFieldNames.DIAMETER]: yup
      .number()
      .typeError(({ path }) => numberTypeError(path))
      .min(1, ({ path }) => minValueError(path as DishFormFieldNames, 1))
      .required(({ path }) => requiredError(path)),
    [DishFormFieldNames.SPICINESS_SCALE]: yup
      .number()
      .typeError(({ path }) => numberTypeError(path))
      .min(1, ({ path }) => minValueError(path as DishFormFieldNames, 1))
      .required(({ path }) => requiredError(path)),
    [DishFormFieldNames.SLICES_OF_BREAD]: yup
      .number()
      .typeError(({ path }) => numberTypeError(path))
      .min(1, ({ path }) => minValueError(path as DishFormFieldNames, 1))
      .required(({ path }) => requiredError(path)),
  }),
);
