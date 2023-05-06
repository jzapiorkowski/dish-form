export enum DishFormFields {
  NAME = 'name',
  PREPATATION_TIME = 'preparation_time',
  TYPE = 'type',
  NO_OF_SLICES = 'no_of_slices',
  DIAMETER = 'diameter',
  SPICINESS_SCALE = 'spiciness_scale',
  SLICES_OF_BREAD = 'slices_of_bread',
}

export interface DishFormType {
  [DishFormFields.NAME]: string | null;
  [DishFormFields.PREPATATION_TIME]: string | null;
  [DishFormFields.TYPE]: DishType | null;
  [DishFormFields.NO_OF_SLICES]: number;
  [DishFormFields.DIAMETER]: number;
  [DishFormFields.SPICINESS_SCALE]: number;
  [DishFormFields.SLICES_OF_BREAD]: number;
}

enum DishType {
  PIZZA = 'pizza',
  SOUP = 'soup',
  SANDWICH = 'sandwich',
}
