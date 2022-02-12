import { Action, createReducer, on } from "@ngrx/store";
import { toggleSideNav } from "./side-nav-store.actions";

export const sideNavSelector = 'sideNav';

export interface ISideNavStore {
  showSideNav: boolean
}

export const initialState: ISideNavStore = {
  showSideNav: false
}

const productsDashboardReducer = createReducer(
  initialState,
  on(toggleSideNav, (state) => ({ ...state, showSideNav: !state.showSideNav })),
);

export function reducer(state: ISideNavStore | undefined, action: Action) {
  return productsDashboardReducer(state, action);
}