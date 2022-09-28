import { ConteinerProducts } from "./style.js";
import { toast } from 'react-toastify';


function ProductsList ({products, currentSale, setCurrentSale, filteredProducts}) {

    const addToCard = (elemId) => {

        const productFilter = currentSale.find((elem) => elem.id === elemId)

        if (!productFilter) {
            products.find((elem) => {
                return elem.id === elemId && setCurrentSale([...currentSale, elem])
            })
        } else {
            toast('Item duplicado!')
        }
    }

    return (
        <ConteinerProducts>
            {
                filteredProducts.length < 1 ? 
                products.map((elem) => {
                  return (
                    <li key={elem.id}>
                        <div>
                            <img src={elem.img} alt={`imagem do produto ${elem.name}`} />
                        </div>
                        <h2>{elem.name}</h2>
                        <p>{elem.category}</p>
                        <h3>{`R$ ${elem.price}`}</h3>
                        <button onClick={() => addToCard(elem.id)}>Adicionar</button>
                    </li>
                  ) 
                   
                })
                :
                filteredProducts.map((elem) => {
                    return (
                      <li key={elem.id}>
                          <div>
                              <img src={elem.img} alt={`imagem do produto ${elem.name}`} />
                          </div>
                          <h2>{elem.name}</h2>
                          <p>{elem.category}</p>
                          <h3>{`R$ ${elem.price}`}</h3>
                          <button onClick={() => addToCard(elem.id)}>Adicionar</button>
                      </li>
                    ) 
                     
                  })
            }
        </ConteinerProducts>
    )
}

export default ProductsList;