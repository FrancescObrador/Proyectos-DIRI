import React, { Suspense, useState } from 'react'
import './App.css'
import { MenuItem } from './entities/entities';import FoodOrder from './components/FoodOrder';
;

const Foods = React.lazy(() => import('./components/Foods'));

function App() {
  
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
   
    {
      "id": 1,
      "name": "Hamburguesa de Pollo",
      "quantity": 40,
      "desc": "Hamburguesa de pollo frito - ... y mayonesa", "price": 24,
      "image": "pollo.jpeg"
      },
      {
        "id": 2,
        "name": "Hamburguesa de vaca",
        "quantity": 20,
        "desc": "Hamburguesa de vaca - ... y ketsup", "price": 24,
        "image": "pollo.jpeg"
        },
  ]);

  const [isChooseFoodPage, setIsChooseFoodPage] = useState(false);

  const handleQuantity = (id: number, quantity: number ) => {
    let item = menuItems.find(item => item.id == id);
    item!.quantity -= quantity;
    //setMenuItems([...this.menuItems, item])
  }

  function handleReturn() {
    
  }

  return (
    <>
      <div className="App">
        <button className='toggleButton' onClick={() => {
          setIsChooseFoodPage(!isChooseFoodPage);
        }}>
          {isChooseFoodPage? "Disponibilidad" : "Pedir comida"}
        </button>

      <h3 className="title">Comida Rápida Online</h3> 
        
        {!isChooseFoodPage && (
          <>
            <h4 className="subTitle">Menús</h4> 
              <ul className="ulApp">
                {menuItems.map((item) => { return (
                <li key={item.id} className="liApp"> 
                <p>{item.name}</p> 
                <p>#{item.quantity}</p>
                <FoodOrder food={item} onQuantityUpdated={handleQuantity} onReturnToMenu={handleReturn}></FoodOrder>
                </li> );
              })} 
              </ul> 

          </>
        )}
        
        {isChooseFoodPage && 
          <Suspense fallback={<div>Cargando...</div>}>
            <Foods foodItems={menuItems}></Foods>
          </Suspense>
        }
        
      </div>
    </>
  )
}

export default App
