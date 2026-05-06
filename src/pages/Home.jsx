import Header from '../components/Header'
import CardPizza from '../components/CardPizza'
import { useCart } from '../context/CartContext'
import { pizzas } from '../pizzas'

const Home = () => {
  const { addToCart } = useCart()

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
              id={pizza.id}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
              onAdd={addToCart}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
