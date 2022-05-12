import React, { FC, useReducer } from 'react';
import MyRoutes from '../../routes/MyRoutes';
import { CartContextProvider, cartReducer, initialState } from '../../Context';

const Main: FC = () => {
  const routes = MyRoutes();
  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);

  const value = {
    cartState,
    cartDispatch,
  };

  return <CartContextProvider value={value}>{routes}</CartContextProvider>;
};

export default Main;
