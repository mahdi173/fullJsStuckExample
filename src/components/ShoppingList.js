import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'

function ShoppingList({ cart, updateCart }) {
                            // ou {plant.isBestSale && <span>🔥</span>} ou {plant.isBestSale && plant.category === "classique" && <span>🔥</span>}
   const categories = plantList.reduce(
        (acc, elem) =>
            acc.includes(elem.category) ? acc : acc.concat(elem.category),
            []
    )
    return (
      /*  <ul>
            {plantList.map((plant) => (
                     <li key={ plant.id }>
                        {plant.isBestSale ? <span>{ plant.name }🔥</span> : <span>{ plant.name  }</span>}
                        <CareScale careType='water' scaleValue={plant.water} />
                        <CareScale careType='light' scaleValue={plant.light} />
                    </li>
            ))}
        </ul>*/
        <div className='lmj-shopping-list'>
            <ul>
                {categories.map((cat) => (
                <li key={cat}>{cat}</li>
                ))}
            </ul>
            <ul className='lmj-plant-list'>
                {plantList.map(({ id, cover, name, water, light }) => (
                    <div key={id}>
                        <PlantItem cover={cover} name={name} water={water} light={light} />
                        <button onClick={() => updateCart(cart + 1)}>Ajouter</button>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList