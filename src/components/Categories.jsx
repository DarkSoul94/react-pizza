import { useState } from 'react';

function Categories() {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const [activeIndex, setActiveIndex] = useState(0);
  const onClickCategori = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((categori, index) => (
          <li
            className={activeIndex === index ? 'active' : ''}
            onClick={() => onClickCategori(index)}
            key={index}>
            {categori}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Categories;
