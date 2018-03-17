import { createSelector } from 'reselect';

/**
 * Direct selector to the section state domain
 */
const selectSectionDomain = (state) => state.get('section');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Section
 */

const makeSelectSection = () => createSelector(
  selectSectionDomain,
  (substate) => substate.toJS()
);

export default makeSelectSection;
export {
  selectSectionDomain,
};
