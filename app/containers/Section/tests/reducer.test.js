
import { fromJS } from 'immutable';
import sectionReducer from '../reducer';

describe('sectionReducer', () => {
  it('returns the initial state', () => {
    expect(sectionReducer(undefined, {})).toEqual(fromJS({}));
  });
});
