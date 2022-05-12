import React, { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../Context';
import Grid from '../components/grid/Grid';

const Cart: FC = () => {
  const cartContext = useContext(CartContext);
  return (
    <div>
      <h2>Your cart:</h2>
      <Link to="/">Back to store</Link>
      {Object.keys(cartContext.cartState.items).length > 0 ? (
        <div className="table-title">
          <div>Category</div>
          <div>Name</div>
          <div>Quantity</div>
          <div>Price</div>
          <div>Actions</div>
        </div>
      ) : null}
      <div>
        {Object.keys(cartContext.cartState.items).length > 0 ? (
          Object.keys(cartContext.cartState.items).map((item, index) => {
            let items = cartContext.cartState.items[item];
            if (items.length > 0) return <Grid key={index} item={items[0]} quantity={items.length} />;
            else return null;
          })
        ) : (
          <p>Your cart is empty!</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
