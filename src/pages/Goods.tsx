import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Grid from '../components/grid/Grid';
import IGoodType from '../interface';
import axios from 'axios';

const Goods: FC = () => {
  const [items, setItems] = useState<IGoodType[]>([]);
  const [priceRevers, setPriceRevers] = useState<boolean>(false);
  const [categoryRevers, setCategoryRevers] = useState<boolean>(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get('http://localhost:3001/api/products/')
      .then((response) => setItems(response.data))
      .catch((error) => console.error(error.message));
  };

  const categorySort = (): void => {
    if (!categoryRevers) handlerSort(categoryRevers, setCategoryRevers);
    else handlerSort(categoryRevers, setCategoryRevers);
  };

  const priceSort = (): void => {
    const checkPrice = true;
    if (!priceRevers) handlerSort(priceRevers, setPriceRevers, checkPrice);
    else handlerSort(priceRevers, setPriceRevers, checkPrice);
  };

  const handlerSort = (state: boolean, setState: any, check?: boolean | undefined): void => {
    setItems((prev) => {
      const result = [...prev].sort((prev, next) => {
        if (check) return prev.price - next.price;
        else return prev.category.name.toLowerCase().localeCompare(next.category.name.toLowerCase());
      });
      return state ? result.reverse() : result;
    });

    setState(!state);
  };

  return (
    <div>
      <h2>All goods:</h2>
      <Link to="cart">Go to cart</Link>
      <div>
        <div className="table-title">
          <div onClick={categorySort} style={{ cursor: 'pointer' }}>
            Category {categoryRevers ? '▲' : '▼'}
          </div>
          <div>Name</div>
          <div onClick={priceSort} style={{ cursor: 'pointer' }}>
            Price {priceRevers ? '▲' : '▼'}
          </div>
          <div>Actions</div>
        </div>
        {items.map((item) => (
          <Grid key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Goods;
