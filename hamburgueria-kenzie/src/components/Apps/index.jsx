import Header from "../Header";
import ProductsList from "../ProductsList";
import Cart from "../Cart";
import { DivMain } from "./style.js"

function Apps ({products, setCurrentSale, currentSale, filteredProducts, setFilteredProducts}) {
    return (
        <div>
            <Header
                products={products}
                setFilteredProducts={setFilteredProducts}
            ></Header>
            <DivMain>
                <ProductsList 
                    products={products} 
                    currentSale={currentSale} 
                    setCurrentSale={setCurrentSale}
                    filteredProducts={filteredProducts}
                ></ProductsList>
                <Cart 
                    currentSale={currentSale} 
                    setCurrentSale={setCurrentSale}
                ></Cart>
            </DivMain>
        </div>
    )
}

export default Apps;