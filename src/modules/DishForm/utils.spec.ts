import { DishFormType } from './types';
import { filterPayload } from './utils';

describe('filterPayload', () => {
  it('dish type = pizza', () => {
    const payload = {
      name: 'dish name',
      preparation_time: '10:20:30',
      type: 'pizza',
      no_of_slices: 1,
      diameter: 1.4,
      spiciness_scale: 9,
      slices_of_bread: 10,
    } as DishFormType;

    expect(filterPayload(payload)).toEqual({
      name: 'dish name',
      preparation_time: '10:20:30',
      type: 'pizza',
      no_of_slices: 1,
      diameter: 1.4,
    });
  });

  it('dish type = soup', () => {
    const payload = {
      name: 'dish name',
      preparation_time: '10:20:30',
      type: 'soup',
      no_of_slices: 1,
      diameter: 1.4,
      spiciness_scale: 9,
      slices_of_bread: 10,
    } as DishFormType;

    expect(filterPayload(payload)).toEqual({
      name: 'dish name',
      preparation_time: '10:20:30',
      type: 'soup',
      spiciness_scale: 9,
    });
  });

  it('dish type = sandwich', () => {
    const payload = {
      name: 'dish name',
      preparation_time: '10:20:30',
      type: 'sandwich',
      no_of_slices: 1,
      diameter: 1.4,
      spiciness_scale: 9,
      slices_of_bread: 10,
    } as DishFormType;

    expect(filterPayload(payload)).toEqual({
      name: 'dish name',
      preparation_time: '10:20:30',
      type: 'sandwich',
      slices_of_bread: 10,
    });
  });
});
