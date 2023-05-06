export enum DishFormFieldNames {
  NAME = 'name',
  PREPATATION_TIME = 'preparation_time',
  TYPE = 'type',
  NO_OF_SLICES = 'no_of_slices',
  DIAMETER = 'diameter',
  SPICINESS_SCALE = 'spiciness_scale',
  SLICES_OF_BREAD = 'slices_of_bread',
}

export interface DishFormType {
  [DishFormFieldNames.NAME]: string | null;
  [DishFormFieldNames.PREPATATION_TIME]: string | null;
  [DishFormFieldNames.TYPE]: DishType | null;
  [DishFormFieldNames.NO_OF_SLICES]: number;
  [DishFormFieldNames.DIAMETER]: number;
  [DishFormFieldNames.SPICINESS_SCALE]: number;
  [DishFormFieldNames.SLICES_OF_BREAD]: number;
}

export enum DishType {
  PIZZA = 'pizza',
  SOUP = 'soup',
  SANDWICH = 'sandwich',
}
