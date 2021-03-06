import { ActionReducer, MetaReducer, } from "@ngrx/store";
import { environment } from "src/environments/environment";


export interface State {

}

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state, action) => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();

    return result;
  };
}


export const metaReducers: MetaReducer<State>[] = !environment.production ? [logger] : [];