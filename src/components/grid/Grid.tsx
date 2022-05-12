import React, { FC, useContext } from 'react';
import IGoodType from '../../interface';
import CartContext from '../../Context';
import './Grid.css';

interface Props {
  item: IGoodType;
  quantity?: number;
}

const Grid: FC<Props> = ({ item, quantity }) => {
  const cartContext = useContext(CartContext);

  return (
    <>
      <div className={quantity ? 'cart-table' : 'table'} data-price={item.price}>
        <div className="table-row">{item.category.name}</div>
        <div className="table-row">{item.name}</div>
        {quantity ? <div className="table-row">{quantity}</div> : null}
        <div className="table-row">{!quantity ? '$' + item.price : '$' + (item.price * quantity).toFixed(2)}</div>
        <div className="table-row">
          <button onClick={() => cartContext.cartDispatch({ type: 'REMOVE_ITEM', payload: item })}>(–)</button>
          <span>{quantity ? 'Remove' : 'Select'}</span>
          <button onClick={() => cartContext.cartDispatch({ type: 'ADD_ITEM', payload: item })}>(+)</button>
        </div>
      </div>
    </>
  );
};

export default Grid;
