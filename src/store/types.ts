import { Dispatch } from 'react';

export interface GlobalStateInterface {
  interactions: object[];
  favoriteMovies: object[];
}

export type ActionType = {
  type: string;
  value: object[];
};

export type ContextType = {
  globalState: GlobalStateInterface;
  dispatch: Dispatch<ActionType>;
};