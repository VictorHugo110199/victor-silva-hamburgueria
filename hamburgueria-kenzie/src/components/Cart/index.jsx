import { ContainerCard, LiAlert, CounterTotal, HearderLi, CardProductCard } from "./style.js";

function Cart ({currentSale, setCurrentSale}) {

    function remove (removedItem) {

        const newSales = currentSale.filter((elem) => {
            return elem.id !== removedItem 
        })

        setCurrentSale(newSales)
    }

    function removeAll () {
        setCurrentSale([])
    }

    const totalPrice = currentSale.reduce((a,b) => {
        return a + b.price
    }, 0)

    return (
        <ContainerCard>
            <HearderLi><p>Carrinho de compras</p></HearderLi>
            {
                (currentSale.length > 0) ? 
                    currentSale.map((elem) => {
                        return (
                            <CardProductCard key={elem.id}>
                                <section>
                                    <img src={elem.img} alt="Imagem de Produto" />
                                    <div>
                                        <h2>{elem.name}</h2>
                                        <p>{elem.category}</p>
                                    </div>
                                </section>
                                <button onClick={() => remove(elem.id)}>Remover</button>
                            </CardProductCard>
                        )
                    })
                    :
                    <LiAlert>
                        <h2>Sua sacola está vazia</h2>
                        <p>Adicione itens</p>
                    </LiAlert>
            }
        {
            currentSale.length > 0 &&
            <CounterTotal>
                <div>
                    <h4>Total:</h4>
                    <p>R$ {totalPrice}</p>
                </div>
                <button onClick={removeAll}>Romover todos</button>
            </CounterTotal>
        }
        </ContainerCard>
    )
}

export default Cart; 