const App = () => {

  const categories = [
    {
      title: 'Hats'
    },
    {
      title: 'Jackets'
    },
    {
      title: 'Sneakers'
    },
    {
      title: 'Womens'
    },
    {
      title: 'Mens'
    },
  ]

  return (
    <div className="categories-container">
      {categories.map(({title}) => (
        <div className="category">
          <div className="background-image" />
          <div className="category-body">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default App;
