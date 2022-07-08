import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import './scss/app.scss';
import { useEffect, useState } from 'react';

function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch('https://62c8366a8c90491c2cb14e36.mockapi.io/api/items')
      .then((res) => res.json())
      .then((json) => setPizzas(json));
  }, []);
  
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map((pizza) => (
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
      </div>
    </div>
  );
}

export default App;
