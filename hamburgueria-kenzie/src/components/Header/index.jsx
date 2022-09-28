import logo from "../../assets/logo.svg";
import React, { useState } from "react";
import {ContainerHeader} from "./style.js";

function Header ({products, setFilteredProducts}) {

    const [itemsFiltered, setItemsFiltered] = useState("")

    function filtered (value) {

        const newProducts = products.filter((elem) => {
            return elem.name === value || elem.category === value 
        })

        setFilteredProducts(newProducts)
    }
    
    return (
        <ContainerHeader>
            <img src={logo} alt="Logo da empresa" />
            <div>
                <input 
                    type="text" 
                    placeholder="Digite Pesquisa"
                    value={itemsFiltered}
                    onChange={(event) => setItemsFiltered(event.target.value)}
                />
                <button onClick={() => filtered(itemsFiltered)}>Pesquisar</button>
            </div>
        </ContainerHeader>
    )
}

export default Header;