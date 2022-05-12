import React, { createContext } from 'react';
import IGoodType from './interface';

export interface Actions {
  type: 'ADD_ITEM' | 'REMOVE_ITEM';
  payload: IGoodType;
}

export interface State {
  items: { [key: string]: IGoodType[] };
}

export const initialState: State = {
  items: {},
};

export const cartReducer = (state: State, action: Actions): State => {
  let item = action.payload;
  let items = { ...state.items };

  switch (action.type) {
    case 'ADD_ITEM':
      if (items[item.name]) {
        items[item.name] = items[item.name].concat([item]);
      } else items[item.name] = [item];

      return { ...state, items };
    case 'REMOVE_ITEM':
      if (items[item.name]) {
        items[item.name] = items[item.name].slice(0, -1);

        if (items[action.payload.name].length === 0) {
          delete items[item.name];
        }
      }

      return { ...state, items };
    default:
      return state;
  }
};

export interface ICartContextProps {
  cartState: State;
  cartDispatch: React.Dispatch<Actions>;
}

const CartContext = createContext<ICartContextProps>({
  cartState: initialState,
  cartDispatch: () => {},
});

export const CartContextProvider = CartContext.Provider;
export default CartContext;
