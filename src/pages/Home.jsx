import { useEffect, useState } from 'react';
import Categoryes from '../components/Categoryes';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Sort from '../components/Sort';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [categoryes, setCategoryes] = useState([]);
  const [sorts, setSorts] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState(0);
  const [sortType, setSortType] = useState({ id: 0, name: 'не выбрано' });

  const sortCategory = category > 0 ? `category=${category}` : ``;
  const sort = `&sortBy=${sortType.sortType}`;
  const order = `&order=${sortType.order}`;

  useEffect(() => {
    fetch(`https://62c8366a8c90491c2cb14e36.mockapi.io/api/categoryes`)
      .then((res) => res.json())
      .then((json) => {
        setCategoryes(json);
      });

    fetch(`https://62c8366a8c90491c2cb14e36.mockapi.io/api/sorts`)
      .then((res) => res.json())
      .then((json) => {
        setSorts(json);
      });

    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch(`https://62c8366a8c90491c2cb14e36.mockapi.io/api/items?${sortCategory}${sort}${order}`)
      .then((res) => res.json())
      .then((json) => {
        setPizzas(json);
        setIsLoading(false);
      });
  }, [category, sortType]);

  return (
    <div className="container">
      <div className="content__top">
        <Categoryes
          categoryList={categoryes}
          selectedCategory={category}
          onSelectCategory={(i) => {
            setCategory(i);
          }}
        />
        <Sort
          sortList={sorts}
          selectedSort={sortType}
          onSelectSort={(sort) => {
            setSortType(sort);
          }}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : pizzas.map((pizza) => (
              <PizzaBlock
                title={pizza.title}
                price={pizza.price}
                imageURL={pizza.imageUrl}
                sizes={pizza.sizes}
                types={pizza.types}
                key={pizza.id}
              />
            ))}
      </div>
    </div>
  );
};

export default Home;
