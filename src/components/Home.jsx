import Header from './Header'
import CardPizza from './CardPizza'

const Home = () => {
  return (
    <div>
      <Header />
      <div className="home-section">
        <h2 className="section-title">Nuestras Pizzas</h2>
        <div className="section-divider" />
        <div className="cards-grid">
          <CardPizza
            name="Napolitana"
            price={5950}
            ingredients={['mozzarella', 'tomates', 'jamón', 'orégano']}
            img="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=640&q=80"
          />
          <CardPizza
            name="Española"
            price={6950}
            ingredients={['mozzarella', 'gorgonzola', 'parmesano', 'provolone']}
            img="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=640&q=80"
          />
          <CardPizza
            name="Pepperoni"
            price={6950}
            ingredients={['mozzarella', 'pepperoni', 'orégano']}
            img="https://images.unsplash.com/photo-1628840042765-356cda07504e?w=640&q=80"
          />
          <CardPizza
            name="Hawaiana"
            price={7250}
            ingredients={['mozzarella', 'jamón', 'piña', 'orégano']}
            img="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=640&q=80"
          />
          <CardPizza
            name="Vegetariana"
            price={6750}
            ingredients={['mozzarella', 'pimentón', 'champiñones', 'cebolla', 'aceitunas']}
            img="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=640&q=80"
          />
          <CardPizza
            name="Margarita"
            price={5500}
            ingredients={['mozzarella fresca', 'tomate', 'albahaca', 'aceite de oliva']}
            img="https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=640&q=80"
          />
          <CardPizza
            name="BBQ Chicken"
            price={7950}
            ingredients={['mozzarella', 'pollo', 'salsa BBQ', 'cebolla morada', 'cilantro']}
            img="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=640&q=80"
          />
          <CardPizza
            name="Funghi"
            price={6500}
            ingredients={['mozzarella', 'champiñones', 'ajo', 'perejil', 'aceite de oliva']}
            img="https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=640&q=80"
          />
          <CardPizza
            name="Cuatro Estaciones"
            price={8500}
            ingredients={['mozzarella', 'jamón', 'champiñones', 'alcachofas', 'aceitunas']}
            img="https://images.unsplash.com/photo-1548369937-47519962c11a?w=640&q=80"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
