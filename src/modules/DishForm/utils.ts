import { DishFormFieldNames, DishFormType, DishType } from './types';

export function filterPayload(data: DishFormType): Partial<DishFormType> {
  const basePayload = {
    [DishFormFieldNames.NAME]: data[DishFormFieldNames.NAME],
    [DishFormFieldNames.PREPATATION_TIME]: data[DishFormFieldNames.PREPATATION_TIME],
    [DishFormFieldNames.TYPE]: data[DishFormFieldNames.TYPE],
  };

  switch (data.type) {
    case DishType.PIZZA:
      return {
        ...basePayload,
        [DishFormFieldNames.NO_OF_SLICES]: data[DishFormFieldNames.NO_OF_SLICES],
        [DishFormFieldNames.DIAMETER]: data[DishFormFieldNames.DIAMETER],
      };

    case DishType.SOUP:
      return {
        ...basePayload,
        [DishFormFieldNames.SPICINESS_SCALE]: data[DishFormFieldNames.SPICINESS_SCALE],
      };

    case DishType.SANDWICH:
      return {
        ...basePayload,
        [DishFormFieldNames.SLICES_OF_BREAD]: data[DishFormFieldNames.SLICES_OF_BREAD],
      };

    default:
      return {};
  }
}
