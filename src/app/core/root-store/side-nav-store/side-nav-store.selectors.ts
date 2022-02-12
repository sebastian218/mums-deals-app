import { createSelector } from '@ngrx/store';
import { ISideNavStore } from './side-nav-store.redurcer';

export const selectSideNavStore = (state: any) => state.sideNav;

export const selectShowSideNav = createSelector(
  selectSideNavStore,
  (state: ISideNavStore) => state.showSideNav
)