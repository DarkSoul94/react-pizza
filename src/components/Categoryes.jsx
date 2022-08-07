function Categoryes({ categoryList, selectedCategory, onSelectCategory }) {
  const onClickCategori = (i) => {
    onSelectCategory(i);
  };

  return (
    <div className="categories">
      <ul>
        {categoryList.map((category) => (
          <li
            className={selectedCategory === category.id ? 'active' : ''}
            onClick={() => onClickCategori(category.id)}
            key={category.id}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Categoryes;
