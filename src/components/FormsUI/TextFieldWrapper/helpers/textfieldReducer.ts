interface IAction {
  type: string;
  payload?: string;
}

interface IState {
  isHeld: boolean;
}

export const initialState: IState = {
  isHeld: false,
};

export function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case 'hold':
      return { ...state, isHeld: true, };
    case 'release':
      return { ...state, isHeld: false, };
    default:
      throw new Error("Unrecognized action type: " + action.type);
  }
}