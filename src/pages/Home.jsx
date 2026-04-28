import { useState, useEffect } from 'react'
import Header from '../components/Header'
import CardPizza from '../components/CardPizza'

const Home = () => {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/api/pizzas')
      .then((res) => res.json())
      .then((data) => setPizzas(data))
  }, [])

  return (
    <div>
      <Header />
      <div className="home-section">
        <h2 className="section-title">Nuestras Pizzas</h2>
        <div className="section-divider" />
        <div className="cards-grid">
          {pizzas.map((pizza) => (
            <CardPizza
              key={pizza.id}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
