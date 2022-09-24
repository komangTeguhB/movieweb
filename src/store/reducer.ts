import { ActionType, GlobalStateInterface } from './types';

const initialState = {
  interactions: [],
}

const Reducer = (state: GlobalStateInterface, action: ActionType): any => {
  switch (action.type) {
    case "SET_INTERACTIONS":
      return {
        ...state,
        interactions: action.value,
      };
    case "PURGE_STATE":
      return initialState;
    default:
      return state;
  }
};

export default Reducer;