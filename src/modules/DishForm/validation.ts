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
    [DishFormFieldNames.PREPATATION_TIME]: yup
      .string()
      .matches(/^[0-9]{2}:[0-9]{2}:[0-9]{2}$/, 'Invalid time format (HH:MM:SS)')
      .required(({ path }) => requiredError(path)),
    [DishFormFieldNames.TYPE]: yup
      .mixed<DishType>()
      .oneOf(Object.values(DishType))
      .required(({ path }) => requiredError(path)),
    [DishFormFieldNames.NO_OF_SLICES]: yup.number().when(DishFormFieldNames.TYPE, {
      is: DishType.PIZZA,
      then: () =>
        yup
          .number()
          .min(1, ({ path }) => minValueError(path as DishFormFieldNames, 1))
          .typeError(({ path }) => numberTypeError(path))
          .required(({ path }) => requiredError(path)),
    }),
    [DishFormFieldNames.DIAMETER]: yup.number().when(DishFormFieldNames.TYPE, {
      is: DishType.PIZZA,
      then: () =>
        yup
          .number()
          .min(1, ({ path }) => minValueError(path as DishFormFieldNames, 1))
          .typeError(({ path }) => numberTypeError(path))
          .required(({ path }) => requiredError(path)),
    }),
    [DishFormFieldNames.SPICINESS_SCALE]: yup.number().when(DishFormFieldNames.TYPE, {
      is: DishType.SOUP,
      then: () =>
        yup
          .number()
          .min(1, ({ path }) => minValueError(path as DishFormFieldNames, 1))
          .typeError(({ path }) => numberTypeError(path))
          .required(({ path }) => requiredError(path)),
    }),
    [DishFormFieldNames.SLICES_OF_BREAD]: yup.number().when(DishFormFieldNames.TYPE, {
      is: DishType.SOUP,
      then: () =>
        yup
          .number()
          .min(1, ({ path }) => minValueError(path as DishFormFieldNames, 1))
          .typeError(({ path }) => numberTypeError(path))
          .required(({ path }) => requiredError(path)),
    }),
  }),
);
