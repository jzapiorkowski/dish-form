import { DishFormFieldNames, DishType } from './types';

export const DishFormLabels = {
  [DishFormFieldNames.NAME]: 'name',
  [DishFormFieldNames.PREPATATION_TIME]: 'preparation time',
  [DishFormFieldNames.TYPE]: 'type',
  [DishFormFieldNames.NO_OF_SLICES]: 'number of slices',
  [DishFormFieldNames.DIAMETER]: 'diameter',
  [DishFormFieldNames.SPICINESS_SCALE]: 'spiciness scale',
  [DishFormFieldNames.SLICES_OF_BREAD]: 'slices of bread',
};

export const dishTypeOptions = [
  { label: DishType.PIZZA, value: DishType.PIZZA },
  { label: DishType.SANDWICH, value: DishType.SANDWICH },
  { label: DishType.SOUP, value: DishType.SOUP },
];
